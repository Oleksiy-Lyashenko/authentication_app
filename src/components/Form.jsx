import React, { useState } from 'react';

export default function Form({ handleSubmit, buttonName }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="form">
      <div className="form__box">
        <img src="icons/mail_aut.svg" alt="" srcSet="" className="form__icon" />
        <input
          type="email"
          className="form__input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form__box">
        <img src="icons/lock_aut.svg" alt="" srcSet="" className="form__icon" />
        <input
          type="password"
          className="form__input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="form__button" onClick={() => handleSubmit(email, password)}>{buttonName}</button>
    </div>
  );
}
