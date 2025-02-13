import styled from "styled-components";


const TodoItem = ({completed, text, toggleCompleted, deleteTodo, id
}) => {
    return (
        <TodoItemWrapper>
            <TodoItemText $completed={completed}>{text}</TodoItemText>

            <TodoItemSection>
                <ActionButton 
                    onClick={() => toggleCompleted(id)} 
                    $bgcolor={completed ? '#242424' : '#582BE6'}
                >
                    {completed ? "취소하기" : "완료하기"}
                </ActionButton>

                <ActionButton onClick={() => deleteTodo(id)} $bgcolor='#ff4033'>
                    삭제하기
                </ActionButton>
            </TodoItemSection>
        </TodoItemWrapper>
    )
};

const TodoItemWrapper = styled.li`
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 1.25rem;
    border-radius: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    justify-content: space-between;
    align-items: center;
`;

const TodoItemText = styled.p`
    text-decoration: ${({ completed }) => 
    (completed ? "line-through" : "none")};
    color: ${({ $completed}) => ($completed ? '#a0a0a0' : 'black')};
`;

const TodoItemSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

const ActionButton = styled.button`
    color: #ffffff;
    background-color: ${({$bgcolor = '#e6582b'}) => $bgcolor};
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
    opacity: 0.8;
    }
`;
export default TodoItem;