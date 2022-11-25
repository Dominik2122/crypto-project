import axios from 'axios';
import { PostLoginDataRequest } from 'modules/authentication/login/infrastructure/requests/PostLoginDataRequest';
import { LoginDataDTO } from 'modules/authentication/login/infrastructure/dto/LoginDataDTO';

const postSignupData = (request: PostLoginDataRequest): Promise<LoginDataDTO> =>
  axios.post<LoginDataDTO>('login', request).then((value) => {
    console.log(value);
    return value.data;
  });

export default postSignupData;
