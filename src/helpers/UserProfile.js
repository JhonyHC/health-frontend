const UserProfile = (function () {
  let username = '';
  let userToken = '';

  const isLoggedIn = () => (localStorage.getItem('userData') ? true : false);

  const logout = () => {
    localStorage.removeItem('userData');
  };

  const createSession = function (user, email, token) {
    if (isLoggedIn()) return;
    localStorage.setItem(
      'userData',
      JSON.stringify({ username: user, email: email, token }),
    );
    username = user;
    userToken = token;
  };

  const getToken = function () {
    return userToken;
  };

  const getUsername = function () {
    return username;
  };

  return {
    getUsername,
    isLoggedIn,
    logout,
    createSession,
    getToken,
  };
})();

export default UserProfile;
