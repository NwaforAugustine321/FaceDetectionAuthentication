export interface UserCreateModel {
  userEmail: string;
  userPhoto: string;
}

export interface UserResponseModel {
  userEmail: string;
  id: string;
}

export interface UserLoginModel {
  email: string;
  base64Url: string;
}
