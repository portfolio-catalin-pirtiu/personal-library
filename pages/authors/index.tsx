import styled from 'styled-components';
import { useState } from 'react';
import useFetchAuthors from '../../lib/useFetchAuthors';
import Search from '../../components/shared/Search';
import RenderAuthors from '../../components/authors/RenderAuthors';
import { IDbAuthor } from '../../lib/definitions';
import { Author } from '../../lib/classes';
import toast from 'react-hot-toast';

const Wrapper = styled.div``;

export default function Authors() {
  let apiUrl = '/api/authors/';
  const [searchAuthor, setSearchAuthor] = useState('');

  if (searchAuthor !== '') {
    apiUrl = apiUrl + `?author=${searchAuthor}`;
  }

  const { authors, setAuthors } = useFetchAuthors(apiUrl);

  function handleEditAuthor(editedAuthor: IDbAuthor) {
    const editedAuthors = authors.map((author) => {
      if (editedAuthor.id === author.id) {
        return editedAuthor;
      } else {
        return author;
      }
    });
    setAuthors(editedAuthors);
  }

  function handleDeleteAuthor(id: string) {
    const remainingAuthors = authors.filter((author) => author.id !== id);
    setAuthors(remainingAuthors);
  }

  async function handleEditAuthorDatabaseUpdate(editedAuthor: IDbAuthor) {
    const author = new Author(editedAuthor);

    try {
      const res = await fetch(`${apiUrl}edit/${editedAuthor.id}`, {
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

  return (
    <Wrapper>
      <h1>Authors Page</h1>
      <Search
        input={searchAuthor}
        setInput={setSearchAuthor}
        label="Author"
        placeholder="Search"
      />
      <RenderAuthors
        authors={authors}
        onEditAuthor={handleEditAuthor}
        onDeleteAuthor={handleDeleteAuthor}
        onEditAuthorDatabaseUpdate={handleEditAuthorDatabaseUpdate}
      />
    </Wrapper>
  );
}
