import { useState } from "react";

import BurgerMeny from "../Burger/BurgerMeny";

import Style from "../MainStyle.module.scss";
import logo from "../../assets/audi_logo.png";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const [burgerState, setBurgerState] = useState(false);

  const openBurger = () => {
    setBurgerState(true);
  };

  const closeBurger = () => {
    setBurgerState(false);
  };

  return (
    <>
      <BurgerMeny props={{ state: burgerState, setter: closeBurger }} />
      <header className={Style.header_about}>
        <nav>
          <div className={Style.container}>
            <section className={Style.logo}>
              <img src={logo} />
              <h1>AUDI</h1>
            </section>

            <section className={Style.nav_interface}>
              <Link to="/">Home</Link>
              <Link to="/cars">Our cars</Link>
              <Link to="/about">About us</Link>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
                className={Style.burger}
                onClick={() => {
                  openBurger();
                }}
              >
                <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
              </svg>
            </section>
          </div>
        </nav>

        <section className={`${Style.container}`}>
          <section className={Style.header_content}>
            <h2>
              Minsk, <br /> Independence Ave. 198
            </h2>

            <p>
              Contact us: <br /> +375 29 191 88 88 <br /> +375 17 311 88 88
            </p>
          </section>
        </section>
      </header>

      <main className={`${Style.container} ${Style.about}`}>
        <h1>We are the official dealer Audi in Belarus</h1>
        <h2>Buy Audi cars and get a number of additional benefits:</h2>
        <ol>
          <li>An official warranty.</li>
          <li>
            The program "Roadside Assistance", which applies to the entire
            territory of the Republic of Belarus.
          </li>
          <li>
            The Audi Partner program, in which official Audi service centers
            will offer you discounts on maintenance and spare parts if your car
            leaves the warranty period for mileage before it reaches the age of
            five years.
          </li>
          <li>
            The opportunity to use the Audi Service Mobile service – a mobile
            service station that helps to eliminate minor breakdowns without
            visiting the service.
          </li>
          <li>
            The ability to use a replacement car when performing maintenance.
          </li>
          <li>
            Remote settlement of losses in the event of an insured event without
            contacting the insurance company and the need to provide the car for
            inspection.
          </li>
          <li>Special rates for voluntary car insurance services.</li>
        </ol>

        <h2>Warranty obligations</h2>
        <p>
          From January 1, 2019, a five-year manufacturer's warranty is valid for
          all cars purchased at Audi Center Minsk: 2 years without mileage
          limitation plus an additional 3 years of warranty with a total mileage
          of no more than 150,000 km. depending on what comes first.
        </p>

        <h1 className={Style.lower_h1}>
          Insurance in the car center has a number of advantages and will allow
          you to:
        </h1>
        <ol>
          <li>
            Choose for yourself the most advantageous offer for risk insurance,
            we will only help you make the right choice by providing various
            options for reliable calculations.
          </li>
          <li>
            Special conditions and a flexible system of discounts from partner
            insurance companies are provided for Audi car center customers.
          </li>
          <li>
            A separate employee of the car center is at your service, to whom
            you can contact when an insured event occurs. The system of "remote
            settlement of losses" will allow you to significantly reduce the
            time and nerves of contacting an insurance company, carrying out the
            procedure for assessing the damage caused, preparing documents for
            receiving a referral to a service station and repairing your car.
            You no longer need to go to the insurance company, we will do it for
            you.
          </li>
          <li>
            We work on the principle of "one window" - issue insurance policies,
            make payment of regular contributions, extend contracts, issue
            insurance claims in our car center. We work so that you always feel
            calm and take care of your comfort.
          </li>
        </ol>

        <p>
          You can sign up for a test drive, get a commercial offer or calculate
          lease payments from the consultant manager of the car sales department
          at Audi Center or by phone: +375 44 585 24 79.
        </p>
      </main>

      <footer className={Style.container}>
        <section className={Style.contacts}>
          <h2>Audi</h2>

          <section className={Style.hrefs}>
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
                fill="white"
              />
            </svg>

            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4C10.4178 4 8.87103 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM15.93 9.48L14.62 15.67C14.52 16.11 14.26 16.21 13.89 16.01L11.89 14.53L10.89 15.46C10.8429 15.5215 10.7824 15.5715 10.7131 15.6062C10.6438 15.6408 10.5675 15.6592 10.49 15.66L10.63 13.66L14.33 10.31C14.5 10.17 14.33 10.09 14.09 10.23L9.55 13.08L7.55 12.46C7.12 12.33 7.11 12.03 7.64 11.83L15.35 8.83C15.73 8.72 16.05 8.94 15.93 9.48Z"
                fill="white"
              />
            </svg>
          </section>
        </section>
        <p>Official dealer Audi in Belarus</p>
      </footer>
    </>
  );
}
