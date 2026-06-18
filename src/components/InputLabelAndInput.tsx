import { useId } from 'react';

import styled from 'styled-components';

interface Props {
  label: string;
  placeholder: string;
  inputType?: string;

  value: string;
  setValue: (value: string) => void;
}

export const InputLabelAndInput = ({
  label,
  placeholder,
  inputType = 'text',

  value,
  setValue,
}: Props) => {
  // 한 폼에 여러 개가 붙으므로 id를 고정하면 중복된다
  const id = useId();

  return (
    <InputLabelAndInputStyled>
      <label htmlFor={id}>{label}</label>
      <div className="vertical__line" />
      <input
        type={inputType}
        id={id}
        placeholder={placeholder}
        value={value || ''}
        onChange={e => setValue && setValue(e.target.value)}
      />
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

  label {
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

    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
