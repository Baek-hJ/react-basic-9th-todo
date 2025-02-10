import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDashboard from "./TodoDashboard";
import styled from "styled-components";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
];


const TodoContainer = () => {

  // 현재 상태 값(todos)을 SAMPLE_TODOS로 초기화하고 상태를 업데이트 할 때 setTodos를 사용
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  // 새로운 투두의 입력을 상태로 관리
  const [todoText, setTodoText] = useState(""); // 상태 변수 이름을 수정

  // 인풋에 입력 또는 공백이면 실행시키지 않는 함수
  const handleSubmit = (e) => {
    e.preventDefault();

    // trim() todoList 앞뒤 공백을 제거하고, 비어있으면 아무 것도 하지 않음
    if (!todoText.trim()) {
      return;
    }
    // 입력된 인풋의 내용을 리스트에 추가가
    setTodos([
      { id: crypto.randomUUID(), text: todoText, completed: false },
      ...todos,
    ]);

    setTodoText("");
  };

  // 인풋의 value를 가져와서 todoText의 상태를 변경시켜주는 함수수
  const handleChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const handleToggleCompleted = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    setTodos(updateTodos);
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (

    <TodoContainerWrapper>
      <TodoDashboard />

      <TodoList
        todos={todos}
        handleToggleCompleted={handleToggleCompleted}
        handleDelete={handleDelete}
      />

      <TodoForm
        handleSubmit={handleSubmit}
        todoText={todoText}
        handleChangeTodoText={handleChangeTodoText}
      />

    </TodoContainerWrapper>
  );
};

const TodoContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export default TodoContainer;
