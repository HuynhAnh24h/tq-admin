// Import Icons here if needed
import { MdDashboard } from "react-icons/md"
import { FaUser } from "react-icons/fa"
import { AiFillProduct } from "react-icons/ai"
import { FaPager } from "react-icons/fa6"
import { FaBloggerB } from "react-icons/fa6";
import { FaStore } from "react-icons/fa6";


const NavigateItems = [
    {
        name: 'Dashboard',
        icon: <MdDashboard />,
        path: '/dashboard'
    },
    {
        name: 'Users',
        icon: <FaUser />,
        path: '/user'
    },
    {
        name: 'Products',
        icon: <AiFillProduct />,
        path: '/product'
    },
    {
        name: 'Landing',
        icon: <FaPager />,
        path: '/landing'
    },
    {
        name: 'Blogs',
        icon: <FaBloggerB />,
        path: '/blog'
    },
    {
        name: 'Orders',
        icon: <FaStore />,
        path: '/order'
    },
    {
        name:"Settings",
        icon:<MdDashboard />,
        path:"/settings"
    }
]

export default NavigateItems