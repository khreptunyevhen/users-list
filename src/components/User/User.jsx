import { useState } from "react";
import Modal from "../Modal/Modal";

const User = ({ user }) => {
  const [modal, setModal] = useState({
    showModal: false,
  });

  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

  return (
    <div>
      <img src={user.picture?.thumbnail} alt={fullName} />
      <div>
        <p>{user.name.title}</p>
        <p>{user.name.first}</p>
        <p>{user.name.last}</p>
      </div>
      <button
        onClick={() => {
          console.log("click");
          setModal(() => {
            return {
              showModal: true,
            };
          });
        }}
      >
        More info
      </button>
      <Modal
        user={user}
        modal={modal}
        fullName={fullName}
        setModal={setModal}
      />
    </div>
  );
};

export default User;
