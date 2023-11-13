import { Container } from './styles';
import { AiFillLinkedin } from 'react-icons/ai'

export function Footer() {
    return(
        <Container>
        <p>por cris</p>
            <a href="https://www.linkedin.com/in/cristianvalim/" target="_blank">
            <AiFillLinkedin />
            </a>
        <p>e laís</p>
            <a href="https://www.linkedin.com/in/laissanseverino/" target="_blank">
            <AiFillLinkedin />
            </a>
        </Container>
    )
}