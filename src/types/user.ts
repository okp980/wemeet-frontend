export interface AuthResponse {
  access_token: string;
}

export interface ISocialLogin {
  provider: string;
  token: string;
  fcmToken: string;
}

export interface IEmailLogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  image: string;
  name: string;
  gender: string;
  bio: string;
  age: string;
  passion: string;
  getNotifications: true;
  userId: 1;
  createdAt: Date;
  updatedAt: Date;
}
