import styled from 'styled-components';

interface Props {
  label: string;
  placeholder: string;
}

export const InputLabelAndTextarea = ({ label, placeholder }: Props) => {
  return (
    <InputLabelAndTextareaStyled>
      <p>{label}</p>
      <textarea id="textarea" placeholder={placeholder} />
    </InputLabelAndTextareaStyled>
  );
};

const InputLabelAndTextareaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: self-start;
  gap: 1.875rem;

  width: 33.75rem;
  height: 100%;

  padding: 1.5rem;

  background-color: rgba(47, 47, 47, 0.35);

  border-radius: 0.5rem;

  p {
    text-align: justify;

    width: 4.5rem;

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

  textarea {
    border: none;
    outline: none;
    resize: none;

    width: 100%;
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
