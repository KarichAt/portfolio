import '../navigation/Navigation.css'

export default function Navigation() {
    return (
    <section className='navigation'>
        <span>Ilyushonok Karina</span>
        <ul className='links'>
            <li className='hide'>
                <a href="#">About me</a>
            </li>
            <li>
                <a href="#showcase">Showcase</a>
            </li>
            <li>
                <a href="#resume">Resume</a>
            </li>
            <li className='hide'>
                <a href="#">Contact</a>
            </li>
        </ul>
    </section>
);
}
