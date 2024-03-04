import styled from 'styled-components';

const Wrapper = styled.div``;
const Selection = styled.select``;
const Option = styled.option``;

interface IOption {
  name: string;
  value: string;
}

interface ISelect {
  options: IOption[];
}

export default function Select({ options = [] }: ISelect) {
  return (
    <Wrapper>
      <Selection>
        {options.map((option, i) => (
          <Option key={i} value={option.value}>
            {option.name}
          </Option>
        ))}
      </Selection>
    </Wrapper>
  );
}
