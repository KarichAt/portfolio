 import '../contact/contact.css'

export default function Contact() {
    return(
    <>
    <section className='contact container'>
        <div className="caption">Contact me</div>
        <form action="send.php" method='post'>
        <ul className="two_caption sub_caption">
            <li>
                <div className='text'>
                    <textarea  name="fio" id="" className='textbox email' placeholder='Insert your mail'></textarea>
                </div>
            </li>
            <li>
                <div>
                    <input type='text' name="adress" id="" className='textbox inputbox' placeholder='Your email' required></input>
                    <a href="#" className='btn sub'>Submit</a>
                </div>
            </li>
        </ul>
        </form>
    </section>
    </>
)}