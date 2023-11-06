import { Button } from '@mui/material';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  color: white;
`;

export const StyledButton = styled(Button)`
  margin-left: auto;

  @media (max-width: 600px) {
    margin-right: 0.5rem;
  }
`;
