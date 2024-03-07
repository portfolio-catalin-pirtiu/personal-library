import styled from 'styled-components';
import { ISelect } from '../../lib/definitions';
import { ISelection } from '../../lib/definitions';
import { booksFilterSelection } from '../../lib/constants';
import Button from '../shared/Button';

const Wrapper = styled.div``;
const Selection = styled.select``;
const Option = styled.option``;
const Buttons = styled.div`
  display: flex;
  gap: 0.5em;
`;

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
