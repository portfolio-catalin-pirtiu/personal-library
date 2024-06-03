import styled from 'styled-components';
import { ISelect } from '../../lib/definitions';
import Button from '../shared/Button';

const Wrapper = styled.div``;
const Buttons = styled.div`
  display: flex;
  gap: 0.5em;
`;

export default function Select({
  options = [],
  handleChange = () => {},
}: ISelect) {
  return (
    <Wrapper>
      <Buttons>
        {options.map((option, i) => (
          <Button
            key={i}
            type="button"
            text={option.name}
            onClick={() => handleChange(option.value)}
            secondary
          />
        ))}
      </Buttons>
    </Wrapper>
  );
}
