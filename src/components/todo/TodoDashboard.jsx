import { ClipboardCheck, Monitor, Video } from "lucide-react";
import styled from "styled-components"

const TodoDashboard = ({all = 0, completed = 0, pending = 0}) => {
    return (
        <TodoDashboardSection>

        <TodoDashboardHeader>Quick Access</TodoDashboardHeader>
        
        <TodoDashboardCardList>
            <TodoDashboardCardWrapper $flex={2}>
                <TodoDashboardCard>
                    <div><ClipboardCheck /></div>
                    <TodoDashboardCardContent>
                        {all} <br /> <span> All Tasks </span>
                    </TodoDashboardCardContent>
                </TodoDashboardCard>
            </TodoDashboardCardWrapper>

            <TodoDashboardCardWrapper $flex={1}> 
                <TodoDashboardCard style={{ backgroundColor: "#582be6" }}>
                    <div><Monitor /></div>
                    <TodoDashboardCardContent>
                        {completed} <br /> <span> Completed Tasks </span>
                    </TodoDashboardCardContent>
                </TodoDashboardCard>
            </TodoDashboardCardWrapper>

            <TodoDashboardCardWrapper $flex={1}>
                <TodoDashboardCard style={{ backgroundColor: "#242424" }}>
                    <div><Video /></div>
                    <TodoDashboardCardContent>
                        {pending} <br /> <span> Pending Tasks </span>
                    </TodoDashboardCardContent>
                </TodoDashboardCard>
            </TodoDashboardCardWrapper>

        </TodoDashboardCardList>
        </TodoDashboardSection>
    )
};

const TodoDashboardSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const TodoDashboardHeader = styled.h2`
    font-size: 1.srem;
    font-weight: bold;
`;

const TodoDashboardCardList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

const TodoDashboardCardWrapper = styled.li`
    flex: ${(props) => props.$flex};
`;

const TodoDashboardCard = styled.button`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 184px;
    background-color: #e6582b;
    justify-content: space-between;
    color: white;
    padding: 1.2rem;
    border-radius: 1rem;
    cursor: pointer;
`;

const TodoDashboardCardContent = styled.p`
    font-size: 1.40rem;
    font-weight: 300;

    span {
    font-size: 0.8rem;
    font-weight: 200;
    
    }
`;

export default TodoDashboard;