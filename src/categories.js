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
    "Home": <FaHome color="#1d7874" />,
    "Finance": <FaRegMoneyBillAlt color="#1D7874" />,
    "Music": <FaMusic color="#ee2e31" />,
    "Work": <FaBuilding color="#071E22" />
}