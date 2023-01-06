import { UserResponseModel, UserCreateModel, UserLoginModel } from './model';

export interface UserRepositoryModel {
  createUser: (data: UserCreateModel) => string;
  loginUser: (data: UserLoginModel) => UserResponseModel;
}
