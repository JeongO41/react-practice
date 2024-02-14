import reactImg from "../../assets/react-core-concepts.png";
import './Header.css';

const reactDescription = ['Fundamental','Crucial','Core'];
function genRandomInt(maxIndex){
    return Math.floor(Math.random() * (maxIndex+1));
}
function Header() {
    const description = reactDescription[genRandomInt(2)];

    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}
export default Header;
