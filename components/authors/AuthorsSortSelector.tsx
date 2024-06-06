import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { AuthorFilterOption } from '../../lib/definitions';
import { capitalize } from '../../utils/capitalize';
import {
  Wrapper,
  Select,
  Option,
  Options,
  Window,
} from '../shared/SelectElements/SelectElements';

const SelectionWindow = styled.div`
  display: flex;
`;
const FilterPrompt = styled.div`
  font-weight: bold;
`;
interface SelectProps {
  defaultOption: string;
  options: AuthorFilterOption[];
  selection: AuthorFilterOption;
  setSelection: Dispatch<SetStateAction<AuthorFilterOption>>;
}

export default function AuthorsSortSelector({
  defaultOption,
  options,
  selection,
  setSelection,
}: SelectProps) {
  const [show, setShow] = useState(false);

  function toggleShowOptions() {
    setShow(!show);
  }

  return (
    <Wrapper onClick={toggleShowOptions}>
      <Select>
        <SelectionWindow>
          <FilterPrompt>{defaultOption}</FilterPrompt>
          <Window>{capitalize(selection)}</Window>
        </SelectionWindow>
        <Options>
          {show &&
            options.map((option) => (
              <Option
                onClick={() => setSelection(option)}
                value={option}
                key={option}
              >{`${capitalize(option)}`}</Option>
            ))}
        </Options>
      </Select>
    </Wrapper>
  );
}
