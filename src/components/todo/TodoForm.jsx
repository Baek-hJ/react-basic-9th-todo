import { useState } from "react";
import styled from "styled-components";
import { ActionButton } from "./TotoItem";

const TodoForm = ({ addTodos }) => {
    // 새로운 투두의 입력을 상태로 관리
    const [todoText, setTodoText] = useState(""); // 상태 변수 이름을 수정


    // 인풋의 value를 가져와서 todoText의 상태를 변경시켜주는 함수수
    const handleChangeTodoText = (e) => {
        setTodoText(e.target.value);
    };

    // 인풋에 입력 또는 공백이면 실행시키지 않는 함수
    const handleSubmit = (e) => {
        e.preventDefault();

        // trim() todoList 앞뒤 공백을 제거하고, 비어있으면 아무 것도 하지 않음
        if (!todoText.trim()) {
            return;
        }
        addTodos(todoText);

        setTodoText("");
    };

    return (
        <TodoFormWrapper onSubmit={handleSubmit}>
            <TodoFormInput 
            type="text" 
            value={todoText} 
            onChange={handleChangeTodoText} 
            placeholder="할 일을 입력하세요"
            />
            <SubmitButton type="submit" $bgColor="#582be6">
                제출하기
            </SubmitButton>
        </TodoFormWrapper>
    )
};

const TodoFormWrapper = styled.form`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`;

const TodoFormInput = styled.input`
    padding: 0%.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    background-color: white;
    flex: 8;

    &::placeholder {
        color: #aaa;

    }

    &:focus {
        border-color: #582be6;
        outline: none;
    }
`;

const SubmitButton = styled(ActionButton)`
    flex: 1;
    text-align: center;
`;

export default TodoForm;