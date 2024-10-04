import React from "react";
import { TodoIcon } from "./index";

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "green" : "gray"}
      onclick={onComplete}
    />
  );
}

export { CompleteIcon };
