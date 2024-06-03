import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../lib/colors';
import { AuthorFilterOption } from '../../lib/definitions';
import { capitalize } from '../../utils/capitalize';

const Wrapper = styled.div`
  display: grid;
  border: 0.15em solid ${colors.gray};
  border-radius: 7px;
  padding: 0.25em 0.5em;
  cursor: pointer;
  line-height: 1.1;
  grid-template-areas: 'select';
  align-items: center;
  text-align: center;
  &:after {
    content: '';
    width: 0.8em;
    height: 0.5em;
    background-color: black;
    clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
    grid-area: select;
    justify-self: end;
  }
`;

const SelectElement = styled.ul``;
const OptionElement = styled.li`
  &:hover {
    background-color: green;
  }
`;
const SelectionWindow = styled.div`
  display: flex;
`;
const FilterPrompt = styled.div`
  font-weight: bold;
`;
const FilterContent = styled.div``;

interface SelectProps {
  defaultOption: string;
  options: AuthorFilterOption[];
  selection: AuthorFilterOption;
  setSelection: Dispatch<SetStateAction<AuthorFilterOption>>;
}

export default function Select({
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
      <SelectElement>
        <SelectionWindow>
          <FilterPrompt>{defaultOption}</FilterPrompt>
          <FilterContent>{capitalize(selection)}</FilterContent>
        </SelectionWindow>
        {show &&
          options.map((option) => (
            <OptionElement
              onClick={() => setSelection(option)}
              value={option}
              key={option}
            >{`${capitalize(option)}`}</OptionElement>
          ))}
      </SelectElement>
    </Wrapper>
  );
}
