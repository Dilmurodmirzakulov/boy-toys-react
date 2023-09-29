import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <main>
      <section className="es-page-section">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb es-breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>Главная</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Корзина
              </li>
            </ol>
          </nav>
          <div className="es-profile-page">
            <div className="row">
              <div className="col-sm-12 col-lg-4">
                <h1 className="es-page-title">Корзина</h1>
                <div className="card es-profile-card">
                  <div className="card-body es-user-info-body">
                    <div className="es-profile-detail">
                      <div className="es-profile-label">Имя:</div>
                      <div className="es-profile-value">Иван</div>
                    </div>
                    <div className="es-profile-detail">
                      <div className="es-profile-label">Пол:</div>
                      <div className="es-profile-value">Мужской</div>
                    </div>
                    <div className="es-profile-detail">
                      <div className="es-profile-label">Дата регистрации:</div>
                      <div className="es-profile-value">30.04.2022</div>
                    </div>
                    <div className="es-profile-detail">
                      <div className="es-profile-label">Дата рождения:</div>
                      <div className="es-profile-value">05.06.1995</div>
                    </div>
                    <div className="es-profile-detail">
                      <div className="es-profile-label">Телефон:</div>
                      <div className="es-profile-value">+99890 990 90 90</div>
                    </div>
                  </div>
                </div>
                <div className="card es-profile-card">
                  <div className="card-body text-center">
                    <h5 className="es-accumulative-title">Накопительная</h5>
                    <div className="es-profile-qr">
                      <img
                        src="data:image/png;base64,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"
                        className="img-fluid"
                      />
                    </div>
                    <div id="card-balance">
                      <div className="es-card-balance">
                        <div className="es-cb-label">Ваш баланс:</div>
                        &nbsp;&nbsp;
                        <div className="es-cb-value">100 000 сум</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="es-profile-actions">
                  <div className="es-action-block">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75"
                        stroke="#20AEEA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.0324 2.26495L6.12235 8.17495C5.89735 8.39995 5.67235 8.84245 5.62735 9.16495L5.30485 11.4224C5.18485 12.2399 5.76235 12.8099 6.57985 12.6974L8.83735 12.3749C9.15235 12.3299 9.59485 12.1049 9.82735 11.8799L15.7374 5.96995C16.7574 4.94995 17.2374 3.76495 15.7374 2.26495C14.2374 0.764945 13.0524 1.24495 12.0324 2.26495Z"
                        stroke="#20AEEA"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.1836 3.1123C11.6861 4.9048 13.0886 6.3073 14.8886 6.8173"
                        stroke="#20AEEA"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <Link to={"/"}>Редактировать</Link>
                  </div>
                  <div className="es-action-block">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.67578 5.66969C6.90828 2.96969 8.29578 1.86719 11.3333 1.86719H11.4308C14.7833 1.86719 16.1258 3.20969 16.1258 6.56219V11.4522C16.1258 14.8047 14.7833 16.1472 11.4308 16.1472H11.3333C8.31828 16.1472 6.93078 15.0597 6.68328 12.4047"
                        stroke="#20AEEA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.2498 9H2.71484"
                        stroke="#20AEEA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.3875 6.4873L1.875 8.9998L4.3875 11.5123"
                        stroke="#20AEEA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <Link to={"/"}>Выйти</Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-8">
                <div className="es-history">
                  <h1 className="es-history-title">История заказов</h1>
                  <div className="table-responsive">
                    <table className="table table-hover history-table">
                      <thead>
                        <tr>
                          <th scope="col" width="40">
                            №
                          </th>
                          <th scope="col">Дата</th>
                          <th scope="col">Способ оплаты</th>
                          <th scope="col">Кэшбэк</th>
                          <th scope="col">Сумма</th>
                          <th scope="col" className="text-right">
                            Статус
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Link to={"/"}>548648</Link>
                          </td>
                          <td>11.01.2023</td>
                          <td>Наличные</td>
                          <td className="text-nowrap">5 000 сум</td>
                          <td className="text-nowrap">1 150 000 сум</td>
                          <td className="text-right text-nowrap">Открыт</td>
                        </tr>
                        <tr>
                          <td>
                            <Link to={"/"}>548648</Link>
                          </td>
                          <td>11.01.2023</td>
                          <td>Наличные</td>
                          <td className="text-nowrap">5 000 сум</td>
                          <td className="text-nowrap">1 150 000 сум</td>
                          <td className="text-right text-nowrap">Открыт</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="es-empty-history d-none">
                    <div className="empty-history-title">
                      Пока ничего нет...
                    </div>
                    <div className="empty-history-desc">Перейти к покупкам</div>
                    <Link to={"/"} className="btn es-order-btn">
                      На главную
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
