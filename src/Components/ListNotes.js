import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

function ListItem() {


    const [notes, setNotes] = useState([])
    const [showModal, setShowModal] = React.useState(false);


    useEffect(() => {
        //View note
        Axios.get("http://localhost:3001/api/v1/notes").then((response) => {
            console.log(response.data);
            setNotes(response.data)
        })
    }, []);

    const deletNotes = (id) => {
        //Delete action provide a dialog box for confirmation
        Axios.delete(`http://localhost:3001/api/v1/notes/${id}`).then(() => {
            setNotes(notes.filter((note) => {
                return note._id !== id;
            }))

        })
    }
    return (
        <div>
            <div class=" h-screen bg-neutral-200 grid gap-3 grid-cols-3 grid-rows-3  font-sans ">
                {notes.map((note) => {

                    return (
                        <div class="block p-5 rounded-lg shadow-lg bg-white max-w-sm container mx-auto  mt-5">
                            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{note.title}</h5>
                            <p class="text-gray-700 text-base mb-4">
                                {note.body}
                            </p>
                            <Link to="/"><button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-5">Back</button></Link>

                            {/* Delete Dialog Box */}
                            <button
                                class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                type="button"
                                onClick={() => setShowModal(true)}
                            >
                                Delete
                            </button>
                            {showModal ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            {/*content*/}
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                {/*header*/}
                                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                    <h3 className="text-3xl font-semibold">
                                                        Delete Confirmation
                                                    </h3>
                                                    <button
                                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                            ×
                                                        </span>
                                                    </button>
                                                </div>
                                                {/*body*/}
                                                <div className="relative p-6 flex-auto">
                                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                                        Are You Wanted To Delete
                                                    </p>
                                                </div>
                                                {/*footer*/}
                                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                    <button
                                                        className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Close
                                                    </button>
                                                    <button
                                                        class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="button"
                                                        onClick={() => deletNotes(note._id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}
                            {/* */}

                        </div>
                    )
                    
                })}
            </div>
        </div>
    )
}

export default ListItem
