import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userClient } from './client/user';
import API_ENDPOINTS from '@/lib/constants/api-endpoints';

export function useSocialLoginMutation() {
  return useMutation({ mutationFn: userClient.socialLogin });
}
export function useEmailLoginMutation() {
  return useMutation({ mutationFn: userClient.emailLogin });
}
export function useRegisterMutation() {
  return useMutation({ mutationFn: userClient.register });
}
export function useGetProfileQuery() {
  return useMutation({ mutationFn: userClient.getProfile });
}
export function useUpdateProfileMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userClient.updateProfile,
    onSettled() {
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINTS.PROFILE] });
    },
  });
}
export function useUpdateProfilePicMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userClient.updateProfilePic,
    onSettled() {
      queryClient.invalidateQueries({ queryKey: [API_ENDPOINTS.PROFILE] });
    },
  });
}
