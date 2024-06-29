import Image from 'next/image';

import styled from 'styled-components';

interface Props {
  src: string;
  alt: string;
}

export const FullScreenImage = ({ src, alt }: Props) => {
  return (
    <FullScreenImageStyled>
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: 'cover',
        }}
      />
    </FullScreenImageStyled>
  );
};

const FullScreenImageStyled = styled.div`
  position: relative;

  height: 100vh;
`;
