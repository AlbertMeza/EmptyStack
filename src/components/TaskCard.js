import {Link} from "react-router-dom";
import AvatarDisplay from "./AvatarDisplay";
import ComfortDisplay from "./ComfortDisplay";
import ProgressDisplay from "./ProgressDisplay";
import DeleteBlock from "./DeleteBlock";
import StatusDisplay from "./StatusDisplay";


const TaskCard = ({id,task}) => {
    return (
        <div className="task-card">
            <div className="task-color"></div>
            <Link to={`/task/${task.id}`} id="link">
                <h3>{task.title}</h3>
                <AvatarDisplay task={task}/>
                <StatusDisplay status={task.status}/>
                <ComfortDisplay comfort={task.comfort}/>
                <ProgressDisplay progress={task.progress}/>
            </Link>
            <DeleteBlock/>
        </div>

    )
}

export default TaskCard