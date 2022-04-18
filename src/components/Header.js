import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { Button } from "./styles/Button.styled"

export default function Header () {
    return(
        <StyledHeader >
            <Container>
            <Nav> 
                <Logo src='./images/logo.svg' alt='' />
                <Button>Teste de Graça</Button>
            </Nav>
            <Flex>
                <div>
                    <h1>
                        Construa a Comunidade que seus Fãs irão Amar!
                    </h1>

                    <p>
                        Huddle reimagina a forma que nós construímos comunidades. Voce tem uma voz,
                        mas também sua audiência possui uma. Crie conexões com seus usuários conforme
                        voce se envolve em uma discussão genuína.
                    </p>

                    <Button bg='#ff0099' color='#fff'>
                        Comece a Utilizar de Graça
                    </Button>
                </div>

                <Image src='./images/illustration-mockups.svg' alt=''>

                </Image>
            </Flex>
            </Container>
        </StyledHeader>
    )
}