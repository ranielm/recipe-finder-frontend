import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography } from '@mui/material';
import { loginService } from '../../services/authService';
import { IFormInput } from './Login.types';
import { useNavigate } from 'react-router-dom';
import {
  FullHeightContainer,
  StyledContainer,
  FormBox,
} from '../../styles/CommonStyles';

const Login: FC = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    const { email, password } = data;

    try {
      await loginService(email, password);
      navigate('/home');
    } catch (error) {
      if (error instanceof Error) {
        setLoginError(error.message);
      }
    }
  };

  return (
    <FullHeightContainer>
      <StyledContainer component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <FormBox component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Invalid email address',
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          {loginError && (
            <Typography color="error" sx={{ mt: 1 }}>
              {loginError}
            </Typography>
          )}
        </FormBox>
      </StyledContainer>
    </FullHeightContainer>
  );
};

export default Login;
