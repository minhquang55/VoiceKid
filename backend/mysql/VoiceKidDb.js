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

const addRegist = async ({parent_name, telephone, address, email}) => {
  try {
    const sql = "INSERT INTO signup_form (parent_name, telephone, address, email) VALUES (?, ?, ?, ?)"
    await connection.query(sql, [parent_name, telephone, address, email]);
  } catch (e) {
    throw new Error(e)
  }
}

// const editRegist = async ({parent_name, telephone, address, email}) => {
//   try {
//     const sql = "INSERT INTO signup_form (parent_name, telephone, address, email) VALUES (?, ?, ?, ?)"
//     await connection.query(sql, [parent_name, telephone, address, email]);
//   } catch (e) {
//     throw new Error(e)
//   }
// }

const changeStatus = async ({id, isConfirmed}) => {
  try {
    if(isConfirmed) {
      const sql = "UPDATE signup_form SET isConfirmed = 0 WHERE id = ?"
      await connection.query(sql, [id])
    } else {
      const sql = "UPDATE signup_form SET isConfirmed = 1 WHERE id = ?"
      await connection.query(sql, [id])
    }
  } catch (e) {
    throw new Error(e)
  }
}

const deleteRegist = async ({id}) => {
  try {
    const sql = "DELETE FROM signup_form WHERE id = ?"
    await connection.query(sql, [id])
  } catch (e) {
    throw new Error(e)
  }
}
module.exports = {
  getRegistList: getRegistList,
  addRegist: addRegist,
  deleteRegist: deleteRegist,
  changeStatus: changeStatus
};