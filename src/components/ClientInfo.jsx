/* eslint-disable react/prop-types */
import { useForm, Controller } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

function ClientInfo() {
    const {
        register,
        control,
        formState: { errors },
    } = useForm()
    return (
        <div className="flex flex-col gap-y-6">
            <div className="relative">
                <InputField
                    name="firstname"
                    type="text"
                    placeholder="First Name*"
                    label="First Name*"
                    errors={errors}
                    register={register}
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
                />
            </div>
            <div className="relative">
                <InputField
                    name="email"
                    type="text"
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
    )
}

export default ClientInfo

const InputField = ({ name, type, placeholder, label, errors, register }) => {
    return (
        <div className="relative">
            <input
                name={name}
                type={type}
                className="peer input"
                placeholder={placeholder}
                {...register(name, { required: true })}
            />
            <label className="label">{label}</label>
            {errors[name] && (
                <p className="italic text-red-600 mt-[2px] font-normal text-[10px]">
                    Required.
                </p>
            )}
        </div>
    )
}
