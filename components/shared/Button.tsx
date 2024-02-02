import styled, { css } from 'styled-components';

const StyledButton = styled.button<{
  $primary: boolean;
  $secondary?: boolean;
  $warning?: boolean;
  $danger?: boolean;
  $primaryColor?: string;
  $secondaryColor?: string;
  $warningColor?: string;
  $dangerColor?: string;
}>`
  border-radius: 3px;
  padding: 0.25em 1em;
  border: none;

  ${(props) =>
    props.$primary &&
    css`
      background: ${props.$primaryColor};
      color: black;
    `}

  ${(props) =>
    props.$secondary &&
    css`
      background: white;
      border: 2px solid ${props.$secondaryColor};
    `}

    ${(props) =>
    props.$warning &&
    css`
      background: ${props.$warningColor};
    `}

    ${(props) =>
    props.$danger &&
    css`
      background: ${props.$dangerColor};
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
  primaryColor?: string;
  secondaryColor?: string;
  warningColor?: string;
  dangerColor?: string;
}

export default function Button({
  type = 'button',
  text = 'Button',
  onClick = () => {},
  primary = true,
  secondary = false,
  warning = false,
  danger = false,
  primaryColor = '#4db8ff',
  secondaryColor = '#4db8ff',
  warningColor = '#ffa500',
  dangerColor = '#ff0000',
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
      $primaryColor={primaryColor}
      $secondaryColor={secondaryColor}
      $warningColor={warningColor}
      $dangerColor={dangerColor}
    >
      {text}
    </StyledButton>
  );
}
