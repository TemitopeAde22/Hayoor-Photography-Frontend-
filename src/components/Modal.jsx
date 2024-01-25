/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { RiCloseFill } from "react-icons/ri"
import "./Modal.css"
import logo from "../images/HAYOOR.jpg"

function Modal({ setOpenModal }) {
    return (
        <div className="fixed inset-0 text-black bg-black bg-opacity-25 backdrop-blur-[1px] flex items-center justify-center z-50">
            <div className="modalContainer w-full md:w-[30%] rounded-sm shadow-md">
                <div className="titleCloseBtn">
                    <RiCloseFill
                        className="w-5 h-5"
                        onClick={() => {
                            setOpenModal(false)
                        }}
                    />
                </div>
                <div className="flex justify-center">
                    <img
                        className="h-[75px] w-[75px] object-contain"
                        src={logo}
                        alt=""
                    />
                </div>

                <div className="">
                    <h2 className="font-Belanosima font-normal animate-pulse text-black text-[20px] text-center">
                        {" "}
                        Booking submitted successfully!
                    </h2>
                </div>
                <div className="mt-3 px-2">
                    <div className="">
                        <h1 className="text-center font-fira">
                            We'll get in touch with you shortly
                        </h1>

                        <h4 className=" text-end mt-4  font-light text-[15px] italic">
                            Hayoor Photography Team
                        </h4>
                        <p className="text-end  font-light text-[15px] itali">
                            (+2347044862393)
                        </p>
                    </div>
                    <div className="flex items-center gap-x-3 justify-center mt-4">
                        <button
                            className="bg-black text-white mb-5 py-2 mt-6 px-4 rounded-md"
                            onClick={() => {
                                setOpenModal(false)
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
