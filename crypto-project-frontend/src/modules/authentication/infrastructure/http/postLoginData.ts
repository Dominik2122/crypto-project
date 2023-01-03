import axios from 'axios';
import { PostLoginDataRequest } from '@/modules/authentication/infrastructure/requests/PostLoginDataRequest';
import { LoginDataDTO } from '@/modules/authentication/infrastructure/dto/LoginDataDTO';

const postLoginData = (request: PostLoginDataRequest): Promise<LoginDataDTO> =>
  axios.post<LoginDataDTO>('login', request).then((value) => value.data);

export default postLoginData;
