export default function CVInput() {
    return (
        <section className="max-w-140">
            <section className="bg-white rounded-md shadow-sm p-4">
                <div className="mb-4 flex gap-2">
                    <div>
                        <h2 className="font-bold text-xl">Personal Information</h2>
                        <p>Add your contact information so employers can get in touch.</p>
                    </div>

                    <div>
                        <button className="p-1 rounded-md hover:bg-gray-50 transition">
                            <svg className="fill-gray-800 aspect-square w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-down</title><path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" /></svg>
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex flex-col">
                        <label htmlFor="name">Full Name*</label>
                        <input type="text" className="p-2 border-1 border-gray-200 rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email Address*</label>
                        <input type="email" className="p-2 border-1 border-gray-200 rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone-number">Phone Number*</label>
                        <input type="tel" className="p-2 border-1 border-gray-200 rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name">Town / City*</label>
                        <input type="text" className="p-2 border-1 border-gray-200 rounded-md" />
                    </div>
                </div>
            </section>
        </section>
    )
}