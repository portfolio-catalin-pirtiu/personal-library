import styled, { css } from 'styled-components';

const StyledButton = styled.button<{
  $primary: boolean;
  $secondary?: boolean;
  $warning?: boolean;
  $danger?: boolean;
}>`
  border-radius: 3px;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.$primary &&
    css`
      background: #4db8ff;
      color: black;
    `}
`;

interface IButton {
  type: 'button' | 'submit';
  text: string;
  onClick: () => void;
  primary?: boolean;
  secondary?: boolean;
  warning?: boolean;
  danger?: boolean;
}

export default function Button({
  type = 'button',
  text = 'Button',
  onClick = () => {},
  primary = true,
  secondary = false,
  warning = false,
  danger = false,
}: IButton) {
  if (secondary || warning || danger) primary = false;

  if (secondary) {
    warning = false;
    danger = false;
  }

  if (warning) {
    secondary = false;
    danger = false;
  }

  if (danger) {
    secondary = false;
    warning = false;
  }

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      $primary={primary}
      $secondary={secondary}
      $warning={warning}
      $danger={danger}
    >
      {text}
    </StyledButton>
  );
}
