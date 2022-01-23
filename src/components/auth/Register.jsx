import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EntranceButton from '../common/EntranceButton';
import SubmitButton from '../common/SubmitButton';
import Header from '../common/Header';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  // TODO()
  // const loginCommand = () => {
  // axios
  //   .get("http://en.wikipeda.org/w/api.php", {
  //     params: {
  //       action: "query",
  //       list: "search",
  //       format: "json",
  //       origin: "*",
  //       search: term,
  //     },
  //   })
  //   .then((result) => {});
  // };
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    let validate = false;

    console.log(`data: ${email} ${password} ${repeatPassword}`);
    // if(loginCommand())
    validate = true;
    if (validate) {
      navigate('/panel');
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
        </div>
      </div>
    </div>
  );
}

export default Register;
