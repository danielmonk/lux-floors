import React, { useState } from 'react'
import axios from 'axios';

const Contact = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      const [result, setResult] = useState(null);
    
      const sendEmail = event => {
        event.preventDefault();
        axios
         .post('/send', { ...state })
         .then(response => {
           setResult(response.data);
           setState({ name: '', email: '', subject: '', message: '' });
         })
         .catch(() => {
           setResult({ success: false,
            message: 'Something went wrong. Try again later'});
        });
    };
    
      const onInputChange = event => {
        const { name, value } = event.target;
    
        setState({
          ...state,
          [name]: value
        });
      };


    return(
    <section id="contact">
        <div className="inner">
            <section>
                <form name="Contact Form" method="post" action="/success">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Please enter your name" onChange={onInputChange} />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" placeholder="Please enter your email address" onChange={onInputChange} />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" placeholder="Please enter your message" onChange={onInputChange}></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">info@luxfloors.co.uk</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>+44 000000000</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>Address line 1<br />
                        Address line 2<br />
                        Address Line 3</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
    )
}

export default Contact
