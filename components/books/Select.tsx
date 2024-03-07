import styled from 'styled-components';
import { ISelect } from '../../lib/definitions';
import { ISelection } from '../../lib/definitions';
import { booksFilterSelection } from '../../lib/constants';

const Wrapper = styled.div``;
const Selection = styled.select``;
const Option = styled.option``;
const Buttons = styled.div``;
const Button = styled.button``;

export default function Select({
  type = 'dropdown',
  options = [],
  handleChange = () => {},
}: ISelect) {
  function isOption(option: string): option is ISelection {
    return booksFilterSelection.some((el) => el === option);
  }

  return type === 'dropdown' ? (
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
  ) : (
    <Wrapper>
      <Buttons>
        {options.map((option, i) => (
          <Button key={i} onClick={() => handleChange(option.value)}>
            {option.name}
          </Button>
        ))}
      </Buttons>
    </Wrapper>
  );
}
