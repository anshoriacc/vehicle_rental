const db = require('../config/db');

const detailUser = (userId) => {
  return new Promise((resolve, reject) => {
    const sqlQuery = `SELECT id, name, email, phone, gender, address, dob, photo, created_at
    FROM users
      WHERE id = ?`;
    db.query(sqlQuery, userId, (err, result) => {
      if (err)
        return reject({
          status: 500,
          err: {msg: 'Something went wrong.', data: null},
        });
      resolve({
        status: 200,
        result: {msg: 'Success get detail user.', data: result.data[0]},
      });
    });
  });
};

const editUser = (userId, body) => {
  return new Promise((resolve, reject) => {
    const sqlQuery = `UPDATE users
      SET ?
      WHERE id = ?`;
    db.query(sqlQuery, [body, userId], (err, result) => {
      if (err)
        return reject({
          status: 500,
          err: {msg: 'Something went wrong.', data: null},
        });
      return resolve({
        status: 201,
        result: {msg: 'Success edit profile.', data: result},
      });
    });
  });
};

// const addUser = (body) => {
//   return new Promise((resolve, reject) => {
//     const sqlQuery = `INSERT INTO users SET ?`;
//     db.query(sqlQuery, body, (err, result) => {
//       if (err)
//         return reject({
//           status: 500,
//           err: {msg: 'Something went wrong.', data: null},
//         });
//       return resolve({status: 201, result: {data: result}});
//     });
//   });
// };

// const deleteUser = (userId) => {
//   return new Promise((resolve, reject) => {
//     const sqlQuery = `DELETE FROM users WHERE id = ?`;
//     db.query(sqlQuery, userId, (err, result) => {
//       if (err) return reject({status: 500, err});
//       resolve({status: 201, result: {data: result}});
//     });
//   });
// };

module.exports = {
  detailUser,
  editUser,
};
