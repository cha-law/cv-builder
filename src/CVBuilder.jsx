import { useState } from "react"

export default function CVBuilder() {

    function assignPersonalInfo(){
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value ? "Email Address: " + document.querySelector("#email").value : "";
        const phoneNumber = document.querySelector("#phone-number").value ? "| Phone Number: " + document.querySelector("#phone-number").value : "";
        const city = document.querySelector("#city").value;

        setPersonalInfo({name, email, phoneNumber, city});
    };

    function assignWorkExperience(event) {
        const key = event.target.parentElement.parentElement.dataset.key;
        const workExpDiv = document.querySelector(`div[data-key="${key}"]`);
        if (!workExpDiv) return;

        const companyName = workExpDiv.querySelector("#company-name").value;
        const yourRole = workExpDiv.querySelector("#your-role").value;
        const startDate = workExpDiv.querySelector("#start-date").value;
        const endDate = workExpDiv.querySelector("#end-date").value ? " - " + document.querySelector("#end-date").value : "";
        const responsibilities = workExpDiv.querySelector("#responsibilities").value;

        const workExperience = {
            companyName,
            yourRole,
            startDate,
            endDate,
            responsibilities
        };
        
        setWorkExpArray(prev => {
            const newArray = [...prev];
            newArray[key] = workExperience;
            return newArray;
        });
    };

    function deleteWorkExperience(event) {
        const key = event.target.parentElement.dataset.key;
        const workExpDiv = document.querySelector(`div[data-key="${key}"]`);
        if (!workExpDiv) return;

        setWorkExpArray(prev => {
            const newArray = [...prev];
            newArray.splice(key, 1);
            return newArray;
        });

        workExpDiv.remove();
    };

    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        city: ""
    });

    const [workExpArray, setWorkExpArray] = useState([]);

    return (
        <main className="flex gap-24 text-gray-700 bg-gray-50 p-8">
            <section className="max-w-130 flex flex-col gap-8">
                <section className="bg-white rounded-md shadow-sm p-4 place-content-between">
                    <div className="mb-4 flex gap-2">
                        <div>
                            <h2 className="font-bold text-xl">Personal Information</h2>
                            <p>Add your contact information so employers can get in touch.</p>
                        </div>

                        <div>
                            <button className="p-1 rounded-md hover:bg-gray-100 transition cursor-pointer">
                                <svg className="fill-gray-800 aspect-square w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-down</title><path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" /></svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex flex-col">
                            <label htmlFor="name">Full Name*</label>
                            <input onInput={assignPersonalInfo} id="name" type="text" className="p-2 border-1 border-gray-200 rounded-md" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email Address*</label>
                            <input onInput={assignPersonalInfo} id="email" type="email" className="p-2 border-1 border-gray-200 rounded-md" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phone-number">Phone Number*</label>
                            <input onInput={assignPersonalInfo} id="phone-number" type="tel" className="p-2 border-1 border-gray-200 rounded-md" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="town">Town / City*</label>
                            <input onInput={assignPersonalInfo} id="city" type="text" className="p-2 border-1 border-gray-200 rounded-md" required />
                        </div>
                    </div>
                </section>

                <section className="bg-white rounded-md shadow-sm p-4">
                    <div className="mb-4 flex gap-2 place-content-between">
                        <div>
                            <h2 className="font-bold text-xl">Work Experience</h2>
                            <p>Tell employers about your past experience.</p>
                        </div>

                        <div>
                            <button className="p-1 rounded-md hover:bg-gray-100 transition cursor-pointer">
                                <svg className="fill-gray-800 aspect-square w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-down</title><path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" /></svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm" data-key={0}>
                        <div className="flex flex-col">
                            <label htmlFor="company-name">Company Name*</label>
                            <input onInput={assignWorkExperience} id="company-name" type="text" className="p-2 border-1 border-gray-200 rounded-md" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="your-role">Your Role*</label>
                            <input onInput={assignWorkExperience} id="your-role" type="text" className="p-2 border-1 border-gray-200 rounded-md" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="start-date">Start Date*</label>
                            <input onInput={assignWorkExperience} id="start-date" type="date" className="p-2 border-1 border-gray-200 rounded-md" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="end-date">End Date</label>
                            <input onInput={assignWorkExperience} id="end-date" type="date" className="p-2 border-1 border-gray-200 rounded-md" />
                        </div>
                        <div className="flex flex-col w-[100%]">
                            <label htmlFor="responsibilities">Responsibilities</label>
                            <textarea onInput={assignWorkExperience} name="responsibilities" id="responsibilities" className="p-2 border-1 border-gray-200 rounded-md min-h-10 max-h-60"></textarea>
                        </div>
                        <button onClick={deleteWorkExperience} className="p-1 rounded-md hover:bg-red-100 transition cursor-pointer">
                            <svg className="fill-red-800 aspect-square w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                        </button>
                    </div>
                    <button className="p-1 flex gap-1 rounded-md hover:bg-blue-100 transition cursor-pointer mt-4">
                        <svg className="fill-blue-800 aspect-square w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                        <p className="text-blue-800">Add new</p>
                    </button>
                </section>
            </section>

            {/* OUTPUT SECTION */}
            
            <section className="bg-white rounded-md shadow-sm p-8 flex flex-col gap-4">
                <div>
                    <h2 className="font-bold text-2xl">{personalInfo.name}</h2>
                    <p>{personalInfo.email} {personalInfo.phoneNumber}</p>
                    <p>{personalInfo.city}</p>
                </div>
                <div className="h-0.25 rounded-[100%] bg-gray-400"></div>
                <div>
                    <h3 className="text-xl font-semibold">Work Experience</h3>
                    <div className="mt-2" data-index={0}>
                        <h4 className="font-semibold">{workExpArray[0]?.companyName}</h4>
                        <p>{workExpArray[0]?.yourRole}</p>
                        <p className="text-sm text-gray-500">{workExpArray[0]?.startDate}{workExpArray[0]?.endDate}</p>
                        <p className="text-sm">{workExpArray[0]?.responsibilities}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}