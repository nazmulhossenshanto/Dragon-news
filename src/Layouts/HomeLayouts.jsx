import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <section className='nav_left'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='nav_right'></section>
            </main>
        </div>
    );
};

export default HomeLayouts;