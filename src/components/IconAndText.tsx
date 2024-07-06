import Image from 'next/image';

import styled from 'styled-components';

interface Props {
  icon: string;
  text: string;
}

export const IconAndText = ({ icon, text }: Props) => {
  return (
    <IconAndTextStyled>
      <div className="icon">
        <Image src={icon} alt="icon" fill />
      </div>
      <p>{text}</p>
    </IconAndTextStyled>
  );
};

const IconAndTextStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  .icon {
    position: relative;

    width: 1.5rem;
    height: 1.5rem;

    img {
      width: 100%;
      height: 100%;

      object-fit: contain;
    }
  }

  p {
    color: #fff;
    font-size: 1.25rem;
  }
`;
