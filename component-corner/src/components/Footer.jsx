import "./Footer.css";

function Footer({ text = "© 2026 Component Corner | Contact: info@componentcorner.com" }) {
  return (
    <footer className="footer">
      <p>{text}</p>
    </footer>
  );
}

export default Footer;
