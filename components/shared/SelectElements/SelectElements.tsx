import styled from 'styled-components';
import { colors } from '../../../lib/colors';

export const Wrapper = styled.div`
  display: grid;
  border: 0.15em solid ${colors.gray};
  border-radius: 7px;
  padding: 0.25em 0.5em;
  cursor: pointer;
  line-height: 1.1;
  grid-template-areas: 'select';
  align-items: center;
  text-align: center;
  &:after {
    content: '';
    width: 0.8em;
    height: 0.5em;
    background-color: black;
    clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
    grid-area: select;
    justify-self: end;
  }
`;
export const Window = styled.div`
  display: flex;
`;
export const Select = styled.ul``;
export const Option = styled.li`
  list-style-type: none;
  &:hover {
    background-color: green;
  }
`;
