import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions/userActions';
import { Footer } from '../components/footer';
import Form from '../components/form';
import { Header } from '../components/header';
import { Loader } from '../components/loader';
import { Menu } from '../components/menu';
import { Message } from '../components/message';

const LoginPage = ({ location, history }) => {
  const dispatch = useDispatch();
  const redirect = location.search?.split('=')[1] || '/';
  const { loading, error, userInfo } = useSelector(state => state.userLogin);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const FormChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(form.email, form.password));
  }

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  return (
    <>
      <Header />
      <Menu />

      <Form onSubmit={submitHandler}>
        <Form.Title>Login</Form.Title>
        {error && <Message variant='error' message={error} />}
        {loading && <Loader />}
        <Form.Base>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Input name="email" type="email" value={form.email} onChange={FormChangeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Input name="password" type="password" value={form.password} onChange={FormChangeHandler} />
          </Form.Group>

          <Form.Submit disable={loading}>Login</Form.Submit>
        </Form.Base>

        <div>
          New customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </div>
      </Form>

      <Footer />
    </>

  )
}

export default LoginPage;
