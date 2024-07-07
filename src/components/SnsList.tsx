import Image from 'next/image';

import styled from 'styled-components';

export const SnsList = () => {
  return (
    <SnsListStyled>
      <div
        style={{
          position: 'relative',
          width: '2.125rem',
          height: '2.125rem',
        }}
      >
        <Image src="/images/icons/telegram.png" alt="telegram" fill />
      </div>
      <div
        style={{
          position: 'relative',
          width: '2.125rem',
          height: '2.125rem',
        }}
      >
        <Image src="/images/icons/instagram.png" alt="instagram" fill />
      </div>
      <div
        style={{
          position: 'relative',
          width: '2.125rem',
          height: '2.125rem',
        }}
      >
        <Image src="/images/icons/youtube.png" alt="youtube" fill />
      </div>
    </SnsListStyled>
  );
};

const SnsListStyled = styled.div`
  display: flex;
  gap: 1rem;

  img {
    object-fit: contain;
  }
`;
