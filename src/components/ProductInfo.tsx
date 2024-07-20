import styled from 'styled-components';

interface Props {
  headerHeight: number;

  title: string;
  description: string;
  content: React.ReactNode;
  volume: string;
  link: string;

  className?: string;
}

export const ProductInfo = ({
  headerHeight = 0,

  title,
  description,
  content,
  volume,
  link,

  className,
}: Props) => {
  return (
    <ProductInfoStyled $headerHeight={headerHeight} className={className}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <h2 className="content">{content}</h2>
      <h3 className="volume">{`< ${volume} >`}</h3>
      <div
        className="buy__button"
        onClick={() => {
          window.open(link, '_blank');
        }}
      >
        구매하러 가기
        <span>→</span>
      </div>
    </ProductInfoStyled>
  );
};

const ProductInfoStyled = styled.div<{
  $headerHeight: number;
}>`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: calc(100vh - ${({ $headerHeight }) => $headerHeight}px);

  background-color: #a4aeae;

  color: #fff;

  .title {
    font-size: 2.75rem;
    font-family: 'Oranienbaum-Regular', sans-serif;
  }

  .description {
    font-size: 1.125rem;
    margin-top: 1.5rem;
  }

  .content {
    text-align: center;
    font-size: 1.875rem;
    margin-top: 2.5rem;
  }

  .volume {
    font-size: 1.55rem;
    margin-top: 1.875rem;
  }

  .buy__button {
    position: absolute;
    bottom: 3.125rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    border: 0.125rem solid #fff;

    padding: 0.25rem 1.5rem;

    font-size: 1.5rem;

    cursor: pointer;

    span {
      font-size: 1.875rem;
    }
  }

  @media (max-width: 960px) {
  }
`;
