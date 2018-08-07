class UserService {
  static login(user) {

    const options = {   
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
    
    return fetch('http://localhost:8080/api/user/login', options)
    .then(handleResponse)
    .then(user => {
        return user;
    });
  }

  static signup(user) {
    const options = {   
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }

    return fetch('http://localhost:8080/api/user/signup', options)
    .then(handleResponse)
    .then(user => {
        return user;
    });
  }

  /**
   * Return an array with values from init to end. Necessary to create days, month and year array on 
   * signup
   * 
   * @param {number} init - First value of array
   * @param {end} end - Last Value of Array
   * @param {boolean} inverted - If true, the array will be returned from end to init
   */
  static getTimeArray(init, end, inverted) {
    let daysArray = [];

    if (inverted) {
      for (let index = end; index >= init; index--) {
        daysArray.push({value: index, text: index });
      }
      return daysArray;  
    }

    for (let index = init; index <= end; index++) {
      daysArray.push({key: index, value: index, text: index });
    }

    return daysArray;
  }
}

function handleResponse(response) {
  return response.json().then(data => {
      if (!response.ok) {
          throw(data);
      }

      return data;
  });
}

export default UserService;