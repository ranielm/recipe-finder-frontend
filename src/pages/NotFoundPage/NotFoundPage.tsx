import { FC } from 'react';
import { Typography, Container, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate('/');
  };

  return (
    <Container component="main" maxWidth="md" style={{ textAlign: 'center' }}>
      <Typography variant="h1" component="h1" gutterBottom>
        404 - Not Found
      </Typography>
      <Typography variant="h5">
        The page you are looking for does not exist.
      </Typography>
      <Stack mt={4} />
      <Button variant="contained" onClick={handleGoToLogin}>
        Go to login
      </Button>
    </Container>
  );
};

export default NotFoundPage;
