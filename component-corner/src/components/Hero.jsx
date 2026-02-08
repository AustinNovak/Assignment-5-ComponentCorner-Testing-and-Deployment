import "./Hero.css";

function Hero({ title, subtitle, cta, image }) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <button>{cta}</button>
      </div>
    </section>
  );
}

export default Hero;
