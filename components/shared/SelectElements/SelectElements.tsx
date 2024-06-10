import styled from 'styled-components';
import { colors } from '../../../lib/colors';
import { styleConstants } from '../../../lib/constants';

export const Wrapper = styled.div`
  display: flex;
  gap: ${styleConstants.lowGap};
  border: 0.15em solid ${colors.gray};
  border-radius: ${styleConstants.inputBorderRadius};
  padding: ${styleConstants.inputPadding};
  cursor: pointer;
  line-height: 1.1;
  align-items: center;
  text-align: center;
  background-color: ${colors.gray};
`;

export const DropDownTriangle = styled.div`
  width: 0.8em;
  height: 0.5em;
  background-color: black;
  clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
`;

export const Window = styled.div`
  display: flex;
  font-weight: bold;
`;

export const Select = styled.ul``;

export const Option = styled.li`
  list-style-type: none;
  &:hover {
    background-color: green;
  }
`;

export const Options = styled.div`
  background-color: ${colors.gray};
`;
