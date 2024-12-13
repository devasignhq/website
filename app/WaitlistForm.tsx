"use client"
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { IoClose } from "react-icons/io5";
import { BsCheck2Circle } from 'react-icons/bs';

type FormState = "INITIAL" | "SUCCESS" | "FAILED";

type WaitlistFormProps = {
    toggleWaitlistForm: () => void;
}

const sheetdb = process.env.NEXT_PUBLIC_SHEETDB || "";

export default function WaitlistForm({ toggleWaitlistForm }: WaitlistFormProps) {
    const [formState, setFormState] = useState<FormState>("INITIAL");
    const [uploadingInfo, setUploadingInfo] = useState(false);

    const validatorSchema = yup.object().shape({
        first_name: yup.string().trim().required("First name is required"),
        last_name: yup.string().trim().required("Last name is required"),
        email_address: yup.string().trim()
            .email("Invalid email format")
            .required("Email address is required"),
    });
    
    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email_address: "",
        },
        validationSchema: validatorSchema,
        onSubmit: async (values) => {
            setUploadingInfo(true);

            try {
                const response = await fetch(sheetdb, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        data: [
                            {
                                id: values.first_name + "_" + (Math.random() * Math.random()).toString(),
                                ...values,
                            }
                        ]
                    })
                })

                if (!response.ok) {
                    setUploadingInfo(false);
                    setFormState("FAILED");
                }
                
                setFormState("SUCCESS");
            } catch {
                setFormState("FAILED");
            } finally {
                setUploadingInfo(false);
            }
        }
    });

    return (  
        <div className="h-[100dvh] fixed inset-0 bg-slate-800 bg-opacity-50 backdrop-blur-[5px] grid place-content-center z-[99999999]">
            <div className="w-[450px] max-w-[92vw] p-6 bg-black text-white pptelegraf">
                {formState !== "SUCCESS" ? (
                    <>
                        <div className="flex items-center justify-between">
                            <h3 className="monument text-xl leading-[36px]">Join Waitlist</h3>
                            <button 
                                onClick={toggleWaitlistForm}
                                className="sm:p-[15px] p-3 border border-primary text-primary text-2xl"
                            >
                                <IoClose />
                            </button>
                        </div>
                        <form 
                            onSubmit={formik.handleSubmit} 
                            className="flex flex-col mt-10"
                        >
                            <div className="grid grid-cols-2 gap-[15px]">
                                <div>
                                    <label htmlFor="first_name" className="text-sm tracking-[0.1px] pb-[5px]">
                                        First Name
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="First Name"
                                        id="first_name"
                                        name="first_name"
                                        className="w-full py-[17px] sm:px-5 px-4 bg-black text-sm tracking-[0.25px] border border-white focus:border-primary outline:none"
                                        value={formik.values.first_name}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.first_name && formik.errors.first_name && (
                                        <p className="text-[#D3453E] text-[11px] leading-snug mt-[2px]">{formik.errors.first_name}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="text-sm tracking-[0.1px] pb-[5px]">
                                        Last Name
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="Last Name"
                                        id="last_name"
                                        name="last_name"
                                        className="w-full py-[17px] sm:px-5 px-4 bg-black text-sm tracking-[0.25px] border border-white focus:border-primary outline:none"
                                        value={formik.values.last_name}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.last_name && formik.errors.last_name && (
                                        <p className="text-[#D3453E] text-[11px] leading-snug mt-[2px]">{formik.errors.last_name}</p>
                                    )}
                                </div>
                            </div>
                            <div className="mt-[15px] mb-10 flex flex-col">
                                <label htmlFor="email_address" className="text-sm tracking-[0.1px] pb-[5px]">
                                    Email Address
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Email Address"
                                    id="email_address"
                                    name="email_address"
                                    className="py-[17px] sm:px-5 px-4 bg-black text-sm tracking-[0.25px] border border-white focus:border-primary outline:none"
                                    value={formik.values.email_address}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.email_address && formik.errors.email_address && (
                                    <p className="text-[#D3453E] text-[11px] leading-snug mt-[2px]">{formik.errors.email_address}</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="w-full py-[15px] bg-primary font-extrabold text-black text-center leading-[24px]"
                                disabled={uploadingInfo}
                            >
                                Submit
                            </button>
                            {formState === "FAILED" && (
                                <p className="text-[#D3453E] text-sm mt-[2px]">
                                    Your submission{" wasn't "}successful. Please try again. Thank you!
                                </p>
                            )}
                        </form>
                    </>
                ):(
                    <>
                        <div className="w-fit py-5 mx-auto">
                            <BsCheck2Circle className="text-[48px] text-primary" />
                        </div>
                        <h5 className="monument leading-[28px] text-center">Submitted 👌</h5>
                        <p className="text-sm leading-[22px] text-center pt-2.5 pb-10">
                            We can’t wait for you to be part of our journey to transform open-source development.
                        </p>
                        <button 
                            onClick={toggleWaitlistForm}
                            className="w-full p-[15px] border border-primary font-extrabold text-primary text-center leading-[24px]"
                        >
                            Close
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}