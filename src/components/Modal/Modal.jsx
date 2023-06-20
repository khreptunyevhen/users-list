const Modal = ({ user, modal, setModal, fullName }) => {
  return (
    <div
      className="absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[440px] bg-white px-10 py-4 rounded-3xl shadow-lg"
      style={{
        display: modal.showModal ? "block" : "none",
      }}
    >
      <img
        className="inline-block rounded-full mb-4 "
        src={user.picture?.thumbnail}
        alt={fullName}
      />
      <div>
        <p className="mb-2 font-bold">
          {user.name.title} {user.name.first} {user.name.last}
        </p>
        <p className="mb-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          incidunt, tempora excepturi labore quo quas officia optio libero
          nostrum numquam. Porro alias nihil perferendis hic molestiae earum
          voluptatem nisi ex.
        </p>
      </div>
      <button
        className="text-white font-bold bg-purple-600 p-1 rounded  duration-200 hover:bg-purple-700"
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
