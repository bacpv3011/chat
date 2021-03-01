const CustomError = require('../errors/CustomError');
const errorCodes = require('../errors/code');

const Account = require('../models/account');
const {
  decrypt,
  compareBcrypt,
  hashSHA512,
  generateSalt,
  encryptPassword,
} = require('../utils/security');

async function changePassword({ id, currentPassword, newPassword }) {
  const account = await Account.findById(id);
  if (!account)
    throw new CustomError(
      errorCodes.ACCOUNT_NOT_EXISTS,
      'Account is not exist.',
    );
  const isCorrectPassword = await compareBcrypt(
    hashSHA512(currentPassword),
    decrypt(account.password),
  );
  if (!isCorrectPassword)
    throw new CustomError(
      errorCodes.PASSWORD_NOT_MATCH,
      'Password is not match',
    );
  const salt = generateSalt();
  const encNewPassword = await encryptPassword(newPassword, salt);
  await Account.findByIdAndUpdate(id, {
    password: encNewPassword,
  });
}
async function changeInfo({ id, updateDatas }) {
  const account = await Account.findById(id);
  if (!account)
    throw new CustomError(
      errorCodes.ACCOUNT_NOT_EXISTS,
      'Account is not exist.',
    );
  await Account.findByIdAndUpdate(id, updateDatas);
}

module.exports = {
  changePassword,
  changeInfo,
};
