import { Consultation, Dvig, Footer, Nav, PainCard, SonyaPhoto, VideoCard } from '@/components/Site';

export default function Home() {
  return <>
    <Nav />
    <main>
      <section className="container hero">
        <div>
          <p className="eyebrow">Проект врача-невролога и альголога</p>
          <h1>Болит?<br/>Давайте разберёмся.</h1>
          <p className="lead">Простые объяснения, упражнения и современные подходы к лечению боли — без страха, медицинского канцелярита и обещаний чудес.</p>
          <div className="actions"><a className="btn btn-primary" href="/pain/neck">Начать заниматься</a><a className="btn btn-coral" href="#consult">Записаться на консультацию</a></div>
        </div>
        <div className="visual-card"><SonyaPhoto/><Dvig /></div>
      </section>
      <section className="container section"><h2>Что вас беспокоит?</h2><p>Выберите понятный раздел: там будут объяснения, упражнения, видео и признаки, когда лучше обратиться к врачу.</p><div className="grid grid-3">
        <PainCard title="Боль в шее" text="Не поворачивается, тянет, болит после сна или работы" href="/pain/neck" mark="↕" />
        <PainCard title="Боль в спине" text="Поясница, прострел, боль отдаёт в ногу" href="/pain/back" mark="↯" />
        <PainCard title="Головная боль" text="Мигрень, головная боль напряжения, затылок" href="/pain/headache" mark="◎" />
      </div></section>
      <section className="container section"><div className="section-card" style={{padding:56}}><h2>Начать бесплатно</h2><p>Брошюра — только часть сайта. Здесь будут материалы, которые помогают начать аккуратно и без перегруза.</p><div className="grid grid-4">
        {['Упражнения для шеи','Видео для шеи','Когда нужен врач','Мифы о боли'].map((x)=><div className="card" key={x}><h3>{x}</h3><p>Скоро материал</p></div>)}
      </div></div></section>
      <section className="container section"><h2>Видео Сони</h2><div className="grid grid-3"><VideoCard title="Почему болит шея?" category="Шея"/><VideoCard title="Прострелило поясницу" category="Спина"/><VideoCard title="Мигрень или ГБН?" category="Голова"/></div></section>
      <section className="container section"><div className="section-card split" style={{padding:56}}><div><h2>Софья Мамыкина</h2><p>Врач-невролог, алголог, ботулинотерапевт. Специализируется на диагностике и лечении болевых синдромов, головной боли, невралгий и заболеваний периферических нервов.</p><a className="btn btn-light" href="/about">Подробнее о Соне</a></div><div className="visual-card"><SonyaPhoto/></div></div></section>
      <Consultation />
    </main>
    <Footer />
  </>;
}
