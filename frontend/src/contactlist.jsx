import React  from "react";

const contactlist = ({contacts,updatecontact,updatecallback})=>{
    const onDelete = async(id) =>{
        try{
            const options = {
                method : "DELETE"
            }
            //will be updated
        }
        catch(error){
            alert(error);
        }
    }
    return(
        <div>
            <h1>Contact List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contact)=>{
                            return(
                                <tr key={contact.id}>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phone}</td>
                                    <td>
                                        <button onClick={()=>updatecontact(contact)}>Edit</button>
                                        <button onClick={()=>onDelete(contact.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}

export default contactlist;