import { useAuth } from '@/modules/authentication/application/authContext';

const useUser = () => {
  const { user } = useAuth();
  return { isUser: !!user, user };
};

export default useUser;
