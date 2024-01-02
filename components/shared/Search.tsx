import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
const Input = styled.input``;
const Label = styled.label``;

interface ISearch {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  label: string;
  placeholder: string;
}
export default function Search({
  input = '',
  setInput = () => {},
  label = '',
  placeholder = '',
}: ISearch) {
  return (
    <Wrapper>
      <Label>
        {label}
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
        />
      </Label>
    </Wrapper>
  );
}
