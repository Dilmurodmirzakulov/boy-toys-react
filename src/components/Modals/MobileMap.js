import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { Dropdown, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeMapModal } from "../../store/actions/modalsAction";

const MobileMap = () => {
  const { mobileMap } = useSelector((state) => state.modalsReducer);
  const dispatch = useDispatch();

  const hideModal = () => {
    dispatch(closeMapModal());
  };

  return (
    <Modal
      show={mobileMap}
      onHide={hideModal}
      animation={false}
      class="modal fade"
      id="mapModal"
    >
      <div class="modal-dialog modal-dialog-full">
        <div class="modal-content">
          <div class="modal-header">
            <div class="es-logo">
             <Link to={"/"} onClick={hideModal}>
              <img src={Logo} alt="" />
             </Link>
            </div>
            <div class="es-mob-nav">
              <Dropdown class="dropdown es-lang-dropdown">
                <Dropdown.Toggle class="btn es-language-dropdown" type="button">
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
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.66667 2.5H7.5C5.875 7.36667 5.875 12.6333 7.5 17.5H6.66667"
                      stroke="white"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5 2.5C14.125 7.36667 14.125 12.6333 12.5 17.5"
                      stroke="white"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 13.3333V12.5C7.36667 14.125 12.6333 14.125 17.5 12.5V13.3333"
                      stroke="white"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 7.5C7.36667 5.875 12.6333 5.875 17.5 7.5"
                      stroke="white"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu class="dropdown-menu es-dropdown-menu">
                  <Dropdown.Item class="dropdown-item active">
                    Рус
                  </Dropdown.Item>
                  <Dropdown.Item class="dropdown-item">O'zb</Dropdown.Item>
                  <Dropdown.Item class="dropdown-item">Eng</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Link to={"/favorites"} class="es-favorites" onClick={hideModal}>
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
                    stroke-width="1.5"
                    strokeLinecap="round"
                    stroke-linejoin="round"
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
          <div class="modal-body p-0">
            <div class="es-modal-sticky-nav">
              <Link to={"/checkout"} onClick={hideModal} class="btn es-modal-back es-modal-title">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3203 14.62L9.76031 12.06L12.3203 9.5"
                    stroke="#20AEEA"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20 12.0596H9.83"
                    stroke="#20AEEA"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 4C7.58 4 4 7 4 12C4 17 7.58 20 12 20"
                    stroke="#20AEEA"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Назад
              </Link>
            </div>
            <div class="es-map-modal"></div>
            <button class="btn es-curr-location">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.8028 7.22927C15.9747 3.62341 12.7961 2 10.0039 2C10.0039 2 10.0039 2 9.99606 2C7.21182 2 4.02534 3.61561 3.19717 7.22146C2.27435 11.2488 4.76675 14.6595 7.02253 16.8059C7.85859 17.6019 8.93126 18 10.0039 18C11.0766 18 12.1493 17.6019 12.9775 16.8059C15.2333 14.6595 17.7257 11.2566 16.8028 7.22927ZM10.0039 11.1395C8.63155 11.1395 7.51943 10.039 7.51943 8.68098C7.51943 7.32293 8.63155 6.22244 10.0039 6.22244C11.3763 6.22244 12.4885 7.32293 12.4885 8.68098C12.4885 10.039 11.3763 11.1395 10.0039 11.1395Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MobileMap;
