const orm = require("../config/orm.js");

const burger = {
  all: () => {
    return orm.selectAll("burgers");
  },
  create: (cols, vals) => {
    return orm.insertOne("burgers", cols, vals);
  },
  update: (objColVals, condition) => {
    return orm.updateOne("burgers", objColVals, condition);
  }
};

module.exports = burger;