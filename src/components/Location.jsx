import "./Location.css";

function Location() {
  return (
    <section className="location-section">
      <h2>Tədbiir Yeri</h2>
      <div className="location-content">
        <div className="location-info">
          <h3>Mərasim & Resepsiya</h3>
          <p className="venue-name">Romance Palace</p>
          <p className="venue-address">Mehdi Abbasov</p>
          <p className="venue-contact">📞 +994 55 332 80 60</p>
        </div>
        <div className="location-map-placeholder">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3037.759325064352!2d49.9260485!3d40.4141822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403062f1a4e1d37b%3A0xd517cf695c47f2d5!2sRomance%20Palace!5e0!3m2!1sru!2saz!4v1764848098265!5m2!1sru!2saz"
            style={{ border: 0, width: '100%', height: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location;
