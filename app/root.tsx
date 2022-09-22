import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link
} from "@remix-run/react";

import GlobalStyle from "~/styles/style.css";

export const links = () => ([
  { rel: 'stylesheet', href: GlobalStyle }
])

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Link to="">Index</Link>
          <Link to={'a'}>A</Link>
          <Link to={'b'}>B</Link>
          <Link to={'c'}>C</Link>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
