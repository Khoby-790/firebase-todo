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
    "Home": <FaHome color="red" />,
    "Finance": <FaRegMoneyBillAlt color="blue" />,
    "Music": <FaMusic />,
    "Work": <FaBuilding />
}