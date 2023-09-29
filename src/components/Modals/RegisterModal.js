import React from "react";
import { Modal } from "react-bootstrap";
import { closeRegisterModal } from "../../store/actions/modalsAction";
import { useDispatch, useSelector } from "react-redux";

const RegisterModal = () => {
  const { registerModal } = useSelector((state) => state.modalsReducer);
  const dispatch = useDispatch();

  const hideModal = () => {
    dispatch(closeRegisterModal());
  };
  return (
    <Modal
      show={registerModal}
      onHide={hideModal}
      animation={false}
      class="modal fade es-modal-center"
      id="authModal"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <button
              aria-label="Close"
              class="close"
              data-dismiss="modal"
              type="button"
              onClick={hideModal}
            >
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
            <div class="modal-logo">
              <img src={require("../../assets/img/logo.png")} alt="" />
            </div>
            <div class="form-group">
              <label class="es-form-label">Выберите пол</label>
              <div class="es-gender-options">
                <label class="radio-label">
                  <input type="radio" name="gender" value="male" /> Мужской
                </label>
                <label class="radio-label">
                  <input type="radio" name="gender" value="female" /> Женский
                </label>
              </div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Ваше имя" />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Дата рождения"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                data-plugin="phone-mask"
                placeholder="Ваш номер"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Введите код"
              />
            </div>
            <a href="#" class="btn es-btn-dark w-100">
              Далее
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;
