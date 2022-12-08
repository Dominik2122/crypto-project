import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

export type SignupStartFormData = {
  email: string;
};

export const SignupStartFormComponent = ({ onFormSubmit }: SignupStartFormProps) => {
  const { control, handleSubmit, formState } = useForm<SignupStartFormData>({
    defaultValues: {
      email: '',
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
            className="start-signup-form__email-field"
            {...field}
            fullWidth
            error={!!fieldState.error}
            id="email"
            label="Email Address"
            autoComplete="email"
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

export interface SignupStartFormProps {
  onFormSubmit: (data: SignupStartFormData) => void;
}
