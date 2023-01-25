import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setUser } from '../store/slices/userSlice';
import Form from './Form';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        navigate(`/`);
      })
      .catch(console.error);
  };

  return (
    <div className="app">
      <div className="aut">
        <div className="aut__block">
          <span className="logo">
            <img src="icons/devchallenges.svg" alt="" srcSet="" />
          </span>

          <p className="aut__title">Login</p>

          <Form handleSubmit={handleSubmit} buttonName="Login" />

          <p className="aut__bottom-text">or continue with these social profile</p>

          <div className="aut__icons">
            <img src="icons/Google.svg" alt="Google" srcSet="" className="aut__icon" />
            <img src="icons/Gihub.svg" alt="Gihub" srcSet="" className="aut__icon" />
            <img src="icons/Facebook.svg" alt="Facebook" srcSet="" className="aut__icon" />
            <img src="icons/Twitter.svg" alt="Twitter" srcSet="" className="aut__icon" />
          </div>

          <p className="aut__bottom-text">
            Adready a member?{' '}
            <NavLink to={'/register'} className="aut__link">
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
