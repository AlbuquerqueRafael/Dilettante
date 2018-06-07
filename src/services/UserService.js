class UserService {
  static login(user) {
    const form = {username: user.username, secret: user.password};
    const options = {   
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }
    return fetch('http://localhost:8080/api/login/', options).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default UserService;