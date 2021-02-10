import React from 'react';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './index.css';
import * as BsIcons from "react-icons/bs";
import img from '../../assets/burnfitness.png';
import { IconContext } from "react-icons";

function Ourservices() {
    return (
        <div className='service'>
            <div className='service-heading'>
                <div className='service-heading-bold'>
                    <h1>SERVICES</h1>
                </div>
                <p>
                    <span>
                        <IconContext.Provider value={{ color: "#32436b", size: "50px" }}>
                        <BsIcons.BsDash />
                        </IconContext.Provider>
                    </span>
                    OUR SERVICES
                </p>
            </div>
            <div className='service-wrapper'>
                <div className='div-left'>
                    <div className='service-dec'>
                        <p>LIVING IN  COLORS</p>
                    </div>
                </div>
                <div className='div-right'>
                    <div className='div-top'>
                        <div className='div-top-left'>
                            <div className='service-dec'>
                                <p>LIVING IN COLORS</p>
                            </div>
                        </div>
                        <div className='div-top-right'>
                            <div className='service-dec'>
                                <p>LIVING IN COLORS</p>
                            </div>
                        </div>
                    </div>
                    <div className='div-bottom'>
                        <div className='div-bottom-left'>
                        <div className='service-dec'>
                            <p>LIVING IN COLORS</p>
                        </div>
                        </div>
                        <div className='div-bottom-right'>
                       
                            <div className='service-dec'>
                                <p>LIVING IN COLORS</p>
                            </div>
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourservices
