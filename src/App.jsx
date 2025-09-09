import GlobalStyles from "./styles/GlobalStyles.js";
import Input from "./ui/Input.jsx";
import Button from "./ui/Button.jsx";
import styled from "styled-components";
import Heading from "./ui/Heading.jsx";

const StyledApp = styled.main`
background-color: orangered;
    padding: 20px;
`

function App() {
    return (
        <>
            <GlobalStyles/>
            <StyledApp>

            <Heading as='h1'>The wild Oasis</Heading>

            <Heading as='h2'>Check in and out</Heading>
            <Button>Check in</Button>
            <Button>Check out</Button>

            <Heading as='h3'>Form</Heading>
            <Input placeholder="Number the guests" />
            <Input placeholder="Number the guests" />

            </StyledApp>

        </>
    )
}
export default App
