class UserService {
  static login(user) {

    const userInfo = mountParamsRequest(user);

    const options = {   
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch('http://localhost:8080/api/login?' + userInfo, options)
    .then((result) => result.json())
    .then((result) => {

        if (result.id) {
          return result;
          //dispatch(savedUser( result ));
        } else {
          throw(result);
        }

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
    return fetch('http://localhost:8080/api/signup', options).then(response => {
      console.log(response);
      return response.json();
    }).catch(error => {
      return error;
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

function mountParamsRequest(user) {
  var esc = encodeURIComponent;
  var userInfo = Object.keys(user)
              .map(k => esc(k) + '=' + esc(user[k]))
              .join('&');
  
  return userInfo;
}

export default UserService;