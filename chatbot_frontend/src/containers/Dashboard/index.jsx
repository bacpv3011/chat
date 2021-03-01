import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import actions from '../../redux/actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(actions.auth.logout());
  };

  return <Button onClick={logout}>Dashboard</Button>;
};
export default Dashboard;
