import styled from 'styled-components';
import { SelectAuthorProps } from '../../lib/definitions';

const Wrapper = styled.div``;
const Select = styled.ul``;
const Option = styled.li``;

export default function AuthorSelector({
  authors = [],
  handleSelectedAuthor = () => {},
}: SelectAuthorProps) {
  return (
    <Wrapper>
      <Select>
        {authors.map((author) => (
          <Option
            key={author.author_id}
            onClick={() => handleSelectedAuthor(author.author_id)}
          >{`${author.first_name} ${author.last_name}`}</Option>
        ))}
      </Select>
    </Wrapper>
  );
}
