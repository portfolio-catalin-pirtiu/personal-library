import styled from 'styled-components';
import NavBar from './NavBar';
import { Analytics } from '@vercel/analytics/react';
import logo from '../assets/logo-personal-library-transparent-background.png';

const Wrapper = styled.div`
  height: 100vh,
  weight: 100vw
`;

const Body = styled.div`
  margin: 4em;
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
  const logoAltTxt = `open white book with golden stars 
    and a golden feather on top of it 
    on black background`;
  return (
    <Wrapper>
      <NavBar navbarItems={navbarItems} logo={logo} logoAlt={logoAltTxt} />
      <Analytics />
      <Body>{children}</Body>
    </Wrapper>
  );
}
