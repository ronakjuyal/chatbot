import { useState } from "react";
import  { Chatbot }  from 'supersimpledev';
import "./ChatInput.css";
import dayjs, { Dayjs } from "dayjs"

function ChatInput({chatMessages,setChatMessages}){
    const [inputText, setInputText] = useState('');
    function saveInputText(event){
        setInputText(event.target.value);
    }
    // function sendAndStore(){
    //     sendMessage();

    // }
    async function sendMessage(){
        let newChatArray=[...chatMessages,{
                                            sender:'user', 
                                            message:inputText,
                                            time: dayjs().format('h:mma'),
                                            id:crypto.randomUUID()
                                        },{
                                            sender:'robot', 
                                            message:'',
                                            time:'', 
                                            id:crypto.randomUUID()
                                        }
        ];
        setChatMessages(newChatArray);
        setInputText('');                                   
        const response = await Chatbot.getResponseAsync(inputText);
        newChatArray=[...newChatArray.slice(0,newChatArray.length-1),{
                                                                        sender:'robot', 
                                                                        message:response, 
                                                                        time: dayjs().format('h:mma'),
                                                                        id:crypto.randomUUID()
                                                                    }];
        setChatMessages(newChatArray);
        localStorage.setItem('chat-messages',JSON.stringify(newChatArray))
    }
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
        sendMessage();
        }
        else if(event.key === 'Escape'){
        setInputText('');
        }
    }
    return(
        <div className="chat-input-container">
        <input  type="text" 
                placeholder="Send a message to ChatBot" 
                onChange={saveInputText}
                onKeyDown={handleKeyDown}
                value={inputText}
                className="chat-input"
                />
        <button onClick={sendMessage} className="send-button">Send</button>
        </div>
    );
}

export default ChatInput;
    