function Footer({ darkMode }){

    // const myStyle = {
    //     backgroundColor: 'rgba(0, 0, 0, 0.05)',
    // }

    return(
        
        <>
        <footer className={`text-center text-lg-start bg-${darkMode} text-muted`}>
        <div className="text-center p-4" style = {{backgroundColor : '#bcd4d8',fontWeight:'bold'}}>
            © 2023 Copyright: 
            <a className="text-reset fw-bold" href="https://www.linkedin.com/in/truongduongit" style={{textDecoration:'none'}}> Truong Duong Web Developer</a>
        </div>
        </footer>
        </>
    )
}

export default Footer;