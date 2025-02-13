// src/components/TodoList.jsx

import styled from "styled-components";
import TodoItem from "./TotoItem";


const TodoList = ({ todos, toggleTodoCompleted, deletTodo }) => {
    return (
        // return (소괄호) 안에는 하나의 태그만 들어갈 수 있어서 div로 감싸줌줌
        <TodoListSection>
            <TodoListHeater>Tasks</TodoListHeater>
            {/* ul, li 태그로 시맨틱한 리스트 작성 */}
            <TodoListContent>
                {todos.map(({ id, text, completed }) => (
                    <TodoItem
                        key={id}
                        completed={completed}
                        text={text}
                        toggleTodoCompleted={toggleTodoCompleted}
                        deletTodo={deletTodo}
                        id={id}
                    />
                ))}
            </TodoListContent>
        </TodoListSection>
    )
};

const TodoListSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const TodoListHeater = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
`;

const TodoListContent = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export default TodoList;
