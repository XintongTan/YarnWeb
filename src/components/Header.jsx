import { Link, NavLink } from 'react-router-dom';

const navigation = [
  { to: '/', label: 'Home' },
  { to: '/pattern-studio', label: 'Pattern Studio' },
  { to: '/tutorials', label: 'Tutorials' },
  { to: '/yarn-library', label: 'Yarn Library' },
  { to: '/color-inspiration', label: 'Color Inspiration' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Link className="brand" to="/">KNIT</Link>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {navigation.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
