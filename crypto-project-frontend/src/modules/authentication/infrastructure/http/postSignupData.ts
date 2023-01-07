import axios from 'axios';
import { PostLoginDataRequest } from '@/modules/authentication/infrastructure/requests/PostLoginDataRequest';
import { LoginDataDTO } from '@/modules/authentication/infrastructure/dto/LoginDataDTO';
import { getHttpClient } from '@/shared/hooks/infrastructure/http/httpClient';

const postSignupData = (request: PostLoginDataRequest): Promise<LoginDataDTO> =>
  getHttpClient().post<PostLoginDataRequest, LoginDataDTO>('auth/token/', request);

export default postSignupData;
