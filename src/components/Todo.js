import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
const Todo = (props) => {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };
  return (
    <React.Fragment>
      {showModal && <Modal hideModal={hideModalHandler} />}
      {showModal && <Backdrop hideModal={hideModalHandler} />}
      <div className="card">
        <h1>{props.title}</h1>
        <div className="actions">
          <button className="btn" onClick={showModalHandler}>
            Delete
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Todo;
