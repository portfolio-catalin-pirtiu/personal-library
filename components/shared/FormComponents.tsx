import Image from 'next/image';
import { Form } from 'formik';
import styled from 'styled-components';
import { colors } from '../../lib/colors';

export const FormWrapper = styled.div`
  display: flex;
  align-items: start;
`;

export const ImageAndText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledImage = styled(Image)`
  border-radius: 15px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  background-color: ${colors.lightBlue};
  border-radius: 15px;
  box-shadow:
    inset 60px 0 120px ${colors.lightBlue},
    inset -60px -50px 120px ${colors.lightGreen};
`;

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
