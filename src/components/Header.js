import styled from "styled-components";
import { useContext } from "react";

import logo from "../images/logo-header.png";
import UserContext from "../contexts/UserContext";

export default function Header() {
    const { user } = useContext(UserContext);

    return(
        <Top>
            <img src={logo} alt="Track It simple logo" />
            <UserPicture src={user.image} alt="User picture" />
        </Top>
    );
}

const Top = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
`;

const UserPicture = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 100px;
`;