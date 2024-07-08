import React from 'react';
import { Routes, Route } from "react-router-dom";

import Layout from '@/layout/Layout';
import { ITEMS_MENU } from '@/const/menu';



const Router: React.FC = () => {
    return (
        <Routes>
            {ITEMS_MENU.map((item, index) => <Route key={index} path={item.to} element={<Layout title={item.label}><item.component /></Layout>} />)}            
        </Routes>
    );
};

export default Router;
