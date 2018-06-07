class UserService {
  static setUser(user) {
    localStorage.setItem('user', user);
  }

  static getUser() {
    return localStorage.getItem('user');
  }

  static isUserAuth() {
    const user = this.getUser();
    return user ? true : false;
  }
}

export default UserService;