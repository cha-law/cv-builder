import { useState } from "react"

export default function CVBuilder() {

    function assignPersonalInfo(){
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value ? "Email Address: " + document.querySelector("#email").value : "";
        const phoneNumber = document.querySelector("#phone-number").value ? "| Phone Number: " + document.querySelector("#phone-number").value : "";
        const city = document.querySelector("#city").value;

        setPersonalInfo({name, email, phoneNumber, city});
    };

    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        city: ""
    });

    return (
        <main className="flex gap-24 text-gray-700 bg-gray-50 p-8">
            <section className="max-w-130">
                <section className="bg-white rounded-md shadow-sm p-4">
                    <div className="mb-4 flex gap-2">
                        <div>
                            <h2 className="font-bold text-xl">Personal Information</h2>
                            <p>Add your contact information so employers can get in touch.</p>
                        </div>

                        <div>
                            <button className="p-1 rounded-md hover:bg-gray-50 transition place-self-end">
                                <svg className="fill-gray-800 aspect-square w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-down</title><path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" /></svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex flex-col">
                            <label htmlFor="name">Full Name*</label>
                            <input onInput={assignPersonalInfo} id="name" type="text" className="p-2 border-1 border-gray-200 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email Address*</label>
                            <input onInput={assignPersonalInfo} id="email" type="email" className="p-2 border-1 border-gray-200 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phone-number">Phone Number*</label>
                            <input onInput={assignPersonalInfo} id="phone-number" type="tel" className="p-2 border-1 border-gray-200 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="name">Town / City*</label>
                            <input onInput={assignPersonalInfo} id="city" type="text" className="p-2 border-1 border-gray-200 rounded-md" />
                        </div>
                    </div>
                </section>
            </section>

            {/* OUTPUT SECTION */}
            
            <section>
                <div className="bg-white rounded-md shadow-sm p-8">
                    <h2 className="font-bold text-2xl">{personalInfo.name}</h2>
                    <p>{personalInfo.email} {personalInfo.phoneNumber}</p>
                    <p>{personalInfo.city}</p>
                </div>
            </section>
        </main>
    )
}