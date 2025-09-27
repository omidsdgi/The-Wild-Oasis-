import {useUser} from "../features/authentication/useUser.js";
import Spinner from "./Spinner.jsx";
import styled from "styled-components";
const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`

function ProtectedRoute({children}) {
    const{user,isLoading}=useUser()

    if(isLoading) return(
        <FullPage>
            <Spinner />
        </FullPage>
    )
    return children;
}
export default ProtectedRoute