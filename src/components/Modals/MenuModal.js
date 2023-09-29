import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeMenuModal } from "../../store/actions/modalsAction";

const MenuModal = () => {
  const { menuModal } = useSelector((state) => state.modalsReducer);
  const dispatch = useDispatch();

  const hideModal = () => {
    dispatch(closeMenuModal());
  };

  return (
    <Modal
      show={menuModal}
      onHide={hideModal}
      animation={false}
      class="modal fade"
      id="menuModal"
    >
      <div class="modal-dialog modal-dialog-full">
        <div class="modal-content">
          <div class="modal-header">
            <div class="es-logo">
              <img src={require("../../assets/img/logo.png")} alt="" />
            </div>
            <div class="es-mob-nav">
              <Dropdown class="dropdown es-lang-dropdown">
                <Dropdown.Toggle
                  class="btn dropdown-toggle es-language-dropdown"
                  type="button"
                  id="languageDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99999 18.3337C14.6024 18.3337 18.3333 14.6027 18.3333 10.0003C18.3333 5.39795 14.6024 1.66699 9.99999 1.66699C5.39762 1.66699 1.66666 5.39795 1.66666 10.0003C1.66666 14.6027 5.39762 18.3337 9.99999 18.3337Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.66667 2.5H7.5C5.875 7.36667 5.875 12.6333 7.5 17.5H6.66667"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5 2.5C14.125 7.36667 14.125 12.6333 12.5 17.5"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 13.3333V12.5C7.36667 14.125 12.6333 14.125 17.5 12.5V13.3333"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 7.5C7.36667 5.875 12.6333 5.875 17.5 7.5"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  class="dropdown-menu es-dropdown-menu"
                  aria-labelledby="languageDropdown"
                >
                  <Dropdown.Item class="dropdown-item active">
                    Рус
                  </Dropdown.Item>
                  <Dropdown.Item class="dropdown-item">O'zb</Dropdown.Item>
                  <Dropdown.Item class="dropdown-item">Eng</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Link class="es-favorites" to={"/favorites"} onClick={hideModal}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <button class="btn es-hamburger" onClick={hideModal}>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25147 9.23107C1.12808 9.23107 1.00468 9.18384 0.910212 9.09034C0.722231 8.90237 0.722231 8.59681 0.910212 8.40885L8.40823 0.911469C8.59621 0.723504 8.9018 0.723504 9.08978 0.911469C9.27776 1.09943 9.27776 1.405 9.08978 1.59296L1.59176 9.09034C1.49825 9.18384 1.37486 9.23107 1.25147 9.23107Z"
                    fill="white"
                  />
                  <path
                    d="M8.74949 9.23107C8.62609 9.23107 8.5027 9.18384 8.40823 9.09034L0.910212 1.592C0.722231 1.40403 0.722231 1.09847 0.910212 0.910505C1.09819 0.72254 1.40378 0.72254 1.59176 0.910505L9.08978 8.40788C9.27776 8.59585 9.27776 8.90141 9.08978 9.08937C8.99627 9.18384 8.87288 9.23107 8.74949 9.23107Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="modal-body">
            <Link to={"/"} class="btn es-btn-active w-100" onClick={hideModal}>
              На главную
            </Link>
            <ul class="nav es-mob-cat-list">
              <li class="nav-item">
                <Link to={"/"} class="nav-link" onClick={hideModal}>
                  <span>Меню</span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.729 8.30019L6.44567 5.58353C6.7665 5.26269 6.7665 4.7377 6.44567 4.41686L3.729 1.7002"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/contacts"} class="nav-link" onClick={hideModal}>
                  <span>Контакты</span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.729 8.30019L6.44567 5.58353C6.7665 5.26269 6.7665 4.7377 6.44567 4.41686L3.729 1.7002"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/about"} class="nav-link" onClick={hideModal}>
                  <span>О нас</span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.729 8.30019L6.44567 5.58353C6.7665 5.26269 6.7665 4.7377 6.44567 4.41686L3.729 1.7002"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/public-offer"} class="nav-link" onClick={hideModal}>
                  <span>Публичная офетра</span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.729 8.30019L6.44567 5.58353C6.7665 5.26269 6.7665 4.7377 6.44567 4.41686L3.729 1.7002"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
            <div class="es-modal-contact">
              <div class="es-phone-label">Телефон</div>
              <div class="es-phone">
                <Link to={"tel:+998 78 150 33 80"} onClick={hideModal}>
                  +998 78 <span class="es-text-blue">150 33 80</span>
                </Link>
              </div>
            </div>
            <div class="es-footer-info">
              <div class="es-footer-ic">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.8028 7.22927C15.9747 3.62341 12.7961 2 10.0039 2C10.0039 2 10.0039 2 9.99606 2C7.21182 2 4.02534 3.61561 3.19717 7.22146C2.27435 11.2488 4.76675 14.6595 7.02253 16.8059C7.85859 17.602 8.93126 18 10.0039 18C11.0766 18 12.1493 17.602 12.9775 16.8059C15.2333 14.6595 17.7257 11.2566 16.8028 7.22927ZM10.0039 11.1395C8.63155 11.1395 7.51943 10.039 7.51943 8.68098C7.51943 7.32293 8.63155 6.22244 10.0039 6.22244C11.3763 6.22244 12.4885 7.32293 12.4885 8.68098C12.4885 10.039 11.3763 11.1395 10.0039 11.1395Z"
                    fill="#253E5E"
                  />
                </svg>
              </div>
              <div>
                Адрес: ул. Богибустон, 248, <br /> Tashkent 100121
              </div>
            </div>
            <div class="es-footer-socials">
              <Link to={"/"} class="es-footer-ic" onClick={hideModal}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1047 10.6016H13.5862L13.9758 7.95516H11.1042V6.50876C11.1042 5.40938 11.4464 4.43452 12.4259 4.43452H14V2.12504C13.7234 2.08583 13.1385 2 12.0333 2C9.72546 2 8.37245 3.27951 8.37245 6.19458V7.95516H6V10.6016H8.37245V17.8755C8.84229 17.9497 9.31819 18 9.80671 18C10.2483 18 10.6793 17.9576 11.1047 17.8972V10.6016Z"
                    fill="#253E5E"
                  />
                </svg>
              </Link>
              <Link to={"/"} class="es-footer-ic" onClick={hideModal}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 12.1981V18H14.5561V12.5519C14.5561 11.2075 14.0538 10.2877 12.8341 10.2877C11.9013 10.2877 11.3274 10.9245 11.1121 11.4906C11.0404 11.7028 10.9686 11.9858 10.9686 12.3396V18H7.52466C7.52466 18 7.59641 8.80189 7.52466 7.88208H10.9686V9.29717C11.3991 8.58962 12.2601 7.59906 14.0538 7.59906C16.278 7.59906 18 9.08491 18 12.1981ZM3.93722 3C2.78924 3 2 3.7783 2 4.76887C2 5.75943 2.71749 6.53774 3.86547 6.53774C5.0852 6.53774 5.80269 5.75943 5.80269 4.76887C5.87444 3.70755 5.15695 3 3.93722 3ZM2.21525 18H5.65919V7.88208H2.21525V18Z"
                    fill="#253E5E"
                  />
                </svg>
              </Link>
              <Link to={"/"} class="es-footer-ic" onClick={hideModal}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3.44578C12.1205 3.44578 12.4096 3.44578 13.2771 3.44578C14.0482 3.44578 14.4337 3.63855 14.7229 3.73494C15.1084 3.92771 15.3976 4.0241 15.6867 4.31325C15.9759 4.60241 16.1687 4.89157 16.2651 5.27711C16.3614 5.56627 16.4578 5.95181 16.5542 6.72289C16.5542 7.59036 16.5542 7.78313 16.5542 10C16.5542 12.2169 16.5542 12.4096 16.5542 13.2771C16.5542 14.0482 16.3614 14.4337 16.2651 14.7229C16.0723 15.1084 15.9759 15.3976 15.6867 15.6867C15.3976 15.9759 15.1084 16.1687 14.7229 16.2651C14.4337 16.3614 14.0482 16.4578 13.2771 16.5542C12.4096 16.5542 12.2169 16.5542 10 16.5542C7.78313 16.5542 7.59036 16.5542 6.72289 16.5542C5.95181 16.5542 5.56627 16.3614 5.27711 16.2651C4.89157 16.0723 4.60241 15.9759 4.31325 15.6867C4.0241 15.3976 3.83133 15.1084 3.73494 14.7229C3.63855 14.4337 3.54217 14.0482 3.44578 13.2771C3.44578 12.4096 3.44578 12.2169 3.44578 10C3.44578 7.78313 3.44578 7.59036 3.44578 6.72289C3.44578 5.95181 3.63855 5.56627 3.73494 5.27711C3.92771 4.89157 4.0241 4.60241 4.31325 4.31325C4.60241 4.0241 4.89157 3.83133 5.27711 3.73494C5.56627 3.63855 5.95181 3.54217 6.72289 3.44578C7.59036 3.44578 7.87952 3.44578 10 3.44578ZM10 2C7.78313 2 7.59036 2 6.72289 2C5.85542 2 5.27711 2.19277 4.79518 2.38554C4.31325 2.57831 3.83133 2.86747 3.3494 3.3494C2.86747 3.83133 2.6747 4.21687 2.38554 4.79518C2.19277 5.27711 2.09639 5.85542 2 6.72289C2 7.59036 2 7.87952 2 10C2 12.2169 2 12.4096 2 13.2771C2 14.1446 2.19277 14.7229 2.38554 15.2048C2.57831 15.6867 2.86747 16.1687 3.3494 16.6506C3.83133 17.1325 4.21687 17.3253 4.79518 17.6145C5.27711 17.8072 5.85542 17.9036 6.72289 18C7.59036 18 7.87952 18 10 18C12.1205 18 12.4096 18 13.2771 18C14.1446 18 14.7229 17.8072 15.2048 17.6145C15.6867 17.4217 16.1687 17.1325 16.6506 16.6506C17.1325 16.1687 17.3253 15.7831 17.6145 15.2048C17.8072 14.7229 17.9036 14.1446 18 13.2771C18 12.4096 18 12.1205 18 10C18 7.87952 18 7.59036 18 6.72289C18 5.85542 17.8072 5.27711 17.6145 4.79518C17.4217 4.31325 17.1325 3.83133 16.6506 3.3494C16.1687 2.86747 15.7831 2.6747 15.2048 2.38554C14.7229 2.19277 14.1446 2.09639 13.2771 2C12.4096 2 12.2169 2 10 2Z"
                    fill="#253E5E"
                  />
                  <path
                    d="M10 5.85542C7.68675 5.85542 5.85542 7.68675 5.85542 10C5.85542 12.3133 7.68675 14.1446 10 14.1446C12.3133 14.1446 14.1446 12.3133 14.1446 10C14.1446 7.68675 12.3133 5.85542 10 5.85542ZM10 12.6988C8.55422 12.6988 7.30121 11.5422 7.30121 10C7.30121 8.55422 8.45783 7.30121 10 7.30121C11.4458 7.30121 12.6988 8.45783 12.6988 10C12.6988 11.4458 11.4458 12.6988 10 12.6988Z"
                    fill="#253E5E"
                  />
                  <path
                    d="M14.241 6.72289C14.7733 6.72289 15.2048 6.29136 15.2048 5.75904C15.2048 5.22671 14.7733 4.79518 14.241 4.79518C13.7086 4.79518 13.2771 5.22671 13.2771 5.75904C13.2771 6.29136 13.7086 6.72289 14.241 6.72289Z"
                    fill="#253E5E"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MenuModal;
