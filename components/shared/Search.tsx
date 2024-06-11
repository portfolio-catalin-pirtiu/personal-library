import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { inputStyle } from '../../lib/cssStrings';

const Wrapper = styled.div``;
const Input = styled.input`
  ${inputStyle}
`;
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
  const [place, setPlace] = useState(placeholder);
  return (
    <Wrapper>
      <Label>
        {label}
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setPlace('')}
          onBlur={() => setPlace(placeholder)}
          placeholder={place}
        />
      </Label>
    </Wrapper>
  );
}
