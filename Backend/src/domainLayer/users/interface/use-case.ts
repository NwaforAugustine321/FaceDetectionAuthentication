import { UserCreateModel, UserLoginModel, UserResponseModel } from './model';

export interface CreateUserUseCaseModel {
  execute: (data: UserCreateModel) => string;
}

export interface LoginUserUseCaseModel {
  execute: (data: UserLoginModel) => UserResponseModel;
}
