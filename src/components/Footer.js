import styled from "styled-components";
import { Link } from "react-router-dom";
import Progressbar from "./Progressbar";

export default function Footer() {
    return(
        <Bottom>
            <Link to="/habitos" style={{ textDecoration: 'none' }}>
                <span>Hábitos</span>
            </Link>
            <Link to="/hoje">
                <div><Progressbar /></div>
            </Link>
            <Link to="/historico" style={{ textDecoration: 'none' }}>
                <span>Histórico</span>
            </Link>
        </Bottom>
    );
}

const Bottom = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    span {
        font-size: 18px;
        color: #52B6FF;
        cursor: pointer;
    }

    div {
        font-family: 'Lexend Deca';
        font-size: 18px;
        width: 91px;
        height: 91px;
        cursor: pointer;
        position: absolute;
        bottom: 10px;
        left: calc((100vw - 91px) / 2);
    }
`;