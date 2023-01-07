import { getHttpClient } from '@/shared/hooks/infrastructure/http/httpClient';
import { GetUserData } from '@/modules/authentication/application/getUserData';
import User from '@/modules/authentication/application/models/User';
import UserEmail from '@/modules/authentication/application/models/UserEmail';
import UserLogin from '@/modules/authentication/application/models/UserLogin';

const httpGetUserData: GetUserData = (): Promise<User> =>
  getHttpClient()
    .get<{ login: string; email: string }>('auth/me/')
    .then((data) => new User(new UserEmail(data.email), new UserLogin(data.login)));
export default httpGetUserData;
