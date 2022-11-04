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
            </Link>
            <div className="image-card">
                <AvatarDisplay task={task}/>
            </div>
            <Link to={`/task/${task.id}`} id="link">
                <StatusDisplay status={task.status}/>
                <ProgressDisplay progress={task.progress}/>
            </Link>
            <Link to={`/taskComfort`} id="comfort-link">
                <div className="comfort-task">
                <ComfortDisplay comfort={task.comfort}/>
                </div>
            </Link>
            <DeleteBlock/>
        </div>

    )
}

export default TaskCard