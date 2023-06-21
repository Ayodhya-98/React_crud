import React from "react";



import "./Table.css";

export const Table=()=>{
    return<dev className="table-wrapper">
        <table className="table">
            <thead>
                <tr>
                    <th>Page</th>
                    <th className="expand">Description</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Home</td>
                    <td>This is the main page</td>
                    <td>
                        <span className="label label-live">Live</span>
                    </td>
                    <td>
                    <span className="actions">
                    <button>Edit</button>
                    <button>Delete</button>
                        </span>
                    </td>
                </tr>
                
                <tr>
                    <td>Page 2</td>
                    <td>This is the second page</td>
                    <td>
                        <span className="label label-draft">Draft</span>
                    </td>
                    <td>
                    <span className="actions">
                    <button>Edit</button>
                    <button>Delete</button>
                    </span>
                        
                    </td>
                </tr>

                <tr>
                    <td>Page 3</td>
                    <td>This is the third page</td>
                    <td>
                        <span className="label label-draft">Draft</span>
                    </td>
                    <td>
                    <span className="actions">
                    <button>Edit</button>
                    <button>Delete</button>
                    </span>
                        
                    </td>
                </tr>
            </tbody>
        </table>
    </dev>;
};