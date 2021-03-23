import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import { Footer } from '../components/footer';
import Form from '../components/form';
import { Header } from '../components/header';
import { Loader } from '../components/loader';
import { Menu } from '../components/menu';
import { Message } from '../components/message';

const RegisterPage = ({ location, history }) => {
  const dispatch = useDispatch();
  const redirect = location.search?.split('=')[1] || '/';
  const { loading, error, userInfo } = useSelector(state => state.userRegister);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState(null);

  const FormChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage('Password do not match');
      return;
    }

    setForm({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setMessage(null);
    dispatch(register(form.name, form.email, form.password));
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
        <Form.Title>Register</Form.Title>
        {message && <Message variant='error' message={message} />}
        {error && <Message variant='error' message={error} />}
        {loading && <Loader />}
        <Form.Base>
          <Form.Group>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Input name="name" value={form.name} onChange={FormChangeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Input name="email" type="email" value={form.email} onChange={FormChangeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Input name="password" type="password" value={form.password} onChange={FormChangeHandler} />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
            <Form.Input name="confirmPassword" type="password" value={form.confirmPassword} onChange={FormChangeHandler} />
          </Form.Group>

          <Form.Submit disable={loading}>Register</Form.Submit>
        </Form.Base>

        <div>
          Have an Accout? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </div>
      </Form>

      <Footer />
    </>

  )
}

export default RegisterPage;
