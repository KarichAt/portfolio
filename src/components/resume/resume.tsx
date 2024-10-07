import '../resume/resume.css'

export default function Resume(){
    return (
        <>
        <section className='tab container' id='resume'> 
            <h2 className="caption resume">Resume</h2>
            <div>
                <ul className='buttons_tab'>
                <li><a className='btn' href='CV Karina Ilyushonok.pdf' download={'CV Karina Ilyushonok.pdf'}>Download as PDF</a></li>
                <li><a className='btn' href='CV Karina Ilyushonok.docx' download={'CV Karina Ilyushonok.docx'}>Download as .docx</a></li>
                </ul>
            </div>
            <div className="sub_caption"> 
            <h1>Educational projects</h1>
            <p>Projects and work that I did during my studies</p>
            </div>
            <ul className="list">
                <li className="list_item">development of software for storing and processing specialized information and user interaction</li>
                <li className="list_item">Execution of reports according to general standards and additional requirements</li>
                <li className="list_item">Searching and processing publicly available information to determine the best solutions and tools to perform specific tasks</li>
            </ul>
            <div className="exp sub_caption">
                <ul className='two_cap'>
                    <li> <h1>Technical skills</h1>
                        <ul className='list'>
                            <li className="list_item">JavaScript</li>
                            <li className="list_item">TypeScripts</li>
                            <li className="list_item">React+Vite</li>
                            <li className="list_item">Sql</li>
                        </ul>
                    </li>
                    <li> <h1>Other skills</h1>
                        <ul className='list'>
                            <li className="list_item">...</li>
                            <li className="list_item">...</li>
                            <li className="list_item">...</li>
                        </ul>
                    </li>                    
                </ul>
            </div>
        </section>
        </>
    )
}