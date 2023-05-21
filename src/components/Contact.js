import "./Contact.css"


const Contact =()=>{
    return(
        <>
        <div>
        <h1 className="con-head">Contact</h1>
        <form className="con-form"
            name="form"
            id="contactForm"
            action="https://formspree.io/f/mrgvborn"
            method="POST"
          >
             
                <input
                  className="field"
                  name="name"
                  type="text"
                  id="contactName"
                  placeholder="Name"
                  minlength="2"
                  required
                />
              
                <input
                  className="field"
                  name="email"
                  type="email"
                  id="contactEmail"
                  placeholder="Email"
                  required
                />
              
                <input
                  className="field"
                  name="_subject"
                  type="text"
                  id="contactSubject"
                  placeholder="Subject"
                />
             
                <input
                  className="field"
                  name="message"
                  type="message"
                  id="contactMessage"
                  placeholder="Message"
                  required
                ></input>
              
              <button type="submit" className="sub-btn">Submit</button>

          </form>
          <footer style={{color:"white",textAlign:"center"}}>
        Designed By: Charandeep Singh Chawla | &copy;2023</footer>
        </div>
        </>
    )
}

export default Contact;

