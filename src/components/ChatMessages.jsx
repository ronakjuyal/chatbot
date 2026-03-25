import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import "./ChatMessages.css";
function ChatMessages({chatMessages}){
    const chatMessagesRef=useRef(null);
    useEffect(()=>{
        const containerEle=chatMessagesRef.current;
        if(containerEle){
        containerEle.scrollTop=containerEle.scrollHeight;
        }
    },[chatMessages]);
    return (
        <div className="chat-messages-container" ref={chatMessagesRef}>
        {chatMessages.map((chatMessage)=>{
        return (
            <ChatMessage
            sender={chatMessage.sender}
            message={chatMessage.message}
            time={chatMessage.time}
            key={chatMessage.id}
            />
        );
        })}
        </div>
    );  
}
export default ChatMessages;