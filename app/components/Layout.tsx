import { Link } from "@remix-run/react";
export function Layout(props: { children: React.ReactNode }) {
  return (
    <>
    <header>
      <h1>RemixTestApp</h1>
      <nav>
        <Link to="/">Home</Link>
        |
        <Link to="/about">About</Link>
        |
        <Link to="/with-server">With Server</Link>
      </nav>
    </header>
    <hr />
    <main>
      {props.children}
    </main>
    </>
  );
}