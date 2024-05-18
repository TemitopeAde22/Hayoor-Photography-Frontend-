/* eslint-disable react/prop-types */
// import backgroundImage from "../images/photo_2023-10-23_20-38-11.jpg"
// import { useState } from "react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import logo from "../images/HAYOOR.jpg"
import pic1 from "../images/photo_2023-10-23_20-38-12 (2).jpg"
import pic2 from "../images/photo_2023-10-23_20-38-12 (4).jpg"
import Contacts from "../components/Contacts"
import Terms from "../components/Terms"
import { useForm, Controller } from "react-hook-form"
import { CiBank } from "react-icons/ci"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { base_url } from "../../axiosConfig"
import { startSending, sendSuccess, sendFail } from "../features/emailSlice"
import { useState } from "react"
import Modal from "../components/Modal"
import Loader from "../components/Loader"

function Home() {
    const USER_REGEX = /^[a-zA-Z]+$/
    const dispatch = useDispatch()
    const { isSending } = useSelector((state) => state.email)

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        dispatch(startSending())
        try {
            const response = await axios.post(
                `${base_url}email/send-mail`,
                data
            )

            if (response.status === 200) {
                dispatch(sendSuccess())
                // Open the modal
                setModalOpen(true)
            } else {
                throw new Error(response.data.message)
            }
        } catch (err) {
            console.log(err)
            dispatch(sendFail(err.message))
        }
        console.log(data)
    }

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div className="cursor-pointer">
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
            {isSending ? (
                <Loader />
            ) : (
                <div className="flex gap-x-3 md:py-3 py-3 bg-white/570 text-black max-w-7xl mx-auto px-2 z-50">
                    <div className="border py-3 px-6 hidden lg:flex flex-col rounded-md shadow-md w-[40%]">
                        <div className="flex justify-center">
                            <img
                                className="h-32 w-32 object-contain"
                                src={logo}
                                alt=""
                            />
                        </div>
                        <Contacts />
                        <div className="hidden lg:flex">
                            <img
                                className="mt-10 rounded-md w-full object-contain"
                                src={pic1}
                                alt=""
                            />
                        </div>
                        <div className="hidden lg:flex mt-5">
                            <img
                                className="mt-10 w-full rounded-md object-contain"
                                src={pic2}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="rounded-md w-full lg:w-[60%] md:px-4 border-2 border-[#e8e3e3] shadow-md border-solid">
                        <form onSubmit={handleSubmit(onSubmit)} action="">
                            {/* client information */}
                            <div className="px-3 py-2">
                                <h1 className="font-Belanosima border-black border-2 border-x-0 border-t-0 py-1 mb-5 text-[17px]]">
                                    Client Information
                                </h1>
                                <div className="flex flex-col gap-y-6">
                                    <div className="relative">
                                        <InputField
                                            name="firstname"
                                            type="text"
                                            placeholder="First Name*"
                                            label="First Name*"
                                            errors={errors}
                                            register={register}
                                            validation={{
                                                pattern: {
                                                    value: USER_REGEX,
                                                    message:
                                                        "Name must contain letters only.",
                                                },
                                            }}
                                        />
                                    </div>

                                    <div className="relative">
                                        <InputField
                                            name="lastname"
                                            type="text"
                                            placeholder="Last Name*"
                                            label="Last Name*"
                                            errors={errors}
                                            register={register}
                                            validation={{
                                                pattern: {
                                                    value: USER_REGEX,
                                                    message:
                                                        "Name must contain letters only.",
                                                },
                                            }}
                                        />
                                    </div>
                                    <div className="relative">
                                        <InputField
                                            name="email"
                                            type="email"
                                            placeholder="Email*"
                                            label="Email*"
                                            errors={errors}
                                            register={register}
                                        />
                                    </div>

                                    <div
                                        style={{
                                            width: "100%",
                                        }}
                                    >
                                        <Controller
                                            name="phoneNumber"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => (
                                                <PhoneInput
                                                    {...field}
                                                    country={"ng"}
                                                    inputStyle={{
                                                        width: "100%",
                                                        height: "40px",
                                                    }}
                                                    inputProps={{
                                                        name: "phone",
                                                        required: true,
                                                        autoFocus: true,
                                                    }}
                                                />
                                            )}
                                        />
                                    </div>

                                    <div className="relative">
                                        <InputField
                                            name="address"
                                            type="text"
                                            placeholder="Address*"
                                            label="Address*"
                                            errors={errors}
                                            register={register}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* session details */}
                            <div className="px-3 py-2">
                                <h1 className=" font-Belanosima border-black border-2 border-x-0 border-t-0 mb-3 py-1 text-black text-[17px]">
                                    Session Details
                                </h1>
                                <h3
                                    className={`text-[13px] font-Roboto ${
                                        errors["TypeofSession"]
                                            ? "text-red-600"
                                            : ""
                                    }`}
                                >
                                    Type of Session ?
                                </h3>
                                <div className="flex gap-x-3 items-center">
                                    <div className="">
                                        <RadioInput
                                            id="Portrait"
                                            name="TypeofSession"
                                            value="Portrait"
                                            label="Portrait"
                                            register={register}
                                        />
                                    </div>
                                    <div>
                                        <RadioInput
                                            id="Wedding"
                                            name="TypeofSession"
                                            value="Wedding"
                                            label="Wedding"
                                            register={register}
                                        />
                                    </div>
                                    <div>
                                        <RadioInput
                                            id="Events"
                                            name="TypeofSession"
                                            value="Events"
                                            label="Events"
                                            register={register}
                                        />
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <div className="relative mt-5">
                                        <input
                                            name="SessionOthers"
                                            type="text"
                                            className="peer input"
                                            {...register("SessionOthers", {
                                                required: false,
                                            })}
                                        />
                                        <label className="label">
                                            Others (Please speficy)
                                        </label>
                                    </div>
                                    <div className="relative mt-7">
                                        <InputField
                                            name="Date"
                                            type="date"
                                            placeholder="Preferred Date*"
                                            label="Preferred Date*"
                                            errors={errors}
                                            register={register}
                                        />
                                    </div>

                                    <h3
                                        className={`text-[13px] font-Roboto mt-5 ${
                                            errors["PreferredLocation"]
                                                ? "text-red-600"
                                                : ""
                                        }`}
                                    >
                                        Preferred Location ?
                                    </h3>
                                    <div className="flex items-center gap-x-5">
                                        <div>
                                            <RadioInput
                                                id="Studio"
                                                name="PreferredLocation"
                                                value="Studio"
                                                label="Studio"
                                                register={register}
                                            />
                                        </div>
                                        <div>
                                            <RadioInput
                                                id="Location"
                                                name="PreferredLocation"
                                                value="Location"
                                                label="Location"
                                                register={register}
                                            />
                                        </div>
                                    </div>

                                    <div className="relative mt-5">
                                        <input
                                            name="AdditionalLocationInformation"
                                            type="text"
                                            className="peer input"
                                            {...register(
                                                "AdditionalLocationInformation",
                                                {
                                                    required: false,
                                                }
                                            )}
                                        />
                                        <label className="label">
                                            Additional Location Information
                                            (optional)
                                        </label>
                                    </div>

                                    <div className="relative mt-5">
                                        <input
                                            name="SpecialRequest"
                                            type="text"
                                            className="peer input"
                                            {...register("SpecialRequest", {
                                                required: false,
                                            })}
                                        />
                                        <label className="label">
                                            Specific Requests or Theme
                                            (optional)
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* package and session */}
                            <div className="px-3 py-2">
                                <h1
                                    className={`font-Belanosima border-black mb-3  border-2 border-x-0 border-t-0 py-1 text-black text-[17px] ${
                                        errors["PackageSelection"]
                                            ? "text-red-600"
                                            : ""
                                    }`}
                                >
                                    Package/Service Selection
                                </h1>

                                <div className="flex flex-col gap-y-3">
                                    <div>
                                        <RadioInput
                                            id="Portrait"
                                            name="PackageSelection"
                                            value="Portrait Session"
                                            label="Portrait Session"
                                            register={register}
                                        />
                                    </div>
                                    <div>
                                        <RadioInput
                                            id="Campaign"
                                            name="PackageSelection"
                                            value="Campaign Session"
                                            label="Campaign Session"
                                            register={register}
                                        />
                                    </div>
                                    <div>
                                        <RadioInput
                                            id="Family"
                                            name="PackageSelection"
                                            value="Family Protrait Session"
                                            label="Family Session"
                                            register={register}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* additional service */}
                            <div className="px-3 py-2">
                                <h1 className=" font-Belanosima border-black  border-2  border-x-0 border-t-0 py-1 text-black mb-5 text-[17px]">
                                    Additional Services (optional)
                                </h1>{" "}
                                <div className="flex flex-col gap-y-3">
                                    <div>
                                        <input
                                            type="radio"
                                            name="AdditionalServices"
                                            value="Additional Hours (NGN10,000)"
                                            {...register("AdditionalServices", {
                                                required: false,
                                            })}
                                        />
                                        <label className="font-Roboto ml-1 text-gray-600 text-[15px]">
                                            Additional Hours (NGN10,000)
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            name="AdditionalServices"
                                            value="Album/Prints (NGN200,000-NGN700,000)"
                                            {...register("AdditionalServices", {
                                                required: false,
                                            })}
                                        />
                                        <label className="font-Roboto ml-1 text-gray-600 text-[15px]">
                                            Album/Prints (NGN200,000-NGN700,000)
                                        </label>
                                    </div>

                                    <div className="relative mt-3">
                                        <input
                                            name="PhotoBooth"
                                            type="text"
                                            className="peer input"
                                            {...register("PhotoBooth", {
                                                required: false,
                                            })}
                                        />
                                        <label className="label">
                                            Photo Booth (Please specify details){" "}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Terms and condition */}
                            <Terms />

                            {/* payment information */}
                            <div className="px-3 py-2">
                                <h1
                                    className={`font-Belanosima border-black mb-3  border-2 border-x-0 border-t-0 py-1 text-black text-[17px] ${
                                        errors["Payment Type"]
                                            ? "text-red-600"
                                            : ""
                                    }`}
                                >
                                    Payment Method
                                </h1>{" "}
                                <div className="">
                                    <div className="flex items-center gap-x-3 mb-3">
                                        <CiBank className="w-7 h-7" />
                                        <h1 className=" font-Belanosima">
                                            Bank Transfer
                                        </h1>
                                    </div>
                                    <div className="flex flex-col gap-y-2">
                                        <h3 className=" font-Roboto text-[15px] italic">
                                            Account Number: 0124676187
                                        </h3>
                                        <h3 className=" font-Roboto text-[15px] italic">
                                            Account Name: Hayoor Photography
                                        </h3>
                                        <h3 className=" font-Roboto text-[15px] italic">
                                            Bank Name: Wema Bank
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Agreement */}
                            <div className="px-3 py-2">
                                <h1 className="font-Belanosima border-black  border-2 border-x-0 border-t-0 py-1 text-black mb-2 text-[17px]">
                                    Agreement
                                </h1>{" "}
                                <div className="flex flex-col gap-y-3 text-gray-600 text-[15px]">
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            {...register("check", {
                                                required: true,
                                            })}
                                            type="checkbox"
                                            required
                                        />
                                        <p
                                            className={`text-[13px] font-Montserrat italic ${
                                                errors["Type of Session"]
                                                    ? "text-red-600"
                                                    : ""
                                            }`}
                                        >
                                            I, the undersigned, agree to the
                                            terms and conditions stated above
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="button">
                                Submit
                            </button>
                        </form>

                        <div className="lg:hidden px-5">
                            <h1 className="font-Belanosima border-2 border-x-0 border-t-0 border-black py-1 text-black mb-2 text-[17px]">
                                Contacts
                            </h1>{" "}
                            <div className="lg:hidden mb-7">
                                <Contacts />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home
const InputField = ({
    name,
    type,
    placeholder,
    validation,
    label,
    errors,
    register,
}) => {
    return (
        <div className="relative">
            <input
                name={name}
                type={type}
                className="peer input"
                placeholder={placeholder}
                {...register(name, {
                    required: {
                        value: true,
                        message: validation?.required || "Required", // Set default error message if not provided
                    },
                    pattern: validation?.pattern,
                })}
            />
            <label className="label">{label}</label>
            {errors[name] && (
                <p className="italic text-red-600 mt-[2px] font-normal text-[10px]">
                    {errors[name].message}
                </p>
            )}
        </div>
    )
}

const RadioInput = ({ id, name, value, label, register }) => {
    return (
        <div className="relative">
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                {...register(name, { required: true })}
            />
            <label className="font-Roboto ml-1 text-gray-600 text-[15px]">
                {label}
            </label>
        </div>
    )
}
