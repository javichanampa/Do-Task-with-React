import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <div className="Loadingtodo-container">
      <span className="Loadingtodo-completeIcon"></span>
      <p className="LoadingTodo-text"></p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
}

export { TodosLoading };
