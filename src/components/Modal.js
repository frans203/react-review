const Modal = (props) => {
  return (
    <div className="modal">
      <h1>Are you Sure?</h1>
      <button className="btn" onClick={props.hideModal}>
        OK
      </button>
      <button className="btn btn--alt" onClick={props.hideModal}>
        CANCEL
      </button>
    </div>
  );
};

export default Modal;
