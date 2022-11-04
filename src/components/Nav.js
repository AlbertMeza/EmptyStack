import {useNavigate} from "react-router-dom";
{/* import blankProfile from '../images/blank-profile.png' */}

const Nav = () => {

    const navigate = useNavigate()
    const isInstructor = document.cookie
                        .split(';')[2]
                        .split('=')[1]
    const userHome = (isInstructor) ? '/instructor/dashboard' : '/student/dashboard'

    return (
        <nav>
            <div className="logo-container">
                {/* <img src={blankProfile} alt="logo"/> */}
            </div>
            <div className="controls-container">
                <div className="icon" onClick={() => navigate('/task')}>＋</div>
                <div className="icon" onClick={() => {
                    navigate(userHome)
                    }}>⌂</div>
                <div className="icon" onClick={() => navigate('/')}>⮐</div>
            </div>
        </nav>
    )
}

export default Nav