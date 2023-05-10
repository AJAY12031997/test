import React from 'react'
import './style.css';
import WestIcon from '@mui/icons-material/West';
import WindowIcon from '@mui/icons-material/Window';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import SanitizerOutlinedIcon from '@mui/icons-material/SanitizerOutlined';
import TimelineIcon from '@mui/icons-material/Timeline';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import PieChartIcon from '@mui/icons-material/PieChart';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LanguageIcon from '@mui/icons-material/Language';
import NightsStayIcon from '@mui/icons-material/NightsStay';


const Sidebar = () => {
    return (
        <div className='sidebar-wrapper'>
            <div className='details-wrapper'>
                <div className='details'>
                    <div className='logo'>N</div>
                    <div className='name'>Name</div>
                </div>
                <div className='arrow'><WestIcon /> </div>
            </div>
            <ul className='list-wrapper'>
                <li className='list-content'>
                    <span className='list-img'><WindowIcon /></span>
                    <span className='list-name'>Home</span>
                </li>
                <li className='list-content'>
                    <span className='list-img'><SignalCellularAltOutlinedIcon /></span>
                    <span className='list-name'>Section 1</span>
                </li>
                <li className='list-content'>
                    <span className='list-img'><SanitizerOutlinedIcon /></span>
                    <span className='list-name'>Section 2</span>
                </li>
                <li className='list-content'>
                    <span className='list-img'><TimelineIcon /></span>
                    <span className='list-name'>Section 3</span>
                </li>
                <li className='list-content'>
                    <span className='list-img'><CurrencyExchangeIcon /></span>
                    <span className='list-name'>Section 4</span>
                </li>
                <li className='list-content'>
                    <span className='list-img'><BrowseGalleryIcon /></span>
                    <span className='list-name'>Section</span>
                </li>
                <li className='list-content'>
                    <span className='list-img'><PieChartIcon /></span>
                    <span className='list-name'>Section 6</span>
                </li>
                <li className='list-content'>
                    <span className='list-img'><SignalCellularAltOutlinedIcon /></span>
                    <span className='list-name'>Section 7</span>
                </li>
                <li className='list-content'>
                    <span className='list-img'><CloseFullscreenIcon /></span>
                    <span className='list-name'>Section 8</span>
                </li>
                <li className='list-content'>
                    <span className='list-img'><AssignmentIcon /></span>
                    <span className='list-name'>Documentation</span>
                </li>
            </ul>
            <div className='sidebar-footer'>
                <div className='top'>
                    <div className='topone'>
                        <span className='aicon'>N</span>
                        <span className='aname'>$0.90</span>
                    </div>
                    <div className='botone'>
                        Buy $XYZ
                    </div>
                </div>
                <div className='bot'>
                    <div className='boticon'><LanguageIcon/></div>
                    <div className='toggler'><NightsStayIcon/>
                    <span className='togggle'></span></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar