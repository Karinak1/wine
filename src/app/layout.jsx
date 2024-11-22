import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1> WINES</h1>
        <nav className="link">
          <Link className="nav-link" href="/">
            Home
          </Link>
          <br />
          <Link className="nav-link" href="/post">
            Posts
          </Link>
          <br />
          <Link className="nav-link" href="/post/new">
            New Post
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
