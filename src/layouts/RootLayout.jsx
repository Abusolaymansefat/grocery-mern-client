import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default RootLayout;