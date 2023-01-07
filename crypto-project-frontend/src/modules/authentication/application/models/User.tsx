import UserEmail from '@/modules/authentication/application/models/UserEmail';
import UserLogin from '@/modules/authentication/application/models/UserLogin';

class User {
  constructor(public readonly email: UserEmail, public readonly login: UserLogin) {}
}

export default User;
