import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

type Props = {};

const LayoutWebsite = (props: Props) => {
    return (
        <div>
            <Header></Header>
            <main>
                <Outlet />
            </main>
            <Footer></Footer>
        </div>
    );
};

export default LayoutWebsite;
