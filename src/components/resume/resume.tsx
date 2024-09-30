import '../resume/resume.css'

export default function Resume(){
    return (
        <>
        <section className='tab'> 
            <h2 className="caption">Resume</h2>
            <div className="buttons_tab">
                <ul>
                <li className='btn'><a href='CV Karina Ilyushonok.pdf' download={'CV Karina Ilyushonok.pdf'}>Download as PDF</a></li>
                <li className='btn'><a href='CV Karina Ilyushonok.docx' download={'CV Karina Ilyushonok.docx'}>Download as .docx</a></li>
                </ul>
            </div>
            <div className="sub_caption"> 
            <h1>Educational projects</h1>
            <p>Projects and work that I did during my studies</p>
            </div>
            <ul className="list_work">
                <li className="work_terms">development of software for storing and processing specialized information and user interaction</li>
            </ul>
            <ul className="list_work">
                <li className="work_terms">Execution of reports according to general standards and additional requirements</li>
            </ul>
            <ul className="list_work">
                <li className="work_terms">Searching and processing publicly available information to determine the best solutions and tools to perform specific tasks</li>
            </ul>
        </section>
        </>
    )
}