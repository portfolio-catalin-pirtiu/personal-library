import styled from 'styled-components';
import NavBar from './NavBar';
import { Analytics } from '@vercel/analytics/react';

const Wrapper = styled.div`
  height: 100vh,
  weight: 100vw
`;

const navbarItems = [
  {
    href: '/authors/new',
    linkName: 'Add New Author',
  },
  {
    href: '/books/new',
    linkName: 'Add New Book',
  },
  {
    href: '/authors',
    linkName: 'Authors',
  },
  {
    href: '/books',
    linkName: 'Books',
  },
];

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <Wrapper>
      <NavBar navbarItems={navbarItems} />
      <Analytics />
      {children}
    </Wrapper>
  );
}
