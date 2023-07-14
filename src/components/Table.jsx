import React from "react";



import "./Table.css";

export const Table=({rows})=>{
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
                {
                    rows.map((row,idx)=>{
                      return <tr key={idx}>
                        <td>{row.page}</td>
                         <td className="expand">{row.description}</td>
                         <td>
                        <span className="label label-live">Live</span>
                    </td>
                      </tr>  
                    })
                }
                <tr>
                    <td>Home</td>
                    <td>This is the main page</td>
                    <td>
                        <span className="label label-live">Live</span>
                    </td>
                    <td>
                    <span className="actions">
                    <button className="delete-btn">Delete</button>
                    <button>Edit</button>
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
                    <button className="delete-btn">Delete</button>
                    <button>Edit</button>
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
                    <button className="delete-btn">Delete</button>
                    <button>Edit</button>
                    </span>
                        
                    </td>
                </tr>
            </tbody>
        </table>
    </dev>;
};