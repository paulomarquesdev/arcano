import { Container } from './style';
import fbImg from '../../assets/images/fb.png';
import igImg from '../../assets/images/ig.png';
import twImg from '../../assets/images/tw.png';
import logoImg from '../../assets/images/logo.png';


export default function Footer() {

    return (
        <Container>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src={fbImg} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src={igImg} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src={twImg} alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src={logoImg} alt="" />
            </section>
            <section>
                <p>
                    Desenvolvido por Paulo Marques Dev.
                </p>
            </section>
        </Container>
    );
};