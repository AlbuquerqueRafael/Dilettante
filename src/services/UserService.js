class UserService {
  static login() {
    const form = {username: "teste", secret: "teste"};
    const options = {method: "POST",body: form};
    console.log("ger");
    return fetch('http://localhost:8080/api/login', options).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default UserService;