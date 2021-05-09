import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsersList } from '../../actions/userActions';
import { UserListWrapper, UserListBase, UserListHeader } from './style/userList'

function UserList() {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.usersList);

  useEffect(() => {
    dispatch(getUsersList());
  }, [])

  return (
    <UserListWrapper>
      <UserListBase>
        <UserListHeader>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </UserListHeader>

        {users ?
          <tbody>
            {
              users.map((user, index) => {
                return (
                  <tr>
                    <td>{index}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                )
              })
            }
          </tbody>
          :
          <tr>
            Cant get users list
        </tr>}
      </UserListBase>
    </UserListWrapper>
  )
}

export default UserList
