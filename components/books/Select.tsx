import styled from 'styled-components';
import { ISelect } from '../../lib/definitions';
import { ISelection } from '../../lib/definitions';
import { booksFilterSelection } from '../../lib/constants';

const Wrapper = styled.div``;
const Selection = styled.select``;
const Option = styled.option``;

export default function Select({ options = [], handleChange }: ISelect) {
  function isOption(option: string): option is ISelection {
    return booksFilterSelection.some((el) => el === option);
  }

  return (
    <Wrapper>
      <Selection
        onChange={({ target: { value } }) => {
          if (isOption(value)) {
            handleChange(value);
          }
        }}
      >
        {options.map((option, i) => (
          <Option key={i} value={option.value}>
            {option.name}
          </Option>
        ))}
      </Selection>
    </Wrapper>
  );
}
