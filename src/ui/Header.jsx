import styled from "styled-components";
import Logout from "../features/authentication/Logout.jsx";

const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    padding: 1.2rem 4.8rem;
    border-bottom: 0.2rem solid var(--color-grey-200);
`

function Header() {
    return (
        <StyledHeader>
            <Logout/>
        </StyledHeader>
    );
}

export default Header