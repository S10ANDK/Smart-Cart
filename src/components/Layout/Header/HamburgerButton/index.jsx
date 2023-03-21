import React, { useState } from "react";
import HamburgerIcon from "./index.styled";
import Nav from '../Nav'

const HamburgerButton = () => {
    const [active, setActive] = useState(false)
    const [openNavbar, setOpenNavbar] = useState(true)

    return (
        <>
        <HamburgerIcon active={active} onClick={() => setActive(!active)}>
            <div />
            <div />
            <div />
        </HamburgerIcon>
        <Nav active={active} openNavbar={openNavbar} onclick={() => setOpenNavbar(!openNavbar)} />
        </>
    )
}

export default HamburgerButton;