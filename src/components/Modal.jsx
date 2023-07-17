import React,{useState} from "react";

import "./Modal.css";

export const Modal=({closerModal,onSubmit})=>{
    const[formState,setFormState]=useState({
        page:"",
        description:"",
        status:"live"
    });
    const [errors,setErrors]=useState("")

    const validateForm=()=>{
        if(formState.page && formState.description ** formState.status){
           setErrors("")
            return true;
        } else{
            let errorFields=[];
            for(const [key,value] of Object.entries(formState)){
                if(!value){
                    errorFields(key)
                }
            }
            setErrors(errorFields.join(", "));
            return false;
        }
    };

    

    const handleChange=(e)=>{
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit =(e) =>{
        e.preventDefault();

        if(!validateForm()) return;

        onSubmit(formState);

        closerModal();
    };

    return <div className="modal-container" 
    onClick={(e)=>{
        if(e.target.className==="modal-container") closerModal();
    }}
> 
        <div className="modal" >
            <form>
                <div className="form-group">
                    <label htmlFor="page">Page</label>
                    <input name="page" value={formState.page} 
                    onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" value={formState.description} 
                    onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select name="status" value={formState.status} 
                    onChange={handleChange}>

                        <option value="Live">Live</option>
                        <option value="draft">Draft</option>
                        <option value="error">Error</option>
                    </select>
                </div>
                {errors &&<div>{`Please include: ${errors}`}</div>}
                <button type="submit" className="btn" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>;
};