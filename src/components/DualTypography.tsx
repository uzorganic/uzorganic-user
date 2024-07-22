import styled from 'styled-components';

interface Props {
  primaryText: React.ReactNode;
  secondaryText: React.ReactNode;

  className?: string;
}

export const DualTypography = ({
  primaryText,
  secondaryText,
  className,
}: Props) => {
  return (
    <DualTypographyStyled className={className}>
      <h2>{primaryText}</h2>
      <h3>{secondaryText}</h3>
    </DualTypographyStyled>
  );
};

const DualTypographyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  gap: 3.75rem;

  h2 {
    color: #484036;

    font-size: 1.875rem;
    font-family: 'NotoSansKR-Medium';
  }

  h3 {
    color: #777777;

    font-size: 1.875rem;
  }
`;
