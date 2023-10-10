import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Formadd from "./Formadd";
import { removeTodo, updateStatus, editTodo, setTodos } from "./redux/todo";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("isLoggedIn");
  useEffect(() => {
    token === "false" ? navigate("/") : console.log("welcome");
  }, []);

  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleDone = (id) => {
    dispatch(updateStatus(id));
  };

  const todos = useSelector((state) => state.todo.list);

  const [editTodoId, setEditTodoId] = useState("");
  const [editTodoText, setEditTodoText] = useState("");

  const handleEdit = (id, name) => {
    setEditTodoId(id);
    setEditTodoText(name);
  };

  const handleSaveEdit = () => {
    if (editTodoId && editTodoText) {
      dispatch(editTodo({ id: editTodoId, name: editTodoText }));
      setEditTodoId("");
      setEditTodoText("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSaveEdit();
    }
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      dispatch(setTodos(JSON.parse(storedTodos)));
     }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1 className="titleinterface">This is My Todo App</h1>
      <Formadd />
      <ul className="todo-box">
        {todos.map((todo) => (
          <li key={todo.id} className="todolabel">
            {editTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editTodoText}
                  onChange={(e) => setEditTodoText(e.target.value)}
                  className="label-edit"
                  onKeyPress={handleKeyPress}
                />
                <button
                  onClick={() => handleRemove(todo.id)}
                  className="delete-btn"
                >
                  &#10006;
                </button>
              </>
            ) : (
              <>
                <span>{todo.name}</span>
                <button
                  onClick={() => handleRemove(todo.id)}
                  className="delete-btn"
                >
                  &#10006;
                </button>
                {!todo.isDone && (
                  <>
                    <button
                      onClick={() => handleToggleDone(todo.id)}
                      className="done-symbol"
                    >
                      &#10004;
                    </button>
                    <button
                      onClick={() => handleEdit(todo.id, todo.name)}
                      className="edit-symbole"
                    >
                      &#9999;&#xFE0F;
                    </button>
                  </>
                )}
                {todo.isDone && <span className="done">Done !</span>}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
