import React, { useCallback, useMemo, useState } from 'react';
import { Global } from '@emotion/react';
import tw from 'twin.macro';
import { Logo, getOrganizationById } from '@alliancegenome/shared-assets';
import Menu from './menu/Menu';
import LinkRenderProvider from './link-render-provider/LinkRenderProvider';
import LinkRenderDefault from './link-render-provider/LinkRenderDefault';
import MODThemeProvider from './modtheme-provider/MODThemeProvider';
import PageFooter from './page-footer/PageFooter';
import { ReactComponent as HamburgerIcon } from '../assets/bars-solid.svg';
import { ReactComponent as CloseIcon } from '../assets/times-solid.svg';

export function AppShell({
  children,
  renderLink = LinkRenderDefault,
  renderHeaderActions,
  mod,
}) {
  const organization = getOrganizationById(mod);
  const [isMenuOpen, setMenuOpen] = useState(false); // for small screens
  const handleToggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <LinkRenderProvider renderLink={renderLink}>
      <MODThemeProvider mod={mod}>
        <div tw="flex flex-col min-h-screen">
          <header tw="z-40 border-b">
            <div tw="flex flex-wrap items-center gap-x-4 mx-4 my-2">
              <button
                tw="lg:hidden text-gray-700 h-6 w-6"
                onClick={handleToggleMenu}
              >
                {isMenuOpen ? (
                  <CloseIcon tw="fill-current h-full" />
                ) : (
                  <HamburgerIcon tw="fill-current h-full" />
                )}
              </button>
              <a href="/" tw="h-10">
                <Logo tw="object-contain h-full" />
              </a>
              {organization ? (
                <div tw="flex items-center h-10 px-4">
                  <Logo id={mod} tw="object-contain h-full" />
                  <span tw="p-2 text-2xl font-medium hidden md:inline-block">
                    {organization.name}
                  </span>
                  <span tw="p-2 text-2xl font-medium md:hidden">
                    {organization.abbreviation}
                  </span>
                </div>
              ) : null}
              {renderHeaderActions && renderHeaderActions()}
            </div>
            <nav tw="lg:hidden flex bg-primary">
              {isMenuOpen ? <Menu /> : null}
            </nav>
            <nav tw="hidden lg:flex bg-primary">
              <Menu />
            </nav>
          </header>
          <main tw="flex-grow z-30">{children}</main>
          <PageFooter />
        </div>
      </MODThemeProvider>
    </LinkRenderProvider>
  );
}
export default AppShell;
