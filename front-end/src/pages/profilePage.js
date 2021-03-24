import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../actions/userActions';
import { Footer } from '../components/footer';
import Form from '../components/form';
import { Header } from '../components/header';
import { Loader } from '../components/loader';
import { Menu } from '../components/menu';
import { Message } from '../components/message';

const ProfilePage = ({ history }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.userLogin);
  const { loading, error, success } = useSelector(state => state.userUpdateProfile);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {

      setForm({
        ...form,
        name: userInfo.name,
        email: userInfo.email,
      })

    }
  }, [userInfo, form, history])

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

    setMessage(null);
    dispatch(updateUserProfile({
      name: form.name,
      email: form.email,
      password: form.password
    }))
  }

  return (
    <>
      <Header />
      <Menu />

      <Form onSubmit={submitHandler}>
        <Form.Title>Update Profile</Form.Title>
        {message && <Message variant='error' message={message} />}
        {error && <Message variant='error' message={error} />}
        {loading && <Loader />}
        {success && <Message variant="info" message="Profile Updated" />}

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

          <Form.Submit disable={loading}>Update Profile</Form.Submit>
        </Form.Base>
      </Form>



      <Footer />
    </>

  )
}

export default ProfilePage;
