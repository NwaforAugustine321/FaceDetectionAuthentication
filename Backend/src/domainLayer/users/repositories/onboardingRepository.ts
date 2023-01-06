import {
  UserCreateModel,
  UserLoginModel,
  UserResponseModel,
} from '../interface/model';
import { UserRepositoryModel } from '../interface/repository';

class UserOnboardingRepository implements UserRepositoryModel {
  createUser(data: UserCreateModel) {
    return '';
  }

  loginUser(data: UserLoginModel): UserResponseModel {
    return { userEmail: ';;', id: 'JJ' };
  }
}

export default UserOnboardingRepository;
