import { useState } from 'react';
import './App.css';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';

function App(){
        const [chatMessages,setChatMessages] = useState(JSON.parse(localStorage.getItem('chat-messages')) || [{
            sender:'user' ,
            message:'hello',
            time:'7:38 pm',
            id:'id1'
          },{
            sender:'robot' ,
            message:'hello, how are you',
            time:'7:40 pm',
            id:'id2'
          },{
            sender:'user' ,
            message:'i m great',
            time:'7:52 pm',
            id:'id3'
          },{
            sender:'robot' ,
            message:'how can i help you',
            time:'8:01 pm',
            id:'id4'
          }]);
        return(
          <div className="app-container">
            <ChatMessages
              chatMessages={chatMessages}
            />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }
export default App
