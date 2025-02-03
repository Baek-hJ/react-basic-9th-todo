// src/components/TodoList.jsx

import TodoItem from "./TotoItem";

const TodoList = ({ todos, handleToggleCompleted, handleDelete }) => {
    return (
        // return (소괄호) 안에는 하나의 태그만 들어갈 수 있어서 div로 감싸줌줌
        <>
            {/* ul, li 태그로 시맨틱한 리스트 작성 */}
            <ul>
                {todos.map(({ id, text, completed }) => (
                    <TodoItem 
                        key={id}
                        completed={completed}
                        text={text}
                        handleToggleCompleted={handleToggleCompleted}
                        handleDelete={handleDelete}
                        id={id} 
                    />
                ))}
            </ul>
            </>
    )
}

export default TodoList;
