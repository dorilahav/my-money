import axios from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
}

const axiosClient = axios.create({
  // baseURL: 'http://localhost:5000'
});

type UnsubscribeFunction = () => void;
type SubscribeCallback = (user?: User) => any;

const getLoggedInUser = async (): Promise<User | undefined> => {
  const response = await axiosClient.get<User>('/api/users/me');

  return response.data;
};

const subscribeToUserChanges = (cb: SubscribeCallback): UnsubscribeFunction => {
  // const {
  //   data: {subscription}
  // } = supabase.auth.onAuthStateChange(async (event, session) => {
  //   const user = getUserOnStateChange(event, session);

  //   await cb(user);
  // });

  // return subscription.unsubscribe;
  return () => {};
};

const loginWithOtp = async (email: string) => {
  await axiosClient.post('/auth/otp/login', {email});
};

const verifyOtpLogin = async (email: string, code: string) => {
  await axiosClient.post('/auth/otp/login/verify', {email, code});
}

// const getUserOnStateChange = (event: AuthChangeEvent, session: Session | null) => {
//   if (['SIGNED_IN', 'USER_UPDATED', 'TOKEN_REFRESHED'].includes(event)) {
//     return session!.user;
//   }
// };

export default {
  loginWithOtp,
  verifyOtpLogin,
  subscribeToUserChanges,
  getLoggedInUser
};

export type {User};
