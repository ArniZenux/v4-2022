import { NavLink } from 'react-router-dom';

import LL from './Layout.module.scss';

export function Layout({ children, footer }) {
  return (
    <div className={LL.layout}>
      <header className={LL.layout__header}>
        <ul>
          <li><NavLink to="/">Viðburðalisti</NavLink></li>
          <li><NavLink to="/innskra">Innskrá</NavLink></li>
          <li><NavLink to="/nyskra">Nýskrá</NavLink></li>
          <li className={LL.layout__little} >Enginn notandi innskráður</li>
        </ul>
      </header>

      <main className={LL.layout__main}>
        {children}
      </main>

      <footer className={LL.layout__footer}>{footer}</footer>
    </div>
  )
}