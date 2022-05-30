import { faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBell, faBox, faCartShopping, faChartLine, faEnvelope, faPeopleRoof, faRss, faToolbox } from '@fortawesome/free-solid-svg-icons';


export const deshbord=[
    {
        name:'Home',
        link:"/"
    },
    {
        name:'Add Product',
        icon:faCartShopping,
        link:'/addProduct'
    },
    {
        name:'Sales',
        icon:faChartLine,
        link:'/sales'
    },
]
export const quickMenu=[
    {
        name:'User',
        icon:faUser,
        link:'/user'
    },
    {
        name:'Products',
        icon: faBox,
        link:'/products'
    },
   
]
export const notification=[
    {
        name:'Mail',
        icon:faEnvelope,
        link:'/mail'
    },
    {
        name:'Feedback',
        icon:faRss,
        link:'/feedback'
    },
    {
        name:'Messages',
        icon:faMessage,
        link:'/messages'
    },
   
]
export const staf=[
    {
        name:'Manage',
        icon:faToolbox,
        link:'/manage'
    },
   
   
]