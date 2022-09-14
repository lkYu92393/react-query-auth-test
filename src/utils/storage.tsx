export const storage = {
    getToken: () => { 
        const token = window.localStorage.getItem('token');
        return token && token !== "undefined" ? JSON.parse(token) : null;
    },
    setToken: (token : String) =>
      window.localStorage.setItem('token', JSON.stringify(token)),
    clearToken: () => window.localStorage.removeItem('token'),
  };