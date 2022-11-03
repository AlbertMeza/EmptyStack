import blankAvatar from '../images/blank-task.jpeg'

const AvatarDisplay = ({task}) => {
    return (
        <div className="avatar-container">
            <div className="img-container">
                <img src={task.avatar ? task.avatar : blankAvatar} alt={'photo of ' + task.owner}/>
            </div>
        </div>
    )
}

export default AvatarDisplay