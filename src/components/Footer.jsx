function Footer(props) {

  const currentDate = new Date
  const currentYear = currentDate.getYear()

  const aboutText = "We are a proud and independent diner serving the best food for champions!"

  return (
    <div className="footer">

      {/* left side section */}
      <div className="footer-section">
        <h4>About</h4>
        <p>{ aboutText }</p>
      </div>

      {/* center section */}

      <div className="footer-section">
        <h4>Contact Us:</h4>
        <a href="#">123-456-7890</a>
        <a href="#">info@championsdiner.com</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </div>

      {/* right side section */}
      <div className="footer-section">
        <p>©{currentYear}</p>
        <p>All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
