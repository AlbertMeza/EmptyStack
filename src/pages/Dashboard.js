import TaskCard from "../components/TaskCard";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>My Project</h1>
            <div className="ticket-container">
                <TaskCard></TaskCard>
            </div>
        </div>
    )
}

export default Dashboard