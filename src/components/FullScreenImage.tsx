import Image from 'next/image';

import styled from 'styled-components';

interface Props {
  src: string;
  alt: string;

  height?: string;
}

export const FullScreenImage = ({ src, alt, height = '100vh' }: Props) => {
  return (
    <FullScreenImageStyled height={height}>
      <Image src={src} alt={alt} fill sizes="100%" priority />
    </FullScreenImageStyled>
  );
};

const FullScreenImageStyled = styled.div<{ height: string }>`
  position: relative;

  height: ${({ height }) => height};

  .image {
    object-fit: cover;
  }
`;
