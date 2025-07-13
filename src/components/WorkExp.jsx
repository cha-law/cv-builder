export default function WorkExp() {
    return (
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
    )
}