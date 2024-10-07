import '../navigation/Navigation.css'

export default function Navigation() {
    return (
    <section className='navigation'>
        <span className='logo'>Ilyushonok Karina</span>
        <ul className='links'>
            <li>
                <a href="#">About me</a>
            </li>
            <li>
                <a href="#portfolio">Showcase</a>
            </li>
            <li>
                <a href="#resume">Resume</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </section>
);
}
