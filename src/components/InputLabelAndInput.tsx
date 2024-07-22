import styled from 'styled-components';

interface Props {
  label: string;
  placeholder: string;
}

export const InputLabelAndInput = ({ label, placeholder }: Props) => {
  return (
    <InputLabelAndInputStyled>
      <p>{label}</p>
      <div className="vertical__line" />
      <input type="text" id="input" placeholder={placeholder} />
    </InputLabelAndInputStyled>
  );
};

const InputLabelAndInputStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1.875rem;

  height: 4.375rem;

  padding: 0 1.5rem;

  background-color: rgba(47, 47, 47, 0.35);

  border-radius: 0.5rem;

  p {
    text-align: justify;

    width: 8rem;

    color: #fff;
    font-size: 1.7rem;
    line-height: 0;

    &::before,
    &::after {
      content: '';
      display: inline-block;
      width: 100%;
    }
  }

  .vertical__line {
    width: 0.125rem;
    height: 2.5rem;

    background-color: #fff;
  }

  input {
    border: none;
    outline: none;

    flex: 1;

    width: 20rem;

    background-color: transparent;

    color: #fff;
    font-size: 1.5rem;

    &::placeholder {
      color: #bbbbbb;
    }
  }
`;
