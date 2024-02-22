import { useState,useEffect } from "react";
import ContactList from "./contactlist";
import ContactForm from "./contactform";
import "./App.css";

function App() {
  const [contacts,setContacts] = useState([]);
  const [updateContact,setUpdateContact] = useState(null);
  const getContacts = async()=>{
    try{
      const response = await fetch("http://localhost:5000/contacts");
      const jsonData = await response.json();
      setContacts(jsonData);
    }
    catch(error){
      alert(error);
    }
  }
  useEffect(()=>{
    getContacts();
  },[])
  const addContact = async(contact)=>{
    try{
      const options = {
        method : "POST",
        headers : {
          "Content-Type":"application/json"
        },
        body : JSON.stringify(contact)
      }
      const response = await fetch("http://localhost:5000/contacts",options);
      const data = await response.json();
      setContacts([...contacts,data]);
    }
    catch(error){
      alert(error);
    }
  }
  
  const updateContactHandler = (contact)=>{
    setUpdateContact(contact);
  }
  
  return (
    <div className="App">
      <ContactForm addcontact={addContact} updatecontact={updateContact} updatecallback={updateContactCallback}/>
      
    </div>
  );
}

export default App;