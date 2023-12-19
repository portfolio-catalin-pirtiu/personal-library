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

  ${(props) => props.$primary && css`
    background: #007acc;
    color: black;
  `}
`;

interface IButton {
  type: 'button' | 'submit';
  primary: boolean;
  secondary: boolean;
  warning: boolean;
  danger: boolean;
  text: string;
  onClick: () => void;
}

export default function Button({
  type = 'button',
  text = 'Button',
  primary = true,
  secondary = false,
  warning = false,
  danger = false,
  onClick = () => {},
}: IButton) {
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
