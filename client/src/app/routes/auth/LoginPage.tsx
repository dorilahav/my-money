import {Box, Grid} from '@mui/material';
import {loginValidationSchema} from '@my-money/common';

import {Form, LoadingButton, TextField, Title} from '../../components';
import {useForm} from '../../hooks';

interface LoginFormValues {
  email: string;
}

interface LoginPageProps {
  onLoginSubmit: (email: string) => void;
}

export const LoginPage = ({onLoginSubmit}: LoginPageProps) => {
  const form = useForm<LoginFormValues>(loginValidationSchema);

  const login = async ({email}: LoginFormValues) => {
    await onLoginSubmit(email);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Form form={form} onSubmit={login}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{textAlign: 'center'}}>
            <Title>MyMoney</Title>
          </Grid>
          <Grid item xs={12}>
            <TextField control={form.control} name="email" label="כתובת אימייל" />
          </Grid>
          <Grid item xs={12}>
            <LoadingButton type="submit" variant="contained" loading={form.isSubmitting} fullWidth>
              התחברות
            </LoadingButton>
          </Grid>
        </Grid>
      </Form>
    </Box>
  );
};
