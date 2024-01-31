import styled, { css } from 'styled-components';
import { colors } from '../../lib/colors';

const Wrapper = styled.div<{ $color: string }>`
  background: ${colors.gray};
  padding: 0.1rem 0.4rem;
  border-radius: 999em 999em 999em 999em;
  ${(props) =>
    props.$color &&
    css`
      background: ${props.$color};
    `}
`;
const Text = styled.p``;

interface IBubble {
  text: string;
  color: string;
}

export default function Bubble({ text = '', color = '' }: IBubble) {
  return (
    <Wrapper $color={color}>
      <Text>{text}</Text>
    </Wrapper>
  );
}
