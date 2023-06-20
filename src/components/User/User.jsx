import { useState } from "react";
import Modal from "../Modal/Modal";

const User = ({ user }) => {
  const [modal, setModal] = useState({
    showModal: false,
  });

  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

  return (
    <div className="flex flex-col items-stretch w-[100px] text-center text-sm p-3 rounded hover:shadow">
      <img
        className="inline-block rounded-full mb-4"
        src={user.picture?.thumbnail}
        alt={fullName}
      />
      <div className="flex-1">
        <p className="mb-2">{user.name.title}</p>
        <p className="mb-2">{user.name.first}</p>
        <p className="mb-2">{user.name.last}</p>
      </div>
      <button
        className="text-white font-bold bg-purple-600 p-1 rounded  duration-200 hover:bg-purple-700"
        onClick={() => {
          setModal(() => {
            return {
              ...modal,
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
