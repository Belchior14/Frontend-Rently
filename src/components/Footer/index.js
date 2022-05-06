import "./footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="divFooter">
        <div className="cristinaFooter">
          <p>Cristina Quijano</p>
          <a
            className="logos"
            href="https://www.linkedin.com/in/cristinaquijanop/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-linkedin-square"></i>
          </a>
          <a
            className="logos"
            href="https://github.com/cristinaquijano"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-github"></i>
          </a>
        </div>
        <div>&</div>
        <div className="belchiorFooter">
          <p>Belchior Fontão</p>
          <a
            className="logos"
            href="https://www.linkedin.com/in/belchior-fontao/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-linkedin-square"></i>
          </a>
          <a
            className="logos"
            href="https://github.com/Belchior14"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
