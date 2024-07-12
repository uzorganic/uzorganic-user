import Image from 'next/image';

import { HoverArrowButton } from '@/components/HoverArrowButton';
import { IconAndText } from '@/components/IconAndText';
import { InputLabelAndInput } from '@/components/InputLabelAndInput';
import { InputLabelAndTextarea } from '@/components/InputLabelAndTextarea';
import { SnsList } from '@/components/SnsList';
import styled from 'styled-components';

export const ContactForm = () => {
  return (
    <ContactFormStyled>
      <Image src="/images/main/5.png" alt="5" fill />

      <div className="center">
        <h1 className="title">
          정성을 다해
          <br />
          답변해 드리겠습니다
        </h1>

        <div className="form__container">
          <div className="form__left">
            <InputLabelAndInput
              label="성 함"
              placeholder="성함을 입력해주세요"
            />
            <InputLabelAndInput
              label="전 화 번 호"
              placeholder="전화번호를 입력해주세요"
            />
            <InputLabelAndInput label="이 메 일" placeholder="id@example.com" />
          </div>

          <div className="form__right">
            <InputLabelAndTextarea
              label="내 용"
              placeholder="문의하실 내용을 입력해주세요"
            />
          </div>
        </div>

        <div className="checkbox__container">
          <IconAndText
            icon="/images/icons/check.png"
            text="개인정보 수집 및 이용에 동의합니다."
          />
        </div>

        <div className="button__container">
          <HoverArrowButton text="보내기" width="33.75rem" />
        </div>
      </div>

      <div className="sns__container">
        <SnsList />
      </div>

      <div className="footer__container">
        <p>회사소개</p>
        <p>이용안내</p>
        <p>이용약관</p>
        <p>개인정보처리방침</p>
      </div>
    </ContactFormStyled>
  );
};

const ContactFormStyled = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    display: flex;
    flex-direction: column;

    z-index: 1;

    .title {
      color: #fff;
      font-size: 5rem;

      margin-bottom: 5rem;
    }

    .form__container {
      display: flex;
      gap: 1.25rem;

      margin-bottom: 2.25rem;

      .form__left {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
      }
    }

    .checkbox__container {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-bottom: 1.5rem;
    }

    .button__container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .sns__container {
    position: absolute;
    bottom: var(--fixed-padding);
    left: var(--fixed-padding);
  }

  .footer__container {
    position: absolute;
    bottom: var(--fixed-padding);
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    p {
      color: #fff;
      font-size: 1.25rem;
    }
  }

  @media (max-width: 768px) {
    .center {
      .title {
        font-size: 3rem;
      }

      .form__container {
        flex-direction: column;

        .form__right {
          textarea {
            height: 10rem;
          }
        }
      }
    }

    .footer__container {
      gap: 1rem;

      p {
        font-size: 1rem;
      }
    }
  }
`;
