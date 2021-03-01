import { api as API } from './api';

export async function changeAccountInfo(updateDatas, accessToken) {
  try {
    const response = await API({
      method: 'POST',
      url: '/account/change-info',
      headers: { Authorization: `Bearer ${accessToken}` },
      data: { updateDatas },
    });

    return response;
  } catch (error) {
    console.log('error', error);
    return error.response;
  }
}

export async function changePassword(
  { currentPassword, newPassword },
  accessToken,
) {
  try {
    const response = await API({
      method: 'POST',
      url: '/account/change-password',
      headers: { Authorization: `Bearer ${accessToken}` },
      data: { currentPassword, newPassword },
    });
    return response;
  } catch (error) {
    console.log('error', error);
    return error.response;
  }
}
