import React from "react"
import { Route, Routes } from "react-router-dom"

import { MainLayout } from "./layouts/MainLayout.tsx"
import Home from "./pages/Home"

const App: React.FC = () => (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
        </Route>
    </Routes>
)

export default App
