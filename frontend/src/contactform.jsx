import { useState } from "react";

const contactform = ({addcontact,updatecontact,updatecallback})=>{
    const [contact,setContact] = useState({
        id:null,
        name:"",
        email:"",
        phone:""
    })
    const onChange = (e)=>{
        setContact({...contact,[e.target.name]:e.target.value})
    }
    const onSubmit = async(e)=>{
        e.preventDefault();
        if(contact.id){
            updatecallback(contact);
        }
        else{
            addcontact(contact);
        }
        setContact({id:null,name:"",email:"",phone:""})
    }
    return(
        <div>
            <h1>Contact Form</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" value={contact.name} onChange={onChange} placeholder="Enter Name"/>
                <input type="email" name="email" value={contact.email} onChange={onChange} placeholder="Enter Email"/>
                <input type="text" name="phone" value={contact.phone} onChange={onChange} placeholder="Enter Phone"/>
                <input type="submit" value="Add Contact"/>
            </form>
        </div>
    )
}

export default contactform;