import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import "./Home.scss";

const Home = ({ array }) => {
  return (
    <div className="home">
      <div className="home__form">
        <ul className="home__menu">
          {array.map((arr) => {
            return (
              <li className="home__item" key={arr.id}>
                <div className="home__link">
                  <div className="home__block">
                    <div
                      className={classNames("home__circle", {
                        complete: arr.status === "complete",
                        active: arr.status === "active",
                        next: arr.status === "next",
                      })}
                    >
                      {arr.id}
                    </div>
                    <label>{arr.status}</label>
                  </div>

                  <div className="home__info">
                    <h2 className="home__title">{arr.title}</h2>
                    <p className="home__text">{arr.text}</p>
                  </div>

                  {arr.status !== "next" ? (
                    <NavLink to={arr.url} className="home__btn">
                      Посмотреть
                    </NavLink>
                  ) : (
                    <div
                      className={classNames("home__btn", {
                        disabled: arr.status === "next",
                      })}
                    >
                      Посмотреть
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
