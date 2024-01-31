import styled, { css } from 'styled-components';
import { colors } from '../../lib/colors';
import { FaCircle } from 'react-icons/fa6';
import { changeColorHue } from '../../lib/changeColorHue';

const Wrapper = styled.div<{ $backgroundColor: string }>`
  display: flex;
  gap: 0.2rem;
  align-items: center
  background: ${colors.gray};
  padding: 0.1rem 0.4rem;
  border-radius: 999em 999em 999em 999em;
  ${(props) =>
    props.$backgroundColor &&
    css`
      background: ${props.$backgroundColor};
    `}
`;
const Text = styled.p``;
const Circle = styled.div`
  color: yellow;
  scale: 0.65;
`;

interface IBubble {
  text: string;
  backgroundColor: string;
}

export default function Bubble({ text = '', backgroundColor = '' }: IBubble) {
  
  return (
    <Wrapper $backgroundColor={backgroundColor}>
      <Circle>
        <FaCircle />
      </Circle>
      <Text>{text}</Text>
    </Wrapper>
  );
}
