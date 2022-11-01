import {Link} from "react-router-dom";
import AvatarDisplay from "./AvatarDisplay";
import ComfortDisplay from "./ComfortDisplay";
import ProgressDisplay from "./ProgressDisplay";
import DeleteBlock from "./DeleteBlock";
import StatusDisplay from "./StatusDisplay";


const TaskCard = ({color, task}) => {
    return (
        <div className="task-card">
            {/*<Link>*/}
                <div className="task-color"></div>
                <h3>{task.title}</h3>
                <AvatarDisplay/>
                <StatusDisplay/>
                <ComfortDisplay/>
                <ProgressDisplay/>
            {/*</Link>*/}
            <DeleteBlock/>
        </div>

    )
}

export default TaskCard