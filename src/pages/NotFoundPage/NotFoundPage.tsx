import { FC } from 'react';
import { Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  FullHeightContainer,
  StyledContainer,
} from '../../styles/CommonStyles';

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate('/');
  };

  return (
    <FullHeightContainer>
      <StyledContainer component="main" maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom>
          404 - Not Found
        </Typography>
        <Typography variant="h5" component="h5" gutterBottom>
          The page you are looking for does not exist.
        </Typography>
        <Stack mt={4} />
        <Button variant="contained" onClick={handleGoToLogin}>
          Go to login
        </Button>
      </StyledContainer>
    </FullHeightContainer>
  );
};

export default NotFoundPage;
