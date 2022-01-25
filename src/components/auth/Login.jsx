import { React, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EntranceButton from '../common/EntranceButton';
import SubmitButton from '../common/SubmitButton';
import Header from '../common/Header';
import AuthLink from './AuthLink';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function loginCommand() {
    axios
      .post('http://localhost:3001/auth/loginTeacher', {
        email,
        password,
      })
      .then((result) => {
        if (result.data) {
          localStorage.setItem('auth', result.data);
          navigate('/panel');
        }
        return false;
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    loginCommand();
  }

  return (
    <div>
      <div className="row">
        <div className="text-center col-md-3 containerStyle position-absolute top-50 start-50 translate-middle">
          <Header title="hello teacher!" header="login" />
          <form onSubmit={handleSubmit}>
            <div className="container">
              <EntranceButton
                value={email}
                onChangeValue={(val) => setEmail(val)}
                name="email"
              />
              <EntranceButton
                value={password}
                onChangeValue={(val) => setPassword(val)}
                name="password"
              />
              <AuthLink linkTo="/register" lineOne="don't have account?" lineTwo="create it" accent="here" />
              <SubmitButton type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
