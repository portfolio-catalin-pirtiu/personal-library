import styled, { css } from 'styled-components';
import { usePathname } from 'next/navigation';
import LinkWrapper from './LinkWrapper';
import { color } from '../lib/color';
import Image, { StaticImageData } from 'next/image';

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
  justify-content: flex-end;
  align-items: flex-end;
  margin: 0;
  padding-bottom: 0.5lh;
  font-size: calc(0.7rem + 1vw);
`;

const LogoContainer = styled.div``;
const Link = styled.div<{ $active: boolean }>`
  ${(props) =>
    props.$active &&
    css`
      border-bottom: 1px solid ${color.silver};
    `}
`;

interface INavBarItem {
  href: string;
  linkName: string;
}

interface INavBar {
  navbarItems: INavBarItem[];
  logo?: StaticImageData | string;
  logoAlt?: string;
}

export default function NavBar({
  navbarItems = [],
  logo = 'Your Logo Here',
  logoAlt = 'untitled logo description'
}: INavBar) {
  const pathname = usePathname();

  return (
    <Wrapper>
      <LogoContainer>
        <LinkWrapper href="/">
          <Image
            src={logo}
            alt={logoAlt}
            sizes="10vw"
            style={{ width: '100%', height: 'auto', transform: 'scale(1.2)' }}
            priority
          />
        </LinkWrapper>
      </LogoContainer>

      <LinksContainer>
        {navbarItems.map((item) => (
          <Link $active={pathname === item.href} key={item.href}>
            <LinkWrapper href={item.href}>{item.linkName}</LinkWrapper>
          </Link>
        ))}
      </LinksContainer>
    </Wrapper>
  );
}
