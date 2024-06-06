import styled from 'styled-components';
import { useState } from 'react';
import useFetchAuthors from '../../lib/useFetchAuthors';
import Search from '../../components/shared/Search';
import Select from '../../components/authors/Select';
import RenderAuthors from '../../components/authors/RenderAuthors';
import { AuthorFilterOption, IDbAuthor } from '../../lib/definitions';
import { Author } from '../../lib/classes';
import toast from 'react-hot-toast';
import { AuthorsSorter } from '../../lib/AuthorsSort/AuthorsSorter';

const Wrapper = styled.div`
  border: 2px solid black;
  border-radius: 15px;
  padding: 2rem;
`;

export default function Authors() {
  let apiUrl = '/api/authors/';
  const [searchAuthor, setSearchAuthor] = useState('');
  const [selection, setSelection] = useState<AuthorFilterOption>('ascending');

  if (searchAuthor !== '') {
    apiUrl = apiUrl + `?author=${searchAuthor}`;
  }

  const { authors, setAuthors } = useFetchAuthors(apiUrl);

  function handleEditAuthor(editedAuthor: IDbAuthor) {
    const editedAuthors = authors.map((author) => {
      if (editedAuthor.author_id === author.author_id) {
        return editedAuthor;
      } else {
        return author;
      }
    });
    setAuthors(editedAuthors);
  }

  function handleDeleteAuthor(id: string) {
    const remainingAuthors = authors.filter(
      (author) => author.author_id !== id
    );
    setAuthors(remainingAuthors);
  }

  async function handleEditAuthorDatabaseUpdate(editedAuthor: IDbAuthor) {
    const author = new Author(editedAuthor);

    try {
      const res = await fetch(`${apiUrl}edit/${editedAuthor.author_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(author),
      });

      if (res.ok) {
        toast.success('Update Successful.');
      } else {
        throw new Error('An error occurred while updating author.');
      }
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  }

  async function handleDeleteAuthorDatabase(id: string) {
    try {
      const res = await fetch(`${apiUrl}delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        toast.success('Delete Successful.');
      } else {
        throw new Error('An error occurred while deleting author.');
      }
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  }
  const sortAuthors = new AuthorsSorter();
  authors.sort(sortAuthors[selection]);
  return (
    <Wrapper>
      <h1>All Authors</h1>
      <Search
        input={searchAuthor}
        setInput={setSearchAuthor}
        label="Author"
        placeholder="Search"
      />
      <Select
        defaultOption="Sort by:"
        options={['ascending', 'descending']}
        selection={selection}
        setSelection={setSelection}
      />
      <RenderAuthors
        authors={authors}
        onEditAuthor={handleEditAuthor}
        onDeleteAuthor={handleDeleteAuthor}
        onEditAuthorDatabaseUpdate={handleEditAuthorDatabaseUpdate}
        onDeleteAuthorDatabaseUpdate={handleDeleteAuthorDatabase}
      />
    </Wrapper>
  );
}
