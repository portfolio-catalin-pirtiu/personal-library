import styled from 'styled-components';
import { colors } from '../../lib/colors';
import { Input } from './FormComponents';
import { IDbAuthor, AuthorFilterOption } from '../../lib/definitions';

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

interface ISelect<T> {
  defaultOption: string;
  options: T;
}

export default function Select({
  defaultOption,
  options,
}: ISelect<IDbAuthor[] | AuthorFilterOption[]>) {
  let content: JSX.Element;

  function isAuthor(
    option: IDbAuthor | AuthorFilterOption
  ): option is IDbAuthor {
    return (option as IDbAuthor).author_id !== undefined;
  }

  const isAuthorArray = options.every(isAuthor);

  if (isAuthorArray) {
    content = (
      <>
        {options.map((option) => (
          <Option
            value={option.author_id}
            key={option.author_id}
          >{`${option.first_name} ${option.last_name}`}</Option>
        ))}
      </>
    );
  } else {
    content = (
      <>
        {options.map((option) => (
          <Option value={option} key={option}>{`${option}`}</Option>
        ))}
      </>
    );
  }

  return (
    <Wrapper>
      <Input name="author_id" component="select">
        <Option value="">{defaultOption}</Option>
        {content}
      </Input>
    </Wrapper>
  );
}
