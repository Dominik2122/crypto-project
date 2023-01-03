import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

export type SignupFormData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const SignupComponent = ({ email, onFormSubmit }: SignupFormProps) => {
  const { control, handleSubmit, formState } = useForm<SignupFormData>({
    defaultValues: {
      email: email ?? '',
      password: '',
      firstName: '',
      lastName: '',
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
            autoFocus={!email}
          />
        )}
      />

      <Controller
        name="firstName"
        control={control}
        rules={{ required: 'This field is required' }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            error={!!fieldState.error}
            id="firstName"
            label="First Name"
            autoFocus={!!email}
          />
        )}
      />

      <Controller
        name="lastName"
        control={control}
        rules={{ required: 'This field is required' }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            error={!!fieldState.error}
            id="lastName"
            label="Last Name"
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

export interface SignupFormProps {
  onFormSubmit: (data: SignupFormData) => void;
  email?: string;
}
