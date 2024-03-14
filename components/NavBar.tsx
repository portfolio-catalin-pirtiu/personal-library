import styled from 'styled-components';
import { usePathname } from 'next/navigation';
import LinkWrapper from './LinkWrapper';
import { color } from '../lib/color';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: ${color.black};
  color: ${color.silver};
  padding: 1vmin 1 vmin;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: calc(1vw + 2lh);
  // justify-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 2vmin;
  padding-bottom: 0.2lh;
  font-size: calc(0.7rem + 1vw);
`;

const LogoContainer = styled.div``;

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
      <LogoContainer>
        <LinkWrapper href="/">{logo}</LinkWrapper>
      </LogoContainer>

      <LinksContainer>
        {navbarItems.map((item) => (
          <LinkWrapper href={`/${item.href}`} key={item.href}>
            {item.linkName}
          </LinkWrapper>
        ))}
      </LinksContainer>
    </Wrapper>
  );
}
