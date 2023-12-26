import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HomeIcon from '@mui/icons-material/Home'
import ContactsIcon from '@mui/icons-material/Contacts';
import ScienceIcon from '@mui/icons-material/Science';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import MiscellaneousServiceIcon from '@mui/icons-material/MiscellaneousServices'
import MovieIcon from '@mui/icons-material/Movie';

// import logo from '../../assets/Global Chronicle-logos_white.png'

const navbarItems = [
    // { id: 'logo', path: '/logo-path', isLogo: true, logoSrc: logo},
    { id: 1, path: '/home',  text: 'Home',  category:'home' },
    { id: 2, path: '/business', text: 'Business',  category:'business' },
    { id: 3, path: '/general', text: 'General',  category:'general' },
    { id: 4, path: '/health', text: 'Health',  category:'health' },
    { id: 5, path: '/science', text: 'Science',  category:'science' },
    { id: 6, path: '/sports', text: 'Sports',  category:'sports' },
    { id: 7, path: '/technology', text: 'Technology',  category:'technology' },
    { id: 8, path: '/entertainment', text: 'Entertainment',  category:'entertainment' },
    
]
    const icons = [
        <HomeIcon />,
        <BusinessCenterIcon/>,
        <HealthAndSafetyIcon/>,
        <MiscellaneousServiceIcon />,
        <ContactsIcon />,
        <SportsTennisIcon/>,
        <ScienceIcon/>,
        <MovieIcon/>
    ];


  export {navbarItems, icons}