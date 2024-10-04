import { CompleteIcon } from "../Todoicon/CompleteIcon";
import { DeleteIcon } from "../Todoicon/DeleteIcon";

import "./TodoItems.css";

function TodoItems(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}
export { TodoItems };
