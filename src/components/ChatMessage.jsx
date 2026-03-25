import "./ChatMessage.css";
import RobotProfileImage from "../assets/robot.png"
import UserProfileImage from "../assets/user.png"
import LoadingSpinner from "../assets/loading-spinner.gif"

function ChatMessage({sender, message, time}){
    return(
        <div className={sender==='user'?"chat-message-user":"chat-message-robot"}>
            {sender==='robot' && (<img src={RobotProfileImage} width="50" />)}
            <div className="message-text-container">
                {message?message:<img className="loading-img" src={LoadingSpinner}/>}
                {time && <div className="message-time">{time}</div>}
            </div>
            {sender==='user' && (<img src={UserProfileImage} width="50" />)}
        </div>
    );
}
export default ChatMessage;