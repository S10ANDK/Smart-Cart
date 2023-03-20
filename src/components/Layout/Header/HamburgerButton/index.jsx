import React, { useState } from "react";
import HamburgerIcon from "./index.styled";
import Nav from '../Nav'

const HamburgerButton = () => {
    const [active, setActive] = useState(false)

    return (
        <>
        <HamburgerIcon active={active} onClick={() => setActive(!active)}>
            <div />
            <div />
            <div />
        </HamburgerIcon>
        <Nav active={active} />
        </>
    )
}

export default HamburgerButton;