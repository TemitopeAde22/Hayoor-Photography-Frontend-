import { BiCaretRight } from "react-icons/bi"
import { TermsAndConditions } from "../others/values"
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md"
import { useState } from "react"



function Terms() {
        const [openCatalog, setOpenCatalog] = useState(null)

        const toggleDropdown = (index) => {
            if (openCatalog === index) {
                setOpenCatalog(null)
            } else {
                setOpenCatalog(index)
            }
        }
    return (
        <div>
            <div className="py-2 px-3 lg:px-1">
                {/* <h1 className=" font-Belanosima border-black  border-2 border-x-0 border-t-0 py-1 text-black text-[17px]">
                    Terms and Conditions
                </h1>{" "} */}
                {/* <div className="flex flex-col gap-y-2 text-gray-600 md:text-[13px] text-[13px] px-3 font-light font-Montserrat italic py-2">
                    {TermsAndConditions.map((condition, index) => (
                        <TermsandCondition
                            key={index}
                            Icon={BiCaretRight}
                            title={condition}
                        />
                    ))}
                </div> */}
                <div className="mb-3 mt-4">
                    <div
                        onClick={() => toggleDropdown(2)}
                        className="flex items-center justify-between border-2 rounded-md"
                    >
                        <div className="w-full">
                            <h1 className=" font-Belanosima border-black px-2 rounded-md py-[6px] text-black text-[17px]">
                                Terms and Conditions <span className="text-[12px] italic font-Roboto font-light">(Click to open)</span>
                            </h1>{" "}
                        </div>

                        {openCatalog === 2 ? (
                            <MdArrowDropUp className="h-5 w-5 " />
                        ) : (
                            <MdArrowDropDown className="h-5 w-5 " />
                        )}
                    </div>
                    {openCatalog === 2 && (
                        <div className="flex flex-col gap-y-2 text-gray-600 md:text-[13px] text-[13px] px-3 font-light font-Montserrat italic py-2">
                            {TermsAndConditions.map((condition, index) => (
                                <TermsandCondition
                                    key={index}
                                    Icon={BiCaretRight}
                                    title={condition}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

// eslint-disable-next-line react/prop-types
function TermsandCondition({ Icon, title }) {
    return (
        <div className="flex flex-row items-center gap-x-3">
            <Icon className="hidden md:flex" />
            <p>{title}</p>
        </div>
    )
}

export default Terms
