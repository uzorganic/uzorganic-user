import Image from 'next/image';

import styled from 'styled-components';

export const SnsList = () => {
  return (
    <SnsListStyled>
      <div className="icon">
        <Image
          src="/images/icons/telegram.png"
          alt="telegram"
          fill
          sizes="100%"
        />
      </div>
      <div className="icon">
        <Image
          src="/images/icons/instagram.png"
          alt="instagram"
          fill
          sizes="100%"
        />
      </div>
      <div className="icon">
        <Image
          src="/images/icons/youtube.png"
          alt="youtube"
          fill
          sizes="100%"
        />
      </div>
    </SnsListStyled>
  );
};

const SnsListStyled = styled.div`
  display: flex;
  gap: 1rem;

  .icon {
    position: relative;

    width: 2.125rem;
    height: 2.125rem;

    cursor: pointer;
  }

  img {
    object-fit: contain;
  }
`;
