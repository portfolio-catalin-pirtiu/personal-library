import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import { color } from '../../lib/color';

const InputAndLabel = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 60%;
`;

const Label = styled.label`
  margin-bottom: 0.3em;
`;

const Input = styled(Field)`
  margin-bottom: 0.5em;
  border-radius: 7px;
  border: 0.15em solid ${color.silver};
  padding: 0.5em;
`;

const ErrorMsg = styled(ErrorMessage)`
  color: red;
`;

interface IInputGroup {
  label: string;
  name: string;
  autoComplete: string;
}

export default function InputGroup({
  label = '',
  name = '',
  autoComplete = '',
}: IInputGroup) {
  return (
    <InputAndLabel>
      <Label htmlFor={name}>{label}</Label>
      <Input type="input" name={name} autoComplete={autoComplete} />
      <ErrorMsg name="name" component="div" />
    </InputAndLabel>
  );
}
