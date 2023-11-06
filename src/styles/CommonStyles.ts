import { Container, Box } from '@mui/material';
import styled from 'styled-components';

export const FullHeightContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormBox = styled(Box)`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
