import {useUser} from "../features/authentication/useUser.js";
import Spinner from "./Spinner.jsx";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`

function ProtectedRoute({children}) {
    const navigate = useNavigate();
    const{isAuthenticated,isLoading}=useUser()

    useEffect(() => {
        if(!isAuthenticated && !isLoading) navigate("/login")
    }, [isAuthenticated,navigate,isLoading]);

    if(isLoading)
        return(
        <FullPage>
            <Spinner />
        </FullPage>
        )
    if (isAuthenticated) return children;
}
export default ProtectedRoute