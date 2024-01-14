import React from "react"
import { BiCaretRight } from "react-icons/bi"
function Terms() {
    return (
        <div>
            <div className="py-2 px-3 lg:px-1">
                <h1 className=" font-Belanosima border-black  border-2 border-x-0 border-t-0 py-1 text-black text-[17px]">
                    Terms and Conditions
                </h1>{" "}
                <div className="flex flex-col gap-y-2 text-gray-600 md:text-[15px] text-[13px] px-3 font-light font-Montserrat italic py-2">
                    <TermsandCondition
                        Icon={BiCaretRight}
                        title={
                            "A non-refundable deposit of(300,000) is required to secure your booking"
                        }
                    />
                    <TermsandCondition
                        Icon={BiCaretRight}
                        title={
                            "Full payment is due on or before the session date"
                        }
                    />

                    <TermsandCondition
                        Icon={BiCaretRight}
                        title={
                            "Travel fees may apply for session outside LAGOS/NIGERIA hours in advance"
                        }
                    />
                    <TermsandCondition
                        Icon={BiCaretRight}
                        title={
                            "Rescheduling or cancellation must be at least 48 "
                        }
                    />
                    <TermsandCondition
                        Icon={BiCaretRight}
                        title={
                            "The photographer retains the copyright to all images but grants the client personal usage rights"
                        }
                    />
                </div>
            </div>
        </div>
    )
}

function TermsandCondition({ Icon, title }) {
    return (
        <div className="flex flex-row items-center gap-x-3">
            <Icon className="hidden md:flex" />
            <p>{title}</p>
        </div>
    )
}

export default Terms
