// src/components/TodoList.jsx

import { useState } from "react";

const SAMPLE_TODOS = [
    { id: 1, text: "Buy milk" },
    { id: 2, text: "Clean the house" },
    { id: 3, text: "Go for a run" },
    { id: 4, text: "Finish homework" },
    { id: 5, text: "Call mom" },
    { id: 6, text: "Buy groceries" },
    { id: 7, text: "Walk the dog" },
    { id: 8, text: "Read a book" },
    { id: 9, text: "Do laundry" },
    { id: 10, text: "Write code" },
];

const TodoList = () => {
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
        setTodos([{id : crypto.randomUUID(), text : todoText}, ...todos]);

        setTodoText("");
    };

    // 인풋의 value를 가져와서 todoText의 상태를 변경시켜주는 함수수
    const hendleChangeTodoText = (e) => {
        setTodoText(e.target.value);
    };

    return (
        // return (소괄호) 안에는 하나의 태그만 들어갈 수 있어서 div로 감싸줌줌
        <div> 
            <form onSubmit={handleSubmit}>
                <input type="text" value={todoText} onChange={hendleChangeTodoText}/>
                <button type="submit">제출하기</button>
            </form>
        {/* ul, li 태그로 시맨틱한 리스트 작성 */}
            <ul>
                {todos.map(({ id, text }) => (
                    <li key={id}>{text}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
