import React, { useRef, useState, useEffect } from 'react';
import '../styles/login.css';



function LoginScreen(props) {

    const [ state, setState ] = useState({ message: "", name: "" })
	const [ login, setChat ] = useState([])

    const [users,setUsers]=useState([])

    const fetchUsers=async()=>{
        const response=props.firestore.collection('users');
        const data=await response.get();
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
      }, [])

      const checkLogin = () =>{
        console.log("Users",users);
      }

    //console.log(props.auth);
    return (
        <div className="wrapper">
            <div className="waves">
                <div className="container" className="LoginPage">
                    <h1>Welcome</h1>
                    <form className="form">
                        <input 
                            type="text" 
                            placeholder="Username" 
                            onChange={event => this.setState({username: event.target.value})}/>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            onChange={event => this.setState({password: event.target.value})}/>
                        <button 
                            type="submit" 
                            id="login-button" 
                            onClick={checkLogin()}>
                                Login
                        </button>
                    </form>
                </div>
                <ul className="bg-bubbles">
                    <li className="square1"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
    
}

export default LoginScreen;