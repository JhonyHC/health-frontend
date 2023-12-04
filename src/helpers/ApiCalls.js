import UserProfile from './UserProfile';
import { API_URL } from './constants';

export const getData = async (url) => {
  const res = await fetch(`${API_URL}${url}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + UserProfile.getToken(),
    },
  });
  const data = await res.json();
  return data;
};

export const postData = async (url, data) => {
    const res = await fetch(`${API_URL}${url}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + UserProfile.getToken(),
        },
        body: JSON.stringify(data),
    });
    const response = await res.json();
    return response;
    }