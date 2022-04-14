import { StyledHeader, Nav, Logo } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Button } from "./styles/Button.styled"

export default function Header () {
    return(
        <StyledHeader >
            <Container>
            <Nav> 
                <Logo src='./images/logo.svg' alt='' />
                <Button>Teste de Graça</Button>
            </Nav>
            </Container>
        </StyledHeader>
    )
}