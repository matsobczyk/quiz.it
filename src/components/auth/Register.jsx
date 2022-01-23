import { React, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EntranceButton from '../common/EntranceButton';
import SubmitButton from '../common/SubmitButton';
import Header from '../common/Header';

function Register() {
  const [showWarning, setShowWarning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigate = useNavigate();

  function navigateToLogin() {
    setTimeout(() => {
      navigate('/login');
    }, 2500);
  }

  function registerCommand() {
    const name = 'user';
    axios
      .post('http://localhost:3001/auth/registerTeacher', {
        name,
        email,
        password,
      })
      .then((result) => {
        if (result) {
          setMessage('Register! Now its time to login:)');
          setShowSuccess(true);
          navigateToLogin();
        }
        return false;
      });
  }


  function handleSubmit(e) {
    e.preventDefault();
    if (password === repeatPassword) {
      setShowWarning(false);
      registerCommand();
    } else {
      setMessage('Passwords must be the same!');
      setShowWarning(true);
    }
  }

  return (
    <div>
      <div className="row">
        <div className="text-center col-md-3 containerStyle position-absolute top-50 start-50 translate-middle">
          <Header title="hello teacher!" header="register" />
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
              <EntranceButton
                value={repeatPassword}
                onChangeValue={(val) => setRepeatPassword(val)}
                name="repeat password"
              />
              <SubmitButton type="submit" />
            </div>
          </form>

          {showWarning
            && (
              <h5 className="text-danger">
                {message}
              </h5>
            )}
          {showSuccess
            && (
              <h4 className="text-success">
                {message}
              </h4>
            )}
        </div>
      </div>
    </div>
  );
}

export default Register;
