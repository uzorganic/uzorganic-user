import Image from 'next/image';

import styled from 'styled-components';

interface Props {
  src: string;
  alt: string;

  height?: string;
  objectFit?: 'cover' | 'contain';
}

export const FullScreenImage = ({
  src,
  alt,
  height = '100vh',
  objectFit = 'cover',
}: Props) => {
  return (
    <FullScreenImageStyled height={height} $objectFit={objectFit}>
      <Image className="image" src={src} alt={alt} fill sizes="100%" priority />
    </FullScreenImageStyled>
  );
};

const FullScreenImageStyled = styled.div<{
  height: string;
  $objectFit?: 'cover' | 'contain';
}>`
  position: relative;

  height: ${({ height }) => height};

  .image {
    object-fit: ${({ $objectFit }) => $objectFit};
  }
`;
