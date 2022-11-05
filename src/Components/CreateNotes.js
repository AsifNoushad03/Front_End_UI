import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function ViewNotes() {


    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const navigate = useNavigate();


    // Create new note

    const handleSubmit = (e) => {
        Axios.post("http://localhost:3001/api/v1/notes",
            {
                title: title,
                body: note,
            }).then(() => alert('Notes created successfully'))
        navigate('/list')
    }

    return (
        <div class=" bg-neutral-200  grid h-screen place-items-center font-sans">
            <form class="bg-neutral-200 shadow-2xl  rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <h1 class="block text-blue-600  text-xl  font-bold mb-2 text-center">Welcome To Notes</h1>
                <div class="mb-4">
                    <label class="block text-blue-600 text-sm font-bold mb-2" for="Title">
                        Title
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"></input>
                </div>
                <div class="mb-4">
                    <label class="block text- text-blue-600 text-sm font-bold mb-2" for="username">
                        Create Notes
                    </label>
                    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  "
                        id="note" type="text"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Notes"></textarea>
                    <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-5">Create</button>
                    <Link to="/list"><button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Notes Are Here</button></Link>
                </div>
            </form>
        </div>
    )

}

export default ViewNotes
