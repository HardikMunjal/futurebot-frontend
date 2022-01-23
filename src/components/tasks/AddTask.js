import React, { useState } from "react";
export default function AddTasks() {

    let taskObject = { name: "", frequency: 0, date: new Date() };

    const [name, setName] = useState("");
    console.log(useState(""))

    function handleChange(e) {
        console.log(e)
    }
    return (
        <div>
            <form>
                <label>
                    Task Name:
                    <input type="text" name="name" value="name" onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}