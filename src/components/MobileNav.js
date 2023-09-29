import React from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="mobile-nav d-lg-none">
      <ul className="nav">
        <li className="nav-item">
          <Link to={"/"} className="nav-link active">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3701 6.25122L13.0901 2.55706C11.6509 1.54872 9.44172 1.60372 8.05755 2.67622L3.46505 6.26039C2.54839 6.97539 1.82422 8.44206 1.82422 9.59706V15.9221C1.82422 18.2596 3.72172 20.1662 6.05922 20.1662H15.9409C18.2784 20.1662 20.1759 18.2687 20.1759 15.9312V9.71622C20.1759 8.47872 19.3784 6.95706 18.3701 6.25122ZM11.6876 16.4996C11.6876 16.8754 11.3759 17.1871 11.0001 17.1871C10.6242 17.1871 10.3126 16.8754 10.3126 16.4996V13.7496C10.3126 13.3737 10.6242 13.0621 11.0001 13.0621C11.3759 13.0621 11.6876 13.3737 11.6876 13.7496V16.4996Z"
                fill="#253E5E"
              />
            </svg>
            <span className="menu-title">Главная</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3391 8.13965H16.1516"
                stroke="#253E5E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.84839 8.13965L6.53589 8.82715L8.59839 6.76465"
                stroke="#253E5E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.3391 14.5566H16.1516"
                stroke="#253E5E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.84839 14.5566L6.53589 15.2441L8.59839 13.1816"
                stroke="#253E5E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.24992 20.1663H13.7499C18.3333 20.1663 20.1666 18.333 20.1666 13.7497V8.24967C20.1666 3.66634 18.3333 1.83301 13.7499 1.83301H8.24992C3.66659 1.83301 1.83325 3.66634 1.83325 8.24967V13.7497C1.83325 18.333 3.66659 20.1663 8.24992 20.1663Z"
                stroke="#253E5E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="menu-title">Меню</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/cart"} className="nav-link">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.875 7.03072V6.14155C6.875 4.07905 8.53417 2.05322 10.5967 1.86072C13.0533 1.62239 15.125 3.55655 15.125 5.96739V7.23239"
                stroke="#253E5E"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25009 20.1663H13.7501C17.4351 20.1663 18.0951 18.6905 18.2876 16.8938L18.9751 11.3938C19.2226 9.15717 18.5809 7.33301 14.6668 7.33301H7.33342C3.41925 7.33301 2.77759 9.15717 3.02509 11.3938L3.71259 16.8938C3.90509 18.6905 4.56509 20.1663 8.25009 20.1663Z"
                stroke="#253E5E"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.2043 11.0003H14.2125"
                stroke="#253E5E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.78655 11.0003H7.79478"
                stroke="#253E5E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="badge badge-cart">1</span>
            <span className="menu-title">Корзина</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/profile"} className="nav-link">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1466 9.96384C11.0549 9.95467 10.9449 9.95467 10.8441 9.96384C8.66243 9.89051 6.92993 8.10301 6.92993 5.90301C6.92993 3.65717 8.74493 1.83301 10.9999 1.83301C13.2458 1.83301 15.0699 3.65717 15.0699 5.90301C15.0608 8.10301 13.3283 9.89051 11.1466 9.96384Z"
                stroke="#253E5E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.56341 13.347C4.34507 14.832 4.34507 17.252 6.56341 18.7278C9.08424 20.4145 13.2184 20.4145 15.7392 18.7278C17.9576 17.2428 17.9576 14.8228 15.7392 13.347C13.2276 11.6695 9.09341 11.6695 6.56341 13.347Z"
                stroke="#253E5E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="menu-title">Профиль</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
