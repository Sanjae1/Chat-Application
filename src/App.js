import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <loginform/>
    return(
        <ChatEngine
        
        height = "100vh"
        projectID= "ecf4426d-6887-4f9b-a9bc-c5ef00801992"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps}/> }

        /> );
}

export default App;