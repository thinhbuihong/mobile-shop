import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getProducts } from '../../actions/productAction';
import { getUsersList } from '../../actions/userActions';
import { UserListWrapper, UserListBase, UserListHeader } from './style/userList'

function ProductList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const { userInfo } = useSelector(state => state.userLogin);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getProducts());
    } else {
      history.push('/');
    }
    // eslint-disable-next-line
  }, [])

  const deleteHandler = (id) => {
    if (window.confirm("are you sure about that!")) {
      axios.delete("/api/products/" + id, {
        headers: {
          Authorization: "Bearer " + userInfo.token
        }
      }).then(() => window.location.reload())
    }
  }
  const createProductHander = (product) => {

  }

  return (
    <UserListWrapper>
      <button>Add Product</button>
      <UserListBase>
        <UserListHeader>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>countInStock</th>
            <th></th>
          </tr>
        </UserListHeader>

        {products ?
          <tbody>
            {
              products.map((product, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.countInStock}</td>
                  <td><button onClick={deleteHandler.bind(this, product._id)}>delete</button></td>
                </tr>)
              )
            }
          </tbody>
          :
          <tr>
            Cant get products list
        </tr>}
      </UserListBase>
    </UserListWrapper>
  )
}

export default ProductList
