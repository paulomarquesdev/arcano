import { Container } from './styles'
import bannerImg from '../../assets/images/banner.png';

export default function Banner() {
    return (
        <Container>
            <img src={bannerImg} alt="imagem de banner principal" />
        </Container>
    );
};