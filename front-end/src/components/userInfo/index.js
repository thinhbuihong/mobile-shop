import React, { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { logout } from '../../actions/userActions'
import { UserInfoDropdown, UserInfoWrapper, UserName } from './style/userInfo'

export const UserInfo = ({ userInfo }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useReducer(state => !state, false);

  return (
    <UserInfoWrapper>
      <UserName onClick={setShow}>👤 {userInfo.name}</UserName>

      {
        show &&
        <UserInfoDropdown>
          {userInfo.isAdmin && <>
            <li><Link to="/admin/users">Users List</Link></li>
            <li><Link to="/admin/products">Product List</Link></li>
          </>}
          <li><Link to="/profile">Profile</Link></li>
          <li onClick={() => {
            dispatch(logout());
            history.push('/')
          }}>Logout</li>
        </UserInfoDropdown>
      }
    </UserInfoWrapper>
  )
}
