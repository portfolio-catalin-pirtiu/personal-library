import { colors } from './colors';
import { color } from './color';

export const inputStyle = `
  background-color: ${colors.gray};
  margin-bottom: 0.5em;
  border-radius: 7px;
  border: 0.15em solid ${color.silver};
  padding: 0.5em;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px ${colors.blue};
  }`;
