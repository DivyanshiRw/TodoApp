import React from 'react'

const Footer = () => {
    let footerStyle={
        position: "relative",
        top: "100vh",
        width: "100%"
    }
  return (
    <footer className='bg-dark text-light py-2' style={footerStyle}>
        <p className='text-center'>
            Copyright &copy; MyTodosList.com | All Rights Reserved | DR
        </p>

    </footer>
  )
}

export default Footer
