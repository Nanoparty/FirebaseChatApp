import React, { useRef, useState, useEffect } from 'react';
//import './login.css';

import LoginScreen from './components/LoginScreen';
import firestore from './components/FirebaseConfig';

//import { useAuthState } from 'react-firebase-hooks/auth';
//import { useCollectionData } from 'react-firebase-hooks/firestore';

function App() {
  
  const [users,setUsers]=useState([])

  const fetchUsers=async()=>{
    const response=firestore.collection('users');
    const data=await response.get();
    setUsers(data);

    // data.docs.forEach(item=>{
    //   console.log("ITEM:",item.data());
    //   console.log("OldUsers", users);
    //   const newUsers = users.concat(item.data());
    //   console.log("NewUsers",newUsers);
    //   setUsers(newUsers);
    // })

    //console.log(users)
  }

  const loggedIn = () =>{
    
  }

  // useEffect(() => {
  //   fetchUsers();
  // }, [])

  const printUsers = () =>{
    console.log(users);
  }


  return (

    // <div>
    //   <button onClick={printUsers}>Pull Data</button>
    //   {
        
    //   }
    //   {
    //     users && users.map(user=>{

    //       return(
    //         <div className="blog-container" key={user.data().firstname}>
    //           <h4>{user.data().username}</h4>
    //           <p>{user.data().password}</p>
    //         </div>
    //       )
    //     })
    //   }
    // </div>

     <>
       {<LoginScreen firestore={firestore} />}
     </>
      // <>
      //   {<GetData />}
      // </>
  );
}

function GetData(){
  return (
    <div>
      <button>pull data</button>
    </div>
  )
}

function GetFirebaseData() {
  const [users,setUsers]=useState([])
  const fetchBlogs=async()=>{
    const response=firestore.collection('users');
    const data=await response.get();
    data.docs.forEach(item=>{
     setUsers([...users,item.data()])
    })
  }
  useEffect(() => {
    fetchBlogs();
  }, [])
  return (
    <div >
      {
        users && users.map(user=>{
          return(
            <div className="blog-container">
              <h4>{user.username}</h4>
              <p>{user.password}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;