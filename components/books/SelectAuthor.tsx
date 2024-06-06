import { useState } from 'react';
import { IDbAuthor } from '../../lib/definitions';
import { Wrapper, Select, Option, Window } from '../shared/SelectElements/SelectElements';


export interface SelectAuthorProps {
  authors: IDbAuthor[];
  handleSelectedAuthor: (authorID: string) => void;
  defaultOption?: string;
}

export default function AuthorSelector({
  authors = [],
  handleSelectedAuthor = () => {},
  defaultOption = 'Select Author for new Book',
}: SelectAuthorProps) {
  const [show, setShow] = useState(false);
  const [option, setOption] = useState(defaultOption);

  const toggleShow = () => setShow(!show);

  return (
    <Wrapper onClick={toggleShow}>
      <Select>
        <Window>{option}</Window>
        {show &&
          authors.map((author) => (
            <Option
              key={author.author_id}
              onClick={() => {
                handleSelectedAuthor(author.author_id);
                setOption(`${author.first_name} ${author.last_name}`);
              }}
            >{`${author.first_name} ${author.last_name}`}</Option>
          ))}
      </Select>
    </Wrapper>
  );
}
