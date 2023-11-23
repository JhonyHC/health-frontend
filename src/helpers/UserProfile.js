const UserProfile = (function() {
    let username = "";

    const isLoggedIn = () => localStorage.getItem('userData') ? true : false;

    const logout = () => {
        localStorage.removeItem('userData');
    }

    const createSession = function(user, email, token) {
        if(isLoggedIn()) return;
        localStorage.setItem('userData', JSON.stringify({username: username, email: email, token}));
        username = user;
    }
  
    const getUsername = function() {
        return username;
    };

  
    return {
      getUsername,
      isLoggedIn,
      logout,
      createSession,
    }
  
  })();
  
  export default UserProfile;