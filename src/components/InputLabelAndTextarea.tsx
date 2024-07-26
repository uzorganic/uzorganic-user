import styled from 'styled-components';

interface Props {
  label: string;
  placeholder: string;
}

export const InputLabelAndTextarea = ({ label, placeholder }: Props) => {
  return (
    <InputLabelAndTextareaStyled>
      <p>{label}</p>
      <div className="vertical__line" />
      <textarea id="textarea" placeholder={placeholder} />
    </InputLabelAndTextareaStyled>
  );
};

const InputLabelAndTextareaStyled = styled.div`
  display: flex;
  align-items: self-start;
  gap: 1.875rem;

  height: 100%;

  padding: 1.5rem;

  background-color: rgba(47, 47, 47, 0.35);

  border-radius: 0.5rem;

  p {
    text-align: justify;

    width: 6rem;
    margin-right: 2rem;

    color: #fff;
    font-size: 1.75rem;
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
    height: 2rem;

    background-color: #fff;
  }

  textarea {
    border: none;
    outline: none;
    resize: none;

    width: 20rem;
    height: 100%;

    margin-top: -0.3rem;

    background-color: transparent;

    color: #fff;
    font-size: 1.5rem;

    &::placeholder {
      color: #bbbbbb;
    }
  }
`;
