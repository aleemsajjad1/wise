import Cookies from "js-cookie";

const BaseUrl = "https://wise.senarios.co/";

export function Adminlogin(email, password) {
  return new Promise((resolve, reject) => {
    // console.log(empData);
    fetch(BaseUrl + "api/auth/adminlogin", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log ("api response from login" , responseJson)
        resolve(responseJson);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export function getRedemptionDetailsByConsumerIdByBizId(biz_id, id) {
  return new Promise((resolve, reject) => {
    // console.log(empData);
    fetch(BaseUrl + "api/auth/getRedemptionDetailsByConsumerIdByBizId", {
      method: "POST",
      body: JSON.stringify({ biz_id: biz_id, id: id }),
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log ("api response from login" , responseJson)
        resolve(responseJson);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export function getRedemptionDetailsByDateByBizId(date, biz_id) {
  return new Promise((resolve, reject) => {
    // console.log(empData);
    fetch(BaseUrl + "api/auth/getRedemptionDetailsByDateByBizId", {
      method: "POST",
      body: JSON.stringify({ date: date, biz_id: biz_id }),
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log ("api response from login" , responseJson)
        resolve(responseJson);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export function getAllBillingDetails(date) {
  return new Promise((resolve, reject) => {
    // console.log(empData);
    fetch(BaseUrl + "api/auth/getAllBillingDetails", {
      method: "POST",
      body: JSON.stringify({ date: date }),
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log ("api response from login" , responseJson)
        resolve(responseJson);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export function getMessageTrafficByDate(date) {
  return new Promise((resolve, reject) => {
    // console.log(empData);
    fetch(BaseUrl + "api/auth/getMessageTrafficByDate", {
      method: "POST",
      body: JSON.stringify({ date: date }),
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log ("api response from login" , responseJson)
        resolve(responseJson);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export function getRedemptionDetailsByDateByCustomerId(date, id) {
  return new Promise((resolve, reject) => {
    // console.log(empData);
    fetch(BaseUrl + "api/auth/getRedemptionDetailsByDateByCustomerId", {
      method: "POST",
      body: JSON.stringify({ date: date, id: id }),
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log ("api response from login" , responseJson)
        resolve(responseJson);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export function getMessagesByBizIdByDate(date, biz_id) {
  return new Promise((resolve, reject) => {
    // console.log(empData);
    fetch(BaseUrl + "api/auth/getMessagesByBizIdByDate", {
      method: "POST",
      body: JSON.stringify({ date: date, biz_id: biz_id }),
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log ("api response from login" , responseJson)
        resolve(responseJson);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export function sendMessageToConsumers(title, body) {
  return new Promise((resolve, reject) => {
    // console.log(empData);
    fetch(BaseUrl + "api/auth/sendMessageToConsumers", {
      method: "POST",
      body: JSON.stringify({ title: title, body: body }),
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log ("api response from login" , responseJson)
        resolve(responseJson);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export function updatePolicy(toub, tou, ppb, pp) {
  return new Promise((resolve, reject) => {
    // console.log(empData);
    fetch(BaseUrl + "api/auth/updatePolicy", {
      method: "POST",
      body: JSON.stringify({ toub: toub, tou: tou, ppb: ppb, pp: pp }),
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log ("api response from login" , responseJson)
        resolve(responseJson);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export function updateAdminPassword(new_pass, old_pass) {
  return new Promise((resolve, reject) => {
    // console.log(empData);
    fetch(BaseUrl + "api/auth/updateAdminPassword", {
      method: "POST",
      body: JSON.stringify({ new: new_pass, old: old_pass }),
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log ("api response from login" , responseJson)
        resolve(responseJson);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export function getAllBizAccounts() {
  return new Promise((resolve, reject) => {
    // console.log(empData);
    fetch(BaseUrl + "api/auth/getAllBizAccounts", {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log ("api response from login" , responseJson)
        resolve(responseJson);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
export function getEnquiry() {
  return new Promise((resolve, reject) => {
    // console.log(empData);
    fetch(BaseUrl + "api/auth/getEnquiry", {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("api response from support enquiry", responseJson);
        resolve(responseJson);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export function getPolicy() {
  return new Promise((resolve, reject) => {
    // console.log(empData);
    fetch(BaseUrl + "api/auth/getPolicy", {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log ("  getpolicy" , responseJson)
        resolve(responseJson);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export function getAllConsumer() {
  return new Promise((resolve, reject) => {
    // console.log(empData);
    fetch(BaseUrl + "api/auth/getAllConsumers", {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log ("api response from consumer" , responseJson)
        resolve(responseJson);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export function isAuthenticate() {
  if (localStorage.getItem("user") && Cookies.get("token")) {
    return true;
  }
  return false;
}

export function logOut() {
  localStorage.removeItem("user");
  Cookies.remove("token");
  window.location = "/";
}
