const e = require("express");
const myqsl = require("./mysql");

const connection = myqsl.pool.promise();

const getRegistList = async () => {
  try {
    const sql = "SELECT * FROM signup_form";
    const [rows, fields] = await connection.query(sql, []);
    return rows;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  getRegistList: getRegistList
};