import { useState } from 'react';

import { CenterTitleAndButton } from '@/components/CenterTitleAndButton';
import { FractionSwiper } from '@/components/FractionSwiper';
import { FullScreenImage } from '@/components/FullScreenImage';
import { HoverArrowButton } from '@/components/HoverArrowButton';
import { ContactForm } from '@/contents/ContactForm';
import { HomeLayout } from '@/layouts/HomeLayout';
import { YoutubeFilled } from '@ant-design/icons';

const Home = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <FractionSwiper effect="fade">
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

      <ContactForm />
    </>
  );
};

Home.layout = (page: React.ReactNode) => <HomeLayout>{page}</HomeLayout>;

export default Home;
