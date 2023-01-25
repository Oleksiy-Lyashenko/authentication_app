import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeUser } from '../store/slices/userSlice';

export default function UserPage() {
  const dispatch = useDispatch();

  return (
    <div className="content">
      <div className="header">
        <img src="icons/devchallenges.svg" alt="" srcSet="" />
        <div className="header__info">
          <img src="icons/Google.svg" alt="" srcSet="" />
        </div>
      </div>

      <h1 className="content__title">Personal info</h1>

      <p className="content__subtitle">Basic info, like your name and photo</p>

      <div className="personal-info">
        <div className="personal-info__block">
          <div>
            <h3 className="personal-info__title">Profile</h3>
            <p className="personal-info__subtitle">Some info may be visible to other people</p>
          </div>

          <NavLink to="/edit" className="personal-info__button">
            Edit
          </NavLink>
        </div>

        <div className="personal-info__block personal-info__block--value">
          <span className="personal-info__type">photo</span>
          <img src="icons/user_icon_big.svg" alt="" srcSet="" className="personal-info__value" />
        </div>

        <div className="personal-info__block">
          <span className="personal-info__type">name</span>
          <span className="personal-info__value">Xanthe Neal</span>
        </div>

        <div className="personal-info__block">
          <span className="personal-info__type">bio</span>
          <span className="personal-info__value">
            I am a software developer and a big fan of devchallenges...
          </span>
        </div>

        <div className="personal-info__block">
          <span className="personal-info__type">phone</span>
          <span className="personal-info__value">908249274292</span>
        </div>

        <div className="personal-info__block">
          <span className="personal-info__type">email</span>
          <span className="personal-info__value">xanthe.neal@gmail.com</span>
        </div>

        <div className="personal-info__block">
          <span className="personal-info__type">password</span>
          <span className="personal-info__value">************</span>
        </div>
      </div>

      <button onClick={() => dispatch(removeUser())}>Log out</button>
    </div>
  );
}
