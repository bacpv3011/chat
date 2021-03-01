const accountService = require('../services/account.js');

const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  await accountService.changePassword({
    id: req.account._id,
    currentPassword,
    newPassword,
  });
  res.send({ status: 1 });
};

const changeInfo = async (req, res) => {
  const { updateDatas } = req.body;
  await accountService.changeInfo({
    id: req.account._id,
    updateDatas,
  });
  res.send({ status: 1 });
};

module.exports = {
  changePassword,
  changeInfo,
};
