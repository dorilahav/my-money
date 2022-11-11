import {AuthChangeEvent, Session, User} from '@supabase/supabase-js';
import {supabase} from '../../api/supabase-client';

type UnsubscribeFunction = () => void;
type SubscribeCallback = (user?: User) => any;

const getLoggedInUser = async (): Promise<User | undefined> => {
  const {data} = await supabase.auth.getUser();

  return data.user ?? undefined;
};

const subscribeToUserChanges = (cb: SubscribeCallback): UnsubscribeFunction => {
  const {
    data: {subscription}
  } = supabase.auth.onAuthStateChange(async (event, session) => {
    const user = getUserOnStateChange(event, session);

    await cb(user);
  });

  return subscription.unsubscribe;
};

const loginWithOtp = async (email: string) => {
  await supabase.auth.signInWithOtp({email});
};

const getUserOnStateChange = (event: AuthChangeEvent, session: Session | null) => {
  if (['SIGNED_IN', 'USER_UPDATED'].includes(event)) {
    return session!.user;
  }
};

export default {
  loginWithOtp,
  subscribeToUserChanges,
  getLoggedInUser
};

export type {User};
