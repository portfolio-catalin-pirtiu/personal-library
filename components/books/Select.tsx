import styled from 'styled-components';
import { ISelect } from '../../lib/definitions';

const Wrapper = styled.div``;
const Selection = styled.select``;
const Option = styled.option``;

export default function Select({ options = [], handleChange }: ISelect) {
  return (
    <Wrapper>
      <Selection>
        {options.map((option, i) => (
          <Option key={i} value={option.value} onChange={() => handleChange(option.value)}>
            {option.name}
          </Option>
        ))}
      </Selection>
    </Wrapper>
  );
}
