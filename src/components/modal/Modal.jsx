import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, people, current }) => {
  console.log(people);
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modalBox">
            <ul className="modalItem">
              {people.map(
                (
                  {
                    age,
                    firstName,
                    lastName,
                    id,
                    height,
                    weight,
                    phone,
                    email,
                  },
                  index
                ) =>
                  current === index ? (
                    <li className="modalList" key={id}>
                      <span className="modalName">
                        {firstName} {lastName}
                      </span>
                      <p className="modalInfo">Age: {age}</p>
                      <p className="modalInfo">Height: {height}</p>
                      <p className="modalInfo">Weight: {weight}</p>
                      <p className="modalInfo">Phone number: {phone}</p>
                      <p className="modalInfo">Email: {email}</p>
                      <button className="modalBtn" onClick={onClose}>
                        close
                      </button>
                    </li>
                  ) : (
                    ""
                  )
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
