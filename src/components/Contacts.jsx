/* eslint-disable react/prop-types */

import { MdLocalPhone } from "react-icons/md"
import { TfiEmail } from "react-icons/tfi"
import { IoLocationSharp } from "react-icons/io5"
import LanguageIcon from "@mui/icons-material/Language"
import { SlSocialInstagram } from "react-icons/sl"
import { BsTwitter } from "react-icons/bs"
import { ImWhatsapp } from "react-icons/im"
import { BsPinterest } from "react-icons/bs"
import { FaFacebookSquare } from "react-icons/fa"
function Contacts() {
    return (
        <div>
            <div className="flex flex-col gap-y-3">
                <ContactsTwo Icon={MdLocalPhone} Title={"07044862393"} />
                <ContactsTwo
                    Icon={TfiEmail}
                    Title={"HAYOORPHOTOGRAPHY@GMAIL.COM"}
                />
                <a
                    className="md:text-[15px] text-[13px] font-Roboto cursor-pointer hover:underline text-blue-600"
                    href="https://www.instagram.com/hayoor/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    <ContactsTwo
                        Icon={LanguageIcon}
                        Title={"www.Hayoorphotography.com"}
                    />{" "}
                </a>
                <ContactsTwo
                    Icon={IoLocationSharp}
                    Title={"PICCADILLY STREET IDADO ESTATE LEKKI PHASE 23"}
                />
                <p className="font-light font-Montserrat italic text-[13px]">
                    Thank you for choosing HAYOOR PHOTOGRAPHY! We look forward
                    to capturing your special moments
                </p>

                {/* Socials */}
                <div className="flex items-center gap-x-3 mt-3">
                    <Socials
                        Icon={SlSocialInstagram}
                        Link={"https://www.instagram.com/hayoor/"}
                    />
                    <Socials
                        Icon={BsTwitter}
                        Link={"https://twitter.com/Hayoor_"}
                    />
                    <Socials
                        Icon={ImWhatsapp}
                        Link={"https://www.instagram.com/hayoor/"}
                    />
                    <Socials
                        Icon={BsPinterest}
                        Link={"https://pin.it/1oLncGOsR"}
                    />
                    <Socials
                        Icon={FaFacebookSquare}
                        Link={"https://www.instagram.com/hayoor/"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Contacts

function ContactsTwo({ Icon, Title }) {
    return (
        <div className="flex items-center gap-x-3">
            <Icon className="h-5 w-5" />
            <span className="md:text-[15px] text-[13px] font-Roboto">
                {Title}
            </span>
        </div>
    )
}

function Socials({ Icon, Link }) {
    return (
        <div>
            <a href={Link} target="_blank" rel="noopener noreferrer">
                <Icon className="h-5 w-5" />
            </a>
        </div>
    )
}
