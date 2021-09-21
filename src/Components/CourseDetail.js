import React,{useState}from 'react'
import { Button } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

const CourseDetail = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [domain,setDomain]=useState('');
    const history=useHistory();

    async function signup(){
        let course={email,password,domain}
        console.log(course)
      let coursedetail =await fetch('http://65.1.150.227:5000/api/Users/login',{
        method:'POST',
        body:JSON.stringify(course),
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
        
    })
    coursedetail= await coursedetail.json()
    console.log("course detail", coursedetail)
    history.push("/")
    }

    return (
        <div className="col-sm-6 offset-sm-3" style={{backgroundColor:'skyblue',height:'400px',marginTop :'40px',padding:'12px 28px'}}>
            <h1 style={{textAlign:'center'}}>Add Course </h1>
            <input type="text"className="form-control"value={email} placeholder="Email"onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <input type="text"className="form-control"value={password} placeholder="Password"onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <input type="text"className="form-control"value={domain} placeholder="Domain"onChange={(e)=>setDomain(e.target.value)}/>
            <br/>   
            <button onClick={signup}className="btn btn-primary" >Submit Details</button>
        </div>
    )
}

export default CourseDetail
