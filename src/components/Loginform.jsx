import {useState} from 'react'
import axios from 'axios'

const Loginform = () => {

    const [username, setUsername] = useState('');
    const [username, setPassword] = useState('');
    const [error, setError] =useState('');

const handleSubmit =(e) => {
    e.preventDefault(); //prevent Browser refresh

    const authObject = {'Project-ID': "ecf4426d-6887-4f9b-a9bc-c5ef00801992", 'User-Name': username, 'User-Secret': password }

    try {
        // username / password => chatengine -> give messages
        await axios.get('https://chatengine.io/chats',{ headers: authObject });
        
        // works out you are logged in 

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        window.location.reload();
          
    } catch (error) {
        // error -> try with an ew username .. 
        setError('Ooop , wrong credentials.')
    }

    
    
    


}    

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Chat Application</h1>
                <form onsubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  className="input"  placeholder="username" required  />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  className="input"  placeholder="password" required  />

                    <div>
                        <button type = "submit" className="btn btn-">

                        <span>Start Chatting</span>

                        </button>
                    
                    
                    </div>

                    <h2 className="error">  {error} </h2>


                 </form>
            
            
            </div>

        </div>
    )

}


export default Loginform 