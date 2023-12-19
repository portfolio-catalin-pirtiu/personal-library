import styled from 'styled-components';

const StyledButton = styled.button<{
  $primary: boolean;
  $secondary?: boolean;
  $warning?: boolean;
  $danger?: boolean;
}>``;

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
