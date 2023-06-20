const Modal = ({ user, modal, setModal, fullName }) => {
  return (
    <div
      style={{
        display: modal.showModal ? "block" : "none",
      }}
    >
      <img src={user.picture?.thumbnail} alt={fullName} />
      <div>
        <p>{user.name.title}</p>
        <p>{user.name.first}</p>
        <p>{user.name.last}</p>
      </div>
      <button
        onClick={() => {
          setModal(() => {
            return {
              showModal: false,
            };
          });
        }}
      >
        Close
      </button>
    </div>
  );
};

export default Modal;
