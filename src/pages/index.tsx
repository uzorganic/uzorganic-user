import { useState } from 'react';

import Image from 'next/image';

import { CenterTitleAndButton } from '@/components/CenterTitleAndButton';
import { FractionSwiper } from '@/components/FractionSwiper';
import { FullScreenImage } from '@/components/FullScreenImage';
import { HoverArrowButton } from '@/components/HoverArrowButton';
import { IconAndText } from '@/components/IconAndText';
import { InputLabelAndInput } from '@/components/InputLabelAndInput';
import { InputLabelAndTextarea } from '@/components/InputLabelAndTextarea';
import { SnsList } from '@/components/SnsList';
import { YoutubeFilled } from '@ant-design/icons';

export default function Home() {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <FractionSwiper>
        <FullScreenImage src="/images/main/1.png" alt="1" />
        <FullScreenImage src="/images/main/2.png" alt="2" />
        <FullScreenImage src="/images/main/3.png" alt="3" />
        <FullScreenImage src="/images/main/4.png" alt="4" />
      </FractionSwiper>

      <CenterTitleAndButton
        imageSrc="/images/main/2.png"
        title="회사 소개"
        description="I’m ORGANIC의 풍부한 경험으로 세계적인 천연물 기업으로 나아가겠습니다."
        buttonComponent={<HoverArrowButton text="바로가기" />}
      />
      <CenterTitleAndButton
        imageSrc="/images/main/3.png"
        title="특허 / 인증"
        description="여러 분야의 전문가들이 만나 확실한 제품을 만듭니다."
        buttonComponent={<HoverArrowButton text="바로가기" />}
      />
      <CenterTitleAndButton
        imageSrc="/images/main/4.png"
        title="유튜브"
        description="유튜브에서 최신 소식을 확인해보세요!"
        buttonComponent={
          <YoutubeFilled
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{
              fontSize: '6.25rem',
              color: isHover ? '#BC1515' : '#fff',
              cursor: 'pointer',
            }}
          />
        }
      />

      <div
        style={{
          position: 'relative',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          height: '100vh',
        }}
      >
        <Image src="/images/main/5.png" alt="5" fill />

        <div
          className="center"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',

            display: 'flex',
            flexDirection: 'column',

            zIndex: 1,
          }}
        >
          <h1
            className="title"
            style={{
              color: '#fff',
              fontSize: '5rem',

              marginBottom: '5rem',
            }}
          >
            정성을 다해
            <br />
            답변해 드리겠습니다
          </h1>

          <div
            className="form__container"
            style={{
              display: 'flex',
              gap: '1.25rem',

              width: '67.5rem',

              marginBottom: '2.25rem',
            }}
          >
            <div
              className="form__left"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',

                width: '33.75rem',
              }}
            >
              <InputLabelAndInput
                label="성 함"
                placeholder="성함을 입력해주세요"
              />
              <InputLabelAndInput
                label="전 화 번 호"
                placeholder="전화번호를 입력해주세요"
              />
              <InputLabelAndInput
                label="이 메 일"
                placeholder="id@example.com"
              />
            </div>

            <div className="form__right">
              <InputLabelAndTextarea
                label="내 용"
                placeholder="문의하실 내용을 입력해주세요"
              />
            </div>
          </div>

          <div
            className="checkbox__container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              marginBottom: '1.5rem',
            }}
          >
            <IconAndText
              icon="/images/icons/check.png"
              text="개인정보 수집 및 이용에 동의합니다."
            />
          </div>

          <div
            className="button__container"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <HoverArrowButton text="보내기" width="33.75rem" />
          </div>
        </div>

        <div
          className="sns__container"
          style={{
            position: 'absolute',
            bottom: 'var(--fixed-padding)',
            left: 'var(--fixed-padding)',
          }}
        >
          <SnsList />
        </div>

        <div
          className="footer__container"
          style={{
            position: 'absolute',
            bottom: 'var(--fixed-padding)',
            left: '50%',
            transform: 'translateX(-50%)',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
          }}
        >
          <p style={{ color: '#fff', fontSize: '1.25rem' }}>회사소개</p>
          <p style={{ color: '#fff', fontSize: '1.25rem' }}>이용안내</p>
          <p style={{ color: '#fff', fontSize: '1.25rem' }}>이용약관</p>
          <p style={{ color: '#fff', fontSize: '1.25rem' }}>개인정보처리방침</p>
        </div>
      </div>
    </>
  );
}
