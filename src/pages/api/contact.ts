import type { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';

// 문의 내용을 회사 메일함에 기록으로 남긴다.
// 브라우저가 아니라 이 함수가 보내므로 API 키는 클라이언트로 나가지 않는다.
// ponytail: 도메인 인증 전까지 Resend 가 주는 주소를 쓴다.
// 이 주소로는 Resend 계정 메일로만 보낼 수 있다(다른 수신처는 403).
// uzorganic@naver.com 을 추가하려면 resend.com/domains 에서 도메인을 인증하고
// FROM 을 noreply@uzorganic.com 으로 바꿔야 한다. 그때 TO 는 배열도 받는다.
const TO = 'aswoo55555@gmail.com';
const FROM = 'UZORGANIC 문의 <onboarding@resend.dev>';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // res.end() 의 반환값을 그대로 return 하면 Next 가 경고한다. 값 없이 빠져나간다.
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const { name, phone, email, content, agree, locale, company } = req.body ?? {};

  // company 는 화면 밖에 숨긴 허니팟. 사람은 못 채우고 봇만 채운다.
  // 봇에게는 성공처럼 보여야 재시도를 안 한다.
  if (company) {
    res.status(200).end();
    return;
  }

  // 화면 쪽 검증은 폼을 거치지 않고 직접 쏘면 그만이라, 여기서 다시 본다.
  if (!name || !phone || !email || !content || !agree) {
    res.status(400).end();
    return;
  }

  // 길이를 안 막으면 메일함이 통째로 막힌다.
  if (
    String(name).length > 50 ||
    String(phone).length > 30 ||
    String(email).length > 100 ||
    String(content).length > 2000
  ) {
    res.status(400).end();
    return;
  }

  try {
    await axios.post(
      'https://api.resend.com/emails',
      {
        from: FROM,
        to: TO,
        // 담당자가 답장을 누르면 문의자에게 바로 간다
        reply_to: email,
        // 사용자 입력이 헤더로 들어가는 유일한 자리라 개행을 지운다
        subject: `[문의] ${String(name).replace(/[\r\n]/g, ' ')}`,
        text: [
          `이름: ${name}`,
          `전화: ${phone}`,
          `이메일: ${email}`,
          // 어느 언어 사이트에서 온 문의인지. 어느 언어로 답할지가 여기서 갈린다.
          `언어: ${locale ?? '-'}`,
          `개인정보 수집·이용 동의: 예`,
          '',
          '---',
          '',
          content,
        ].join('\n'),
      },
      {
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
      },
    );
  } catch (error) {
    // 안 남기면 실패가 조용히 사라진다. Resend 는 거절 사유를 응답 본문에 준다.
    console.error(
      'contact mail failed',
      axios.isAxiosError(error) ? error.response?.data : error,
    );

    res.status(500).end();
    return;
  }

  res.status(200).end();
}
