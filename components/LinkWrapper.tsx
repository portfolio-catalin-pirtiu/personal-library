import styled from 'styled-components';
import Link from 'next/link';

const StyledLink = styled(Link)`
  cursor: pointer;
`;

interface ILinkWrapper {
  href: string;
  children: JSX.Element | string;
}

export default function LinkWrapper({ href, children }: ILinkWrapper) {
  return (
    <StyledLink href={href} legacyBehavior>
      <a>{children}</a>
    </StyledLink>
  );
}
