import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { splitJoin } from '../utils/splitJoin';

const Wrapper = styled.div`
  background-color: green;
  padding: 1vmin 1 vmin;
`;

const Links = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: calc(1vw + 0.2lh);
  justify-items: center;
  margin: 0;
`;

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Wrapper>
      <Link href={'/'}>Logo</Link>
      <Links>
        <Link href={'/authors'}>Authors</Link>
        <Link href={'/books'}>Books</Link>
        <Link href={'/authors/new'}>Add Author</Link>
        <Link href={'/books/new'}>Add Book</Link>
      </Links>
    </Wrapper>
  );
}
