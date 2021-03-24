import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { saveShippingAddress } from '../actions/cartActions';
import { Footer } from '../components/footer';
import Form from '../components/form';
import { Header } from '../components/header';
import { Menu } from '../components/menu';


const ShippingPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector(state => state.cart);
  const [form, setForm] = useState({
    ...shippingAddress
  });

  const formChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ ...form }));
    history.push('/placeorder');
  }

  return (
    <>
      <Header />
      <Menu />

      <Form onSubmit={submitHandler}>
        <Form.Title>Shipping</Form.Title>
        {/* {message && <Message variant='error' message={message} />} */}
        {/* {error && <Message variant='error' message={error} />}
        {loading && <Loader />} */}
        <Form.Base>
          <Form.Group>
            <Form.Label htmlFor="address">Address</Form.Label>
            <Form.Input name="address" value={form.address}
              required onChange={formChangeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="city">City</Form.Label>
            <Form.Input name="city" value={form.city}
              required onChange={formChangeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="postalCode">Postal Code</Form.Label>
            <Form.Input name="postalCode" value={form.postalCode} onChange={formChangeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="country">Country</Form.Label>
            <Form.Input name="country" value={form.country} onChange={formChangeHandler} />
          </Form.Group>

          <Form.Submit type="submit">Continue</Form.Submit>
        </Form.Base>

      </Form>

      <Footer />
    </>
  )
}

export default ShippingPage
