import s from './Layout.module.scss';
import { NavLink } from 'react-router-dom';

export function Layout({ title, children, footer }) {
  return (
    <div className={s.layout}>
      <header className={s.layout__header}>
        <ul>
          <li><NavLink to="/">Viðburðalisti</NavLink></li>
          <li><NavLink to="/innskra">Innskrá</NavLink></li>
          <li><NavLink to="/nyskra">Nýskrá</NavLink></li>
        </ul>
      </header>

      <main className={s.layout__main}>
        {children}
      </main>

      <footer className={s.layout__footer}>{footer}</footer>
    </div>
  )
}