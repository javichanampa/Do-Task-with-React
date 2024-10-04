import "./CreateTodoBotton.css";

function CreateTodoBotton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoBotton"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoBotton };
