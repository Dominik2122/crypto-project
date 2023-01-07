import User from '@/modules/authentication/application/models/User';

export type GetUserData = () => Promise<User | undefined>;
