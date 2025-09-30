import styled from "styled-components";
import {HiOutlineUser} from "react-icons/hi2";
import Logout from "../features/authentication/Logout.jsx";
import {useNavigate} from "react-router-dom";
import ButtonIcon from "./ButtonIcon.jsx";
import DarkModeToggle from "./DarkModeToggle.jsx";

const StyledHeaderMenu = styled.header`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    li {    
    list-style: none;
}
`
function HeaderMenu() {
    const navigate = useNavigate();
    return (
        <StyledHeaderMenu>
            <li>
                <ButtonIcon onClick={()=>navigate("/account")}>
                    <HiOutlineUser/>
                </ButtonIcon>
            </li>
            <li>
            <DarkModeToggle/>
            </li>
            <li>
                <Logout/>
            </li>

        </StyledHeaderMenu>
    );
}

export default HeaderMenu