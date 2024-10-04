import { ReactComponent as CheckSVG } from "./green-check.svg";
import { ReactComponent as DeleteSVG } from "./close-red.svg";
import "./Todoicon.css";

const IconTypes = {
  check: (color) => <CheckSVG className="icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="icon-svg" fill={color} />,
};
function TodoIcon({ type, color, onclick }) {
  return (
    <span className={`icon-container icon-container-${type}`}
          onClick={onclick}
    >
      {IconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
