import styled from 'styled-components';
import NavBar from './NavBar';

const Wrapper = styled.div`
  height: 100vh,
  weight: 100vw
`;

export default function Layout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <Wrapper>
      <NavBar />
      <h1>Layout</h1>
      {children}
    </Wrapper>
  );
}
