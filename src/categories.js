import { FaBuilding, FaHome, FaMusic, FaRegMoneyBillAlt } from "react-icons/fa"



export const categories = [
    {
        text: "Home"
    },
    {
        text: "Work"
    },
    {
        text: "Finance"
    },
    {
        text: "Music"
    }
]

export const categoryIcons = {
    "Home": <FaHome />,
    "Finance": <FaRegMoneyBillAlt />,
    "Music": <FaMusic />,
    "Work": <FaBuilding />
}