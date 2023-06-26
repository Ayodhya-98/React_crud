import React from "react";

import "./Modal.css";

export const Modal=()=>{
    return <div className="modal-container"> 
        <div className="modal">
            <form>
                <div>
                    <label htmlFor="page">Page</label>
                    <input name="page"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description"/>
                </div>
                <div>
                    <label htmlFor="status">Status</label>
                    <select name="status">
                        <option value="Live">Live</option>
                    </select>
                </div>
            </form>
        </div>
    </div>;
};