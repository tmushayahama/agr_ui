import React, { useMemo } from 'react';
import tw from 'twin.macro';
import Link from 'next/link';
import { AppShell } from '@wormbase/agr-app-shell';

const MODS = ['sgd', 'wormbase', 'flybase', 'zfin', 'mgi', 'rgd', 'go'];

export function Index({ mod }) {
  const renderLink = useMemo(
    () => ({ to, closeMenu, children }) => {
      const [_, subpath, segment] = /^\/members\/((\w+).*)/i.exec(to) || [];
      if (segment && MODS.includes(segment)) {
        return (
          <Link href={subpath} passHref>
            <a onClick={closeMenu}>{children}</a>
          </Link>
        );
      } else {
        return <a href={to}>{children}</a>;
      }
    },
    []
  );

  return (
    <AppShell renderLink={renderLink} mod={mod}>
      <h1 tw="text-5xl">Welcome to {mod}</h1>
      <main tw="max-w-screen-xl px-3 md:px-10 py-10 mx-auto grid lg:grid-cols-3 gap-10">
        <section tw="lg:col-span-2">
          <h2 tw="text-3xl">About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section tw="lg:row-span-3">
          <h2 tw="text-3xl">Resources</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section>
          <h2 tw="text-3xl">News</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section>
          <h2 tw="text-3xl">Meetings</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </main>
      <footer>// Footer</footer>
    </AppShell>
  );
}

export async function getStaticProps({ params = {} }) {
  const { mod } = params;
  return {
    props: {
      mod,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: MODS.map((mod) => ({
      params: { mod },
    })),
    fallback: false,
  };
}

export default Index;
