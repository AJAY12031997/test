import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WalletIcon from '@mui/icons-material/Wallet';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import WestIcon from '@mui/icons-material/West';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';
import SquareIcon from '@mui/icons-material/Square';







const Main = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const { data } = await axios.get(`https://raw.githubusercontent.com/akshita151199/APIs/main/data`);
        setData(data);
        console.log(data)
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className='main-wrapper'>
            <div className='left'>
                <div className='lefttop'>
                    <div className='lefttopright'>Section</div>
                    <div className='lefttopleft'><WalletIcon />0.2 $XYZ <span>Tier 1</span></div>
                </div>
                <div className='midtop'>
                    <div className='leftmidtop'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    <div className='tutorial'>Tutorial</div>
                    <span className='absolute'><CloseIcon /></span>
                </div>
                <div className='rewards'>
                    <div className='rewardstext'>Your rewards</div>
                    <div className='rewardsmid'>
                        <div className='money'>0.26231428</div>
                        <button className='botbtn1'><OpenInNewIcon /> Custom link </button>
                    </div>
                    <div className='rewardsbot'>
                        <span className='curr'>$40 AVAX</span>
                        <span className='curr'>$10 BNB </span>
                        <span className='curr'>$210 BTC</span>
                    </div>
                </div>

                <div className='cards'>
                    <div className='card'>
                        <div className='cardtop'>
                            <div className='cardicon'></div>
                            <div className='cardtext'> 12.5% of fee</div>
                        </div>
                        <div className='cardmid'>Your Referral Link for xyz</div>
                        <div className='cardbot'>
                            <div className='cardrtext'> https://unityexchange.design </div>
                            <div className='cardricon'><SquareIcon /></div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='cardtop'>
                            <div className='cardicon'></div>
                            <div className='cardtext'> 12.5% of fee</div>
                        </div>
                        <div className='cardmid'>Your Referral Link for xyz</div>
                        <div className='cardbot'>
                            <div className='cardrtext'>https://unityexchange.design </div>
                            <div className='cardricon'><SquareIcon /></div>
                        </div>
                    </div>
                </div>
                <div className='tabs'>
                    <div className='firsttab'>First Tab</div>
                    <div className='secondtab'>Second Tab</div>
                </div>
                <div className='table'>
                    <div className='tablehead'>
                        <span className='tbody'>ASSET</span>
                        <span className='tbody'>AMOUNT</span>
                        <span className='tbody'>USER ACCOUNT</span>
                        <span className='tbody'>REFERRAL EARNING</span>
                    </div>


                    {data.data?.map((e) => {
                        return (
                            <div className='tablebody'>
                                <div className="asset">
                                    <img className='Img' src={e.img}/>
                                    <div className="assetwrap">
                                        <span className='assesttext'>{e.asset}</span>
                                      
                                        <span className='typewrap'>  
                                        <span className='type'>{e.type}</span>
                                        <span className='chain'><img className='chainimg' src={e.chain.img}/>
                                            <span className='chainname '>{e.chain.name}</span></span>
                                            </span>
                                    </div>
                                </div>

                                <span className='amount'>
                                <span className='amountone'>0.0000 BNB</span>
                                <span className='amountstat'>{e.state}</span>
                                </span>
                                <span className='account'>{e.user}</span>
                                <span className='earning'>
                                <span className='eone'>0.000.BNB</span>
                                <span className='etwo'>View on BSC Scan</span>
                                </span>
                            </div>
                        )
                    })}


                </div>

            </div>
            <div className='right'>
                <div className="topright">
                    <button className='topbtn1'><NotStartedIcon /> Avalanche <KeyboardArrowDownIcon /></button>
                    <button className='topbtn2'><WalletIcon /> 0xf6...1353 <KeyboardArrowDownIcon /></button>
                </div>
                <div className='midright'>
                    <div className='arrow'><WestIcon /> </div>
                    <div className='righttext'>Custom link </div>
                </div>
                <div className='rightlink'>https://testnet.xyz.xyz/trade?ref=
                </div>
                <input className='input' placeholder='ENTER' />
                <div className="bottomright">
                    <button className='botbtn1'><OpenInNewIcon /> Custom link </button>
                    <button className='botbtn2'><ExitToAppIcon />Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Main