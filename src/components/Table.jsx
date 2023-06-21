import React from "react";

import{BsFillTrashFill,BsFillPencilFill} from "rect-icons/bs"

import "./Table.css";

export const Table=()=>{
    return<dev>
        <table>
            <thead>
                <tr>
                    <th>Page</th>
                    <th>description</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Home</td>
                    <td>This is the main page</td>
                    <td>
                        <span>Live</span>
                    </td>
                    <td>
                        <span>
                            <BsFillTrashFill/>
                            <BsFillPencilFill/>

                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </dev>;
};