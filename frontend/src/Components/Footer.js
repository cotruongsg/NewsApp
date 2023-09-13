function Footer(){    

    const footerStyle = {
        position: 'fixed',   // Set the position to fixed
        bottom: 0,           // Place it at the bottom
        width: '100%',       // Make it full-width
        backgroundColor: '#bcd4d8',
        fontWeight: 'bold',
        textAlign: 'center',
    };

    return(        
        <>
        <footer className={`text-center text-lg-start text-muted`} style={{ 'bottom': '0px', 'left': '0px', 'width': '100%' , position : 'fixed' , height : '60px'}}>
            <div className="text-center p-4" style = {{backgroundColor : '#bcd4d8',fontWeight:'bold'}}>
                © 2023 Copyright: 
                <a className="text-reset fw-bold" href="https://www.linkedin.com/in/truongduongit" style={{ textDecoration:'none' }}> Truong Duong Web Developer</a>
            </div>
        </footer>
        </>
    )
}

export default Footer;