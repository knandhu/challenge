"use strict";
const _ = require("lodash");
const db = require("./db.js");

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 0);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
  const dataAccessMethod = () => {
    let finalArr = [];
    Object.keys(db.itemsOfUserByUsername).map((name) => {
      if (db.itemsOfUserByUsername[name].includes(item)) {
        finalArr.push(name);
      }
    });

    let finalObj = {};
    finalArr.map((n) => {
      Object.keys(db.usersById).map((userObj) => {
        if (db.usersById[userObj]["username"] === n) {
          finalObj[db.usersById[userObj]["age"]] =
            finalObj[db.usersById[userObj]["age"]] + 1 || 1;
        }
      });
    });
    return finalObj;
  };

  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
};
