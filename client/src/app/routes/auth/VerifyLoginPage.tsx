import {Box, Grid} from '@mui/material';

import {Form, LoadingButton, TextField, Title} from '../../components';
import {useForm} from '../../hooks';
import {verifyLoginValidationSchema} from '../../validation-schemas';

interface VerifyLoginFormValues {
  code: string;
}

interface VerifyLoginPageProps {
  onVerifyLoginSubmit: (code: string) => void;
}

export const VerifyLoginPage = ({onVerifyLoginSubmit}: VerifyLoginPageProps) => {
  const form = useForm<VerifyLoginFormValues>(verifyLoginValidationSchema);

  const verifyLogin = async ({code}: VerifyLoginFormValues) => {
    await onVerifyLoginSubmit(code);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Form form={form} onSubmit={verifyLogin}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{textAlign: 'center'}}>
            <Title>MyMoney</Title>
          </Grid>
          <Grid item xs={12}>
            <TextField name="code" label="קוד" />
          </Grid>
          <Grid item xs={12}>
            <LoadingButton type="submit" variant="contained" loading={form.formState.isSubmitting} fullWidth>
              התחבר
            </LoadingButton>
          </Grid>
        </Grid>
      </Form>
    </Box>
  );
};
