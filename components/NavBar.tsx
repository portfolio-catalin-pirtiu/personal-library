import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import LinkWrapper from './LinkWrapper';
import { color } from '../lib/color';

const Wrapper = styled.div`
  background-color: ${color.black};
  color: ${color.silver};
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
  logo?: React.ReactNode | string;
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
          <LinkWrapper href={`/${item.href}`} key={item.href}>
            {item.linkName}
          </LinkWrapper>
        ))}
      </Links>
    </Wrapper>
  );
}
