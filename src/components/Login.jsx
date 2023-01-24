import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <div className="aut">
      <div className="aut__block">
        <span className="logo">
          <img src="icons/devchallenges.svg" alt="" srcset="" />
        </span>

        <p className="aut__title">Login</p>

        <form action="" className="form">
          <div className="form__box">
            <img src="icons/mail_aut.svg" alt="" srcset="" className="form__icon" />
            <input type="email" className="form__input" placeholder="Email" />
          </div>

          <div className="form__box">
            <img src="icons/lock_aut.svg" alt="" srcset="" className="form__icon" />
            <input type="password" className="form__input" placeholder="Password" />
          </div>

          <button className="form__button">Login</button>
        </form>

        <p className="aut__bottom-text">or continue with these social profile</p>

        <div className="aut__icons">
          <img src="icons/Google.svg" alt="Google" srcset="" className="aut__icon" />
          <img src="icons/Gihub.svg" alt="Gihub" srcset="" className="aut__icon" />
          <img src="icons/Facebook.svg" alt="Facebook" srcset="" className="aut__icon" />
          <img src="icons/Twitter.svg" alt="Twitter" srcset="" className="aut__icon" />
        </div>

        <p className="aut__bottom-text">
          Adready a member?{' '}
          <NavLink to={'/register'} className="aut__link">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
}
