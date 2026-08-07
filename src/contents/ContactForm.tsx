import { useState } from 'react';

import { useRouter } from 'next/router';

import { PrivacyPolicy } from './PrivacyPolicy';

import { HoverArrowButton } from '@/components/HoverArrowButton';
import { InputLabelAndInput } from '@/components/InputLabelAndInput';
import { InputLabelAndTextarea } from '@/components/InputLabelAndTextarea';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { Checkbox, Form, message, Modal } from 'antd';
import axios from 'axios';
import styled from 'styled-components';

interface ContactValues {
  name?: string;
  phone?: string;
  email?: string;
  content?: string;
  agree?: boolean;
}

interface Props {
  // /contact 에서는 이 제목이 페이지 h1, 메인에서는 한 섹션이라 h2.
  titleTag?: 'h1' | 'h2';
}

export const ContactForm = ({ titleTag: Title = 'h1' }: Props) => {
  const router = useRouter();
  const { locale } = router;

  const [open, setOpen] = useState(false);

  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const sendContact = async (values: ContactValues) => {
    try {
      // 같은 배포 안의 API route. 여기서만 메일 API 키를 쥔다.
      await axios.post('/api/contact', { ...values, locale });

      form.resetFields();

      messageApi.success(
        locale === 'en'
          ? 'Successfully sent. We will contact you as soon as possible.'
          : locale === 'uz'
            ? "Muvaffaqiyatli yuborildi. Biz imkon qadar tezroq siz bilan bog'lanamiz."
            : '성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.',
      );
    } catch (error) {
      messageApi.error(
        locale === 'en'
          ? 'Failed to send. Please try again later.'
          : locale === 'uz'
            ? "Jo'natib bo'lmadi. Iltimos, keyinroq qayta urinib ko'ring."
            : '전송에 실패했습니다. 잠시 후 다시 시도해주세요.',
      );
      return;
    }
  };

  const onFinish = (values: ContactValues) => {
    if (!values.name || !values.phone || !values.email || !values.content) {
      messageApi.error(
        locale === 'en'
          ? 'Please fill in all the information.'
          : locale === 'uz'
            ? "Iltimos, barcha ma'lumotlaringizni kiriting."
            : '모든 정보를 입력해주세요.',
      );
      return;
    } else if (!values.agree) {
      messageApi.error(
        locale === 'en'
          ? 'Please agree to the collection and use of personal information.'
          : locale === 'uz'
            ? "Iltimos, shaxsiy ma'lumotlarni to'plash va ulardan foydalanishga rozilik bildiring."
            : '개인정보 수집 및 이용에 동의해주세요.',
      );
      return;
    }

    sendContact(values);
  };

  return (
    <ContactFormStyled>
      <ResponsiveImage
        className="background"
        src="/images/main/5.jpg"
        mobileSrc="/images/main/5_mb.jpg"
        alt=""
      />

      <div className="center">
        <Title className="title">
          {locale === 'en' ? (
            <>
              We will respond with <br />
              utmost care
            </>
          ) : locale === 'uz' ? (
            <>
              Biz sizga yuksak
              <br /> ehtiyotkorlik bilan
              <br /> javob beramiz
            </>
          ) : (
            <>
              정성을 다해 <br />
              답변해 드리겠습니다
            </>
          )}
        </Title>

        <Form
          form={form}
          onFinish={values => {
            onFinish(values);
          }}
        >
          <div className="form__container">
            <div className="form__left">
              <Form.Item name="name" noStyle>
                <InputLabelAndInput
                  label={
                    locale === 'en' ? 'Name' : locale === 'uz' ? 'Ism' : '성 함'
                  }
                  placeholder={
                    locale === 'en'
                      ? 'Enter your name'
                      : locale === 'uz'
                        ? 'Ismingizni kiriting'
                        : '성함을 입력해주세요'
                  }
                  value={form.getFieldValue('name')}
                  setValue={value => form.setFieldsValue({ name: value })}
                />
              </Form.Item>

              <Form.Item name="phone" noStyle>
                <InputLabelAndInput
                  label={
                    locale === 'en'
                      ? 'Number'
                      : locale === 'uz'
                        ? 'Raqam'
                        : '전 화 번 호'
                  }
                  placeholder={
                    locale === 'en'
                      ? 'Enter your phone number'
                      : locale === 'uz'
                        ? 'Telefon raqamingizni kiriting'
                        : '전화번호를 입력해주세요'
                  }
                  inputType="number"
                  value={form.getFieldValue('phone')}
                  setValue={value => form.setFieldsValue({ phone: value })}
                />
              </Form.Item>

              <Form.Item name="email" noStyle>
                <InputLabelAndInput
                  label={locale === 'en' ? 'Email' : 'Email'}
                  placeholder="id@example.com"
                  value={form.getFieldValue('email')}
                  setValue={value => form.setFieldsValue({ email: value })}
                />
              </Form.Item>
            </div>

            <div className="form__right">
              <Form.Item name="content" noStyle>
                <InputLabelAndTextarea
                  label={
                    locale === 'en'
                      ? 'Content'
                      : locale === 'uz'
                        ? 'Mazmuni'
                        : '내 용'
                  }
                  placeholder={
                    locale === 'en'
                      ? 'Enter the content you want to inquire about'
                      : locale === 'uz'
                        ? 'Qiziqtirgan savolingizni yozib qoldiring'
                        : '문의하실 내용을 입력해주세요'
                  }
                  value={form.getFieldValue('content')}
                  setValue={value => form.setFieldsValue({ content: value })}
                />
              </Form.Item>
            </div>
          </div>

          {/* 화면 밖에 숨긴 허니팟. 사람 눈에도 스크린리더에도 안 잡히고 봇만 채운다.
              값이 차 있으면 서버가 메일을 보내지 않는다. */}
          <Form.Item name="company" noStyle>
            <input
              className="honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
          </Form.Item>

          <div className="checkbox__container">
            <Form.Item name="agree" valuePropName="checked" noStyle>
              <Checkbox className="checkbox" />
            </Form.Item>

            <p onClick={() => setOpen(true)}>
              {locale === 'en'
                ? 'I agree to the collection and use of personal information.'
                : locale === 'uz'
                  ? "Shaxsiy ma'lumotlarni to'plash va ulardan foydalanishga roziman."
                  : '개인정보 수집 및 이용에 동의합니다.'}
            </p>
          </div>

          <div className="button__container">
            <HoverArrowButton
              text={
                locale === 'en'
                  ? 'SEND'
                  : locale === 'uz'
                    ? "Jo'natish"
                    : '보내기'
              }
              onClick={() => {
                form.submit();
              }}
            />
          </div>
        </Form>
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

      {contextHolder}
    </ContactFormStyled>
  );
};

const ContactFormStyled = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  .background {
    object-fit: cover;
  }

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

    /* display: none 은 일부 봇이 걸러낸다. 화면 밖으로 밀어내야 채워 넣는다. */
    .honeypot {
      position: absolute;
      left: -9999px;

      width: 1px;
      height: 1px;

      opacity: 0;
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

  @media (max-width: 960px) {
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
