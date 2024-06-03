import styled from 'styled-components';

const LabelElement = styled.label``;

interface LabelProps {
  label: string;
  htmlFor?: string;
}

export default function Label({
  label = 'Enter label name',
  htmlFor,
}: LabelProps) {
  return <LabelElement htmlFor={htmlFor}>{label}</LabelElement>;
}
