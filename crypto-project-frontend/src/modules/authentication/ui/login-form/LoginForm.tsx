import React from 'react';
import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

export type LoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const LoginForm = ({ defaultEmail, onFormSubmit }: LoginFormProps) => {
  const { control, handleSubmit, formState } = useForm<LoginFormData>({
    defaultValues: {
      email: defaultEmail,
      password: '',
      rememberMe: false,
    },
    mode: 'onChange',
  });

  return (
    <Box component="form" onSubmit={handleSubmit(onFormSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{ required: 'This field is required' }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            error={!!fieldState.error}
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{ required: 'This field is required' }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            margin="normal"
            required
            fullWidth
            error={!!fieldState.error}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        )}
      />

      <Button
        disabled={!formState.isValid}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
    </Box>
  );
};

export interface LoginFormProps {
  defaultEmail?: string;
  onFormSubmit: (data: LoginFormData) => void;
}

const defaultProps = {
  defaultEmail: '',
};

LoginForm.defaultProps = defaultProps;
