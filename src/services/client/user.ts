import { AuthResponse, IEmailLogin, IRegister, ISocialLogin, IUser } from '@/types/user';
import { HttpClient } from './http-client';
import API_ENDPOINTS from '@/lib/constants/api-endpoints';

export const userClient = {
  socialLogin: (payload: ISocialLogin) => {
    return HttpClient.post<AuthResponse>(API_ENDPOINTS.SOCIAL_LOGIN, payload);
  },
  emailLogin: (payload: IEmailLogin) => {
    return HttpClient.post<AuthResponse>(API_ENDPOINTS.EMAIL_LOGIN, payload);
  },
  register: (payload: IRegister) => {
    return HttpClient.post<AuthResponse>(API_ENDPOINTS.REGISTER, payload);
  },
  getProfile: () => {
    return HttpClient.get<IUser>(API_ENDPOINTS.PROFILE);
  },
  updateProfile: (payload: Partial<Pick<IUser, 'name' | 'getNotifications' | 'bio'>>) => {
    return HttpClient.patch<AuthResponse>(API_ENDPOINTS.PROFILE, payload);
  },
  updateProfilePic: (payload: FormData) => {
    return HttpClient.patch<IUser>(API_ENDPOINTS.PROFILE_PIC, payload);
  },
};
