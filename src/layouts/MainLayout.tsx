import React from "react"
import { Outlet } from "react-router-dom"

import { Header, Footer, Sidebar } from "../components"

export const MainLayout: React.FC = () => (
    <div className="max-h-screen overflow-hidden">
        <div style={{ height: "7.5vh" }}>
            <Header />
        </div>
        <div className="flex" style={{ height: "92.5vh" }}>
            <Sidebar />
        </div>
        <Outlet />
        <Footer />
    </div>
)
