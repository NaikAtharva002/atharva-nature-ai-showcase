const Footer = () => {
  return (
    <footer
      className="py-10 px-6 md:px-12"
      style={{
        backgroundColor: "#0A0908",
        borderTop: "1px solid rgba(94,80,63,0.2)",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="label-caps text-[#5E503F]"
          style={{ fontSize: "0.6rem" }}
        >
          © 2026 Atharva Naik
        </p>
        <p
          className="label-caps text-[#5E503F]"
          style={{ fontSize: "0.6rem" }}
        >
          VIT Bhopal University · B.Tech CS (AI/ML)
        </p>
      </div>
    </footer>
  );
};

export default Footer;