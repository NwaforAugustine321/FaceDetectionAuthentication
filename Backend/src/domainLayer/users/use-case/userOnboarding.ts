import {
  UserCreateModel,
  UserLoginModel,
  UserResponseModel,
} from '../interface/model';
import { UserRepositoryModel } from '../interface/repository';

class UserOnboarding implements UserRepositoryModel {
  constructor(private repository: UserRepositoryModel) {}

  createUser(data: UserCreateModel): string {
    return this.repository.createUser(data);
  }

  loginUser(data: UserLoginModel): UserResponseModel {
    return this.repository.loginUser(data);
  }
}

export default UserOnboarding;
