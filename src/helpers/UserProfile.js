import { API_URL } from "./constants";

const UserProfile = (function () {
  let username = '';
  let userEmail = '';
  let userToken = '';

  const isLoggedIn = () => {
    return localStorage.getItem('userData') ? true : false;
    // if(isLogged){
    //   const userData = JSON.parse(localStorage.getItem('userData'));
    //   username = userData.username;
    //   userToken = userData.token;
    // }
    // return isLogged;
  };

  const logout = () => {
    localStorage.removeItem('userData');
  };

  const createSession = async function (user, email, token) {
    if (isLoggedIn()) return;
    username = user;
    userEmail = email;
    userToken = token;
    if(!user){
      const userInfo = await getUserInfo(token);
      username = userInfo.username;
    }
    localStorage.setItem(
      'userData',
      JSON.stringify({ username: username, email: email, token }),
    );
  };

  const getToken = function () {
    return userToken = userToken === '' 
      ? JSON.parse(localStorage.getItem('userData')).token
      : userToken;
  };

  const getEmail = function () {
    return userEmail = userEmail === '' 
      ? JSON.parse(localStorage.getItem('userData')).email
      : userEmail;
  };

  const getUsername = function () {
    return username = username === '' 
      ? JSON.parse(localStorage.getItem('userData')).username
      : username;
  };

  const getUserInfo = async (token) => {
    try {
      const res = await fetch(`${API_URL}/usuarios/me`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const user = await res.json();
      return user;
    } catch (error) {
      console.log(error);
    }
  };
  

  return {
    getUsername,
    isLoggedIn,
    logout,
    createSession,
    getToken,
    getEmail,
  };
})();

export default UserProfile;
