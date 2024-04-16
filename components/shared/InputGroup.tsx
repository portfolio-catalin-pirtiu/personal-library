import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import { color } from '../../lib/color';
import { colors } from '../../lib/colors';

const InputAndLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 0.3em;
`;

const Input = styled(Field)`
  margin-bottom: 0.5em;
  border-radius: 7px;
  border: 0.15em solid ${color.silver};
  padding: 0.5em;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px ${colors.blue};
  }
`;

const ErrorMsg = styled(ErrorMessage)`
  color: red;
`;

interface IInputGroup {
  label: string;
  name: string;
  autoComplete?: string;
  textarea?: boolean;
}

export default function InputGroup({
  label = '',
  name = '',
  autoComplete = '',
  textarea = false,
}: IInputGroup) {
  return (
    <InputAndLabel>
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        autoComplete={autoComplete}
        component={textarea ? 'textarea' : ''}
      />
      <ErrorMsg name="name" component="div" />
    </InputAndLabel>
  );
}
