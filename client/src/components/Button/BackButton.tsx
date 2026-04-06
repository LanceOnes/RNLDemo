import type { FC } from "react"
import { Link } from "react-router-dom"

interface BackButtonProps {
    label: string
    path: string
    newClassName?: string
    className?: string
}
const BackButton: FC<BackButtonProps> = ({
    label,
    path,
    newClassName,
    className
}) => {

    return (
        <>
            <Link
                to={path}
                className={`${newClassName ? newClassName : 'bg-white-500 hover:bg-gray-100 text-gray-600 hover:text-gray-700 text-sm font-medium cursor-pointer py-2 px-4'} 
                rounded focus:outline-none focus:shadow-outline ${className}`}
            >
                {label}
            </Link>
        </>

    )
}

export default BackButton