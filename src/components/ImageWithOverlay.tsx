import Image from 'next/image';

import styled from 'styled-components';

interface Props {
  img: any;
  height?: string;
  leftTop?: React.ReactNode;
}

export const ImageWithOverlay = ({ img, height, leftTop }: Props) => {
  return (
    <ImageWithOverlayStyled height={height}>
      <Image
        src={img}
        alt=""
        fill
        sizes="100%"
        priority
        style={{ objectFit: 'cover' }}
      />
      <div className="overlay__left__top">{leftTop}</div>
    </ImageWithOverlayStyled>
  );
};

const ImageWithOverlayStyled = styled.div<{
  height?: string;
}>`
  position: relative;

  width: 100%;
  height: ${props => (props.height ? props.height : '100%')};
  overflow: hidden;

  .overlay__left__top {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
