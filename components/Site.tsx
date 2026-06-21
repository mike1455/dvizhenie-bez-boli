import Link from 'next/link';

export function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="logo">Движение без боли</Link>
      <div className="nav-links">
        <Link href="/pain">Боль</Link>
        <Link href="/pain/neck">Упражнения</Link>
        <Link href="/videos">Видео</Link>
        <Link href="/about">Соня</Link>
      </div>
      <a className="btn btn-primary" href="#consult">Записаться</a>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container split">
        <div>
          <h3>Движение без боли</h3>
          <p>Образовательный проект о боли, движении и спокойном отношении к телу.</p>
          <p>Материалы сайта носят образовательный характер и не заменяют очную консультацию врача.</p>
        </div>
        <div className="tags">
          <Link className="tag" href="/pain">Библиотека боли</Link>
          <Link className="tag" href="/videos">Видео</Link>
          <Link className="tag" href="/about">О Соне</Link>
        </div>
      </div>
    </footer>
  );
}

export function Dvig() { return <div className="dvig" aria-label="Двиг" />; }

export function SonyaPhoto() {
  return (
    <div className="sonya-photo-wrap">
      <img className="sonya-photo" src="/images/sonya.png" alt="Софья Мамыкина" />
    </div>
  );
}


export function Consultation() {
  return (
    <section id="consult" className="container section">
      <div className="cta">
        <div>
          <h2>Записаться на консультацию</h2>
          <p>Кнопка на сайте может открывать окно с контактами. Для MVP оставляем простой и понятный блок записи.</p>
          <a className="btn btn-coral" href="tel:+74952803550">Позвонить</a>
        </div>
        <div className="modal-card">
          <h3>Контакты для записи</h3>
          <p>При записи уточните, что хотите попасть к Софье Алексеевне Мамыкиной.</p>
          <div className="contact-box">+7 (495) 280-35-50</div>
          <div className="contact-box">contact-center@fccps.ru</div>
        </div>
      </div>
    </section>
  );
}

export function VideoCard({ title, category }: { title: string; category: string }) {
  return <div className="card"><div className="video-thumb"><div className="play">▶</div></div><h3>{title}</h3><p>{category} · скоро видео</p></div>;
}

export function PainCard({ title, text, href, mark = '•' }: { title: string; text: string; href: string; mark?: string }) {
  return <Link className="card" href={href}><div className="icon">{mark}</div><h3>{title}</h3><p>{text}</p><b style={{color:'var(--teal-dark)'}}>Открыть раздел →</b></Link>;
}
