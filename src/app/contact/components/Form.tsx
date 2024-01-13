export function Form({ placeholder, type, required }: { placeholder: string, type: string, required: boolean }) {
    return (
        <div className="py-4">
            <p>{placeholder} {required && (<span className='text-indigo-500'>*</span>)}</p>
            <input type={type} placeholder={placeholder} className='w-full p-3 bg-transparent border border-neutral-400 dark:border-neutral-700 rounded-lg outline-none focus:border-neutral-700 dark:focus:border-neutral-300' />
        </div>
    )
}