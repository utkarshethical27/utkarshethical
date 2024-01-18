import React from 'react'
import Nav from '../../components/nav/nav'
import './contact.css'

export default function Contact() {
  return (
    <>
      <Nav />
      <center>
        <h1>Contact Form</h1>
        <form onSubmit={formSubmitted}>
          <div>
            <i className='fas fa-user'></i>
            <input name='name' required type='text' placeholder='Enter name' id='formName' />
          </div>
          <div>
            <i className='fas fa-envelope'></i>
            <input name='email' required type='email' placeholder='Enter email' id='email' />
          </div>
          <div>
            <i className='fas fa-message'></i>
            <textarea required placeholder='Enter message' id='message'></textarea>
          </div>
          <div >
            <input required type='submit' value='Submit' />
          </div>
        </form>
      </center>
    </>
  )
}

const formSubmitted = async (e) => {
  e.preventDefault()
  const name = document.querySelector('#formName').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  try {
    const res = await fetch('https://utethical.onrender.com/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })

    const result = await res.text();

    result === 'success'
      ? alert('Message sent successfully.')
      : alert('Message sending failed.');

    e.target.reset()
  } catch (error) {
    console.error(error)
    alert('Message sending failed.');
  }
}