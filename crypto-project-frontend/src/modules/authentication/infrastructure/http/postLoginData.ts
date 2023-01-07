import { PostLoginDataRequest } from '@/modules/authentication/infrastructure/requests/PostLoginDataRequest';
import { LoginDataDTO } from '@/modules/authentication/infrastructure/dto/LoginDataDTO';
import { getHttpClient } from '@/shared/hooks/infrastructure/http/httpClient';

const postLoginData = (request: PostLoginDataRequest): Promise<LoginDataDTO> =>
  getHttpClient().post<PostLoginDataRequest, LoginDataDTO>('auth/token/', request);
export default postLoginData;
