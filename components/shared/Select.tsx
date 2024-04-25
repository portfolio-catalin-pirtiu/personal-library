import { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../lib/colors';
import { Input } from './FormComponents';
import { IDbAuthor, AuthorFilterOption } from '../../lib/definitions';
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

const Option = styled.option``;
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

interface ISelect<T> {
  defaultOption: string;
  options: T;
}

export default function Select({
  defaultOption,
  options,
}: ISelect<IDbAuthor[] | AuthorFilterOption[]>) {
  let content: JSX.Element;
  const [selectOptionsVisibility, setSelectOptionsVisibility] = useState(false);
  const [selection, setSelection] = useState('');

  function isAuthor(
    option: IDbAuthor | AuthorFilterOption
  ): option is IDbAuthor {
    return (option as IDbAuthor).author_id !== undefined;
  }

  function toggleShowOptions() {
    setSelectOptionsVisibility(!selectOptionsVisibility);
  }

  const isAuthorArray = options.every(isAuthor);

  if (isAuthorArray) {
    content = (
      <Input name="author_id" component="select">
        <Option value="">{defaultOption}</Option>
        {options.map((option) => (
          <Option
            value={option.author_id}
            key={option.author_id}
          >{`${option.first_name} ${option.last_name}`}</Option>
        ))}
      </Input>
    );
  } else {
    content = (
      <SelectElement>
        <SelectionWindow>
          <FilterPrompt>{defaultOption}</FilterPrompt>
          <FilterContent>{capitalize(selection)}</FilterContent>
        </SelectionWindow>
        {selectOptionsVisibility &&
          options.map((option) => (
            <OptionElement
              onClick={() => setSelection(option)}
              value={option}
              key={option}
            >{`${capitalize(option)}`}</OptionElement>
          ))}
      </SelectElement>
    );
  }

  return <Wrapper onClick={toggleShowOptions}>{content}</Wrapper>;
}
