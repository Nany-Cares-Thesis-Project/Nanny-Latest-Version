import axios from "axios";

// adding admin func
export const addadmin = (newUser) => {
  return axios
    .post("http://192.168.1.16:5000/AddAdmin", {
      userName: newUser.username,
      password: newUser.password,
    })
    .then((res) => {
      console.log("New Admin has been added");
    })
    .catch((err) => {
      console.log(err);
    });
};

// adding nanny func
export const addnanny = (newNanny) => {
  return axios
    .post("http://192.168.1.16:5000/AddNanny", {
      name: newNanny.name,
      phoneNumber: newNanny.phoneNumber,
      email: newNanny.email,
      place: newNanny.place,
      kidsNum: newNanny.kidsNum,
      cost: newNanny.cost,
      educationLevel: newNanny.educationLevel,
      experianceLevel: newNanny.experianceLevel,
      age: newNanny.age,
      workingHour: newNanny.workingHour,
    })
    .then((res) => {
      console.log("New Nanny has been added");
    })
    .catch((err) => {
      console.log(err);
    });
};

// login func
export const adminlogin = (admin) => {
  return axios
    .post("http://192.168.1.16:5000/AdminLogin", {
      userName: admin.username,
      password: admin.password,
    })
    .then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("usertoken", JSON.stringify(res.data));
        console.log("Admin loged in");
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};



// TODO ?! admin profile
