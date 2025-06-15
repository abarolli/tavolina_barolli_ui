export default function ReservationPage() {
  return (
    <section className="content__section">
      <h2>Reservations</h2>

      <h3>Phone number:</h3>
      <a
        className="link link--underlined"
        href="tel:+16234283109"
        target="_blank"
      >
        (623) 428-3109
      </a>

      <h3>Address:</h3>
      <a
        className="link link--underlined"
        href="https://maps.app.goo.gl/sGFS8K35XwtQWMzj6"
        target="_blank"
      >
        <p>14420 N 39th Way</p>
        <p>Phoenix, AZ</p>
        <p>85032</p>
      </a>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6645.021747695565!2d-111.99679959999999!3d33.61799339999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b73d27f840137%3A0x5ae154ae82b7dd90!2s14420%20N%2039th%20Way%2C%20Phoenix%2C%20AZ%2085032!5e0!3m2!1sen!2sus!4v1749965825589!5m2!1sen!2sus"
        loading="lazy"
        className="google-maps-iframe"
      ></iframe>
    </section>
  );
}
