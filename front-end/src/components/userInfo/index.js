import React, { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/userActions'
import { UserInfoDropdown, UserInfoWrapper, UserName } from './style/userInfo'

export const UserInfo = ({ userInfo }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useReducer(state => !state, false);

  return (
    <UserInfoWrapper>
      <UserName onClick={setShow}>👤 {userInfo.name}</UserName>

      {
        show &&
        <UserInfoDropdown>
          {userInfo.isAdmin && <>
            <li><Link to="/admin/users">Users List</Link></li>
          </>}
          <li><Link to="/profile">Profile</Link></li>
          <li onClick={() => dispatch(logout())}>Logout</li>
        </UserInfoDropdown>
      }
    </UserInfoWrapper>
  )
}
