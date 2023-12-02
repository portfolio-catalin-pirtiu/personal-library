import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import LinkWrapper from './LinkWrapper';

const Wrapper = styled.div`
  background-color: hsl(105, 100%, 35%);
  padding: 1vmin 1 vmin;
`;

const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: calc(1vw + 2lh);
  justify-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 2vmin;
  padding-bottom: 0.2lh;
  font-size: calc(0.7rem + 1vw);
`;

interface INavBarItem {
  href: string;
  linkName: string;
}

interface INavBar {
  navbarItems: INavBarItem[];
  logo?: JSX.Element | string;
}

export default function NavBar({
  navbarItems = [],
  logo = 'Your Logo Here',
}: INavBar) {
  const pathname = usePathname();

  return (
    <Wrapper>
      <Links>
        <LinkWrapper href="/">{logo}</LinkWrapper>
        {navbarItems.map((item) => (
          <LinkWrapper href={`/${item.href}`}>{item.linkName}</LinkWrapper>
        ))}
      </Links>
    </Wrapper>
  );
}
