import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { PrivacyPolicy } from './PrivacyPolicy';

import { HoverArrowButton } from '@/components/HoverArrowButton';
import { InputLabelAndInput } from '@/components/InputLabelAndInput';
import { InputLabelAndTextarea } from '@/components/InputLabelAndTextarea';
import { Checkbox, Modal } from 'antd';
import styled from 'styled-components';

export const ContactForm = () => {
  const router = useRouter();
  const { locale } = router;

  const [open, setOpen] = useState(false);

  return (
    <ContactFormStyled>
      <Image
        src="/images/main/5.jpg"
        alt="5"
        fill
        sizes="100%"
        priority
        style={{
          objectFit: 'cover',
        }}
      />

      <div className="center">
        <h1 className="title">
          {locale === 'en' ? (
            'We will respond with utmost care'
          ) : (
            <>
              정성을 다해 <br />
              답변해 드리겠습니다
            </>
          )}
        </h1>

        <div className="form__container">
          <div className="form__left">
            <InputLabelAndInput
              label={locale === 'en' ? 'Name' : '성 함'}
              placeholder={
                locale === 'en' ? 'Enter your name' : '성함을 입력해주세요'
              }
            />
            <InputLabelAndInput
              label={locale === 'en' ? 'Number' : '전 화 번 호'}
              placeholder={
                locale === 'en'
                  ? 'Enter your phone number'
                  : '전화번호를 입력해주세요'
              }
            />
            <InputLabelAndInput
              label={locale === 'en' ? 'Email' : '이 메 일'}
              placeholder="id@example.com"
            />
          </div>

          <div className="form__right">
            <InputLabelAndTextarea
              label={locale === 'en' ? 'Content' : '내 용'}
              placeholder={
                locale === 'en'
                  ? 'Enter the content you want to inquire about'
                  : '문의하실 내용을 입력해주세요'
              }
            />
          </div>
        </div>

        <div className="checkbox__container">
          <Checkbox className="checkbox" />
          <p onClick={() => setOpen(true)}>
            {locale === 'en'
              ? 'I agree to the collection and use of personal information.'
              : '개인정보 수집 및 이용에 동의합니다.'}
          </p>
        </div>

        <div className="button__container">
          <HoverArrowButton text={locale === 'en' ? 'SEND' : '보내기'} />
        </div>
      </div>

      <Modal
        className="privacy__modal"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={'80%'}
      >
        <PrivacyPolicy />
      </Modal>

      {/* <div className="footer__container">
        <p>회사소개</p>
        <p>이용안내</p>
        <p>이용약관</p>
        <p>개인정보처리방침</p>
      </div> */}
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

    width: 100%;

    display: flex;
    flex-direction: column;

    z-index: 1;

    .title {
      color: #fff;
      font-size: 5rem;
      font-family: 'NotoSansKR-Bold';

      margin-bottom: 5rem;
    }

    .form__container {
      display: flex;
      justify-content: center;

      gap: 1.25rem;

      padding: 0 10rem;

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

      gap: 0.8rem;

      margin-bottom: 1.5rem;

      cursor: pointer;

      .checkbox {
        font-size: 1.25rem;
      }

      p {
        color: #fff;
        font-size: 1.25rem;
      }
    }
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
