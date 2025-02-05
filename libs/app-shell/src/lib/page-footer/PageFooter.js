import tw, { css } from 'twin.macro';
import React from 'react';
import { allianceLogoWhiteBase64 } from '@alliancegenome/shared-assets';
import { useRenderLink } from '../link-render-provider/LinkRenderProvider';
import PageFooterLinkGroup from './PageFooterLinkGroup';
import PageFooterLinkGroupLabel from './PageFooterLinkGroupLabel';
import sitemap from '../sitemap';
import PageFooterLink from './PageFooterLink';
import SocialIcon from './SocialIcon';
import { ReactComponent as FacebookIcon } from '../../assets/facebook-brands.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter-brands.svg';
import { ReactComponent as GitHubIcon } from '../../assets/github-brands.svg';

export function PageFooter(props) {
  const Link = useRenderLink();
  return (
    <footer
      tw="flex flex-col items-stretch bg-primary p-6 text-white"
      css={css({ '& a': tw`text-white` })}
    >
      <div tw="flex flex-col flex-wrap lg:max-h-60 lg:justify-evenly p-2">
        {sitemap.map(({ sub, label, route }) =>
          route === '/' ? null : (
            <PageFooterLinkGroup key={label}>
              <PageFooterLinkGroupLabel>
                {route ? <Link to={route}>{label}</Link> : label}
              </PageFooterLinkGroupLabel>
              {sub &&
                sub.map(({ label, route }) => (
                  <PageFooterLink key={label} to={route}>
                    {label}
                  </PageFooterLink>
                ))}
            </PageFooterLinkGroup>
          )
        )}
        <PageFooterLinkGroup>
          <PageFooterLinkGroupLabel>Connect With Us</PageFooterLinkGroupLabel>
          <PageFooterLink to={'https://www.facebook.com/AllianceOfGenomeResources'}>
            <SocialIcon IconComponent={FacebookIcon} /> Facebook
          </PageFooterLink>
          <PageFooterLink to={'https://twitter.com/alliancegenome'}>
            <SocialIcon IconComponent={TwitterIcon} /> Twitter
          </PageFooterLink>
          <PageFooterLink to={'https://github.com/alliance-genome'}>
            <SocialIcon IconComponent={GitHubIcon} /> GitHub
          </PageFooterLink>
        </PageFooterLinkGroup>
      </div>
      <div tw="self-center p-2">
        <Link to="/">
          <img
            alt="Alliance of Genome Resources logo"
            src={allianceLogoWhiteBase64}
            tw="object-contain h-12"
          />
        </Link>
      </div>
    </footer>
  );
}
export default PageFooter;
