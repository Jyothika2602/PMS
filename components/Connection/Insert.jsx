import axios from 'axios';
import React from 'react';

export default function Insert() {
    function saveData() {
        var id = document.getElementsByName("id")[0].value;
        var username = document.getElementsByName("username")[0].value;
        var password = document.getElementsByName("password")[0].value;

        axios.post("http://localhost:8080/api/register", {
            "id": parseInt(id),
            "username": username,
            "password": password
        }).then((res) => {
            alert(res.data);
            console.log(res.data);
        });
    }

    return (
        <div>
            ID: <input type="text" name="id" />
            <br/><br/>
            Username: <input type="text" name="username" />
            <br/><br/>
            Password: <input type="text" name="password" />
            <br/><br/>
            <button type="submit" onClick={saveData}> Save </button>
        </div>
    );
}