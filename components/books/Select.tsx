import styled from 'styled-components';
import { ISelect } from '../../lib/definitions';
import { ISelection } from '../../lib/definitions';

const Wrapper = styled.div``;
const Selection = styled.select``;
const Option = styled.option``;

export default function Select({ options = [], handleChange }: ISelect) {
  function isOption(option: string): option is ISelection {
    return [
      'all',
      'read',
      'notRead',
      'inProgress',
      'thisYear',
      'lastYear',
    ].includes(option);
  }

  return (
    <Wrapper>
      <Selection
        onChange={(event) => {
          if (isOption(event.target.value)) {
            handleChange(event.target.value);
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
