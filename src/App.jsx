import GlobalStyles from "./styles/GlobalStyles.js";
import Input from "./ui/Input.jsx";
import Button from "./ui/Button.jsx";
import styled from "styled-components";
import Heading from "./ui/Heading.jsx";
import Row from "./ui/Row.jsx";

const StyledApp = styled.main`
    //background-color: orangered;
    padding: 20px;
`

function App() {
    return (
        <>
        <GlobalStyles/>
        <StyledApp>
            <Row>

                <Row type="horizontal">
                    <Heading as='h1'>The wild Oasis</Heading>
                    <div>
                        <Heading as='h2'>Check in and out</Heading>
                        <Button>Check in</Button>
                        <Button variation="secondary" size="small">Check out</Button>
                    </div>
                </Row>

                <Row type="vertical" >
                    <Heading as='h3'>Form</Heading>
                    <form>
                        <Input placeholder="Number of guests" />
                        <Input placeholder="Number of guests" />
                    </form>
                </Row>
        </Row>
        </StyledApp>
</>
)
}
export default App
