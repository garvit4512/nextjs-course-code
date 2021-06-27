import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <a href='/'>All Meetups</a>
          </li>
          <li>
            <a href='/new-meetup'>Add New Meetup</a>
          </li>
          <li>
            <Link href='/test'>Test</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
