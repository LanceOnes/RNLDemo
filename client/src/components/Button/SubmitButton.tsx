import type { FC } from "react"

interface SubmitButtonProps {
    label: string
    newClassName?: string
    className?: string

}
const SubmitButton: FC<SubmitButtonProps> = ({ label, newClassName, className }) => {
    return (
        <>
            <button
                type="submit"
                className={`${newClassName ? newClassName : 'bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium cursor-pointer py-2 px-4'} 
                rounded focus:outline-none focus:shadow-outline ${className}`}
            >
                {label}
            </button>
        </>
    )
}

export default SubmitButton