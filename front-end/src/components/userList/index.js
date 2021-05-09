import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getUsersList } from '../../actions/userActions';
import { UserListWrapper, UserListBase, UserListHeader } from './style/userList'

function UserList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.usersList);
  const { userInfo } = useSelector(state => state.userLogin);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getUsersList());
    } else {
      history.push('/');
    }
    // eslint-disable-next-line
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
              users.map((user, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>)
              )
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
