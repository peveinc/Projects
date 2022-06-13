import React, { useState } from 'react'
  import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const NewUser= () => {
    const [username, setName]=useState('')
    const [email, setEmail] =useState('')

    const notify=(message)=>{
        toast.success(message)
    }
    const notifyError=(message)=>{
        toast.error(message)
    }
    const handlesubmit=async(e)=>{
        try{
            e.preventDefault()
            await fetch("/add-user",{
                method: 'POST',
                mode:'cors',
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    username:username,
                    email:email
                })
            })
                .then((response)=>{
                    if(response.status===200){
                        const res= "Data saved successfully."
                        notify(res)
                    }
                })     
        }
        catch(err){
            notifyError(err.response.message)
        }
    }

  return (
    <div>
        <div className='card'>
            <div className='card-header'>
                <strong>Details</strong>
                <hr/>
            </div>
            <div className='card-body'>
                <form>
                    <input type="text" value={username} placeholder="Username..."
                        className='form-control mb-4' 
                        onChange={(e)=>setName(e.target.value)} 
                        required/>
                    <input type ="email" value={email} 
                        className='form-control mb-4' placeholder="Email..."
                        onChange={(e)=>setEmail(e.target.value)} 
                        required/>
                    <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Add</button>
                </form>
            </div>
        </div>





    </div>
  )
}

export default  NewUser




