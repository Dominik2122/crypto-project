import { Breadcrumbs, Link, LinkProps } from '@mui/material';
import React from 'react';
import { Link as ReactRouterLink, useMatches } from 'react-router-dom';

const RouterLink = (props: { to: string; replace?: boolean } & LinkProps) => (
  <Link {...props} component={ReactRouterLink as any} />
);
export const MainLayoutBreadCrumbs = () => {
  const matches = useMatches();
  const crumbs = matches
    .filter((match) => (match.handle as any)?.crumb)
    .map((match) => (match.handle as any)?.crumb(match.data));
  return crumbs?.length > 1 ? (
    <Breadcrumbs maxItems={2} aria-label="breadcrumb">
      {crumbs.map((crumb) => (
        <RouterLink key={crumb} underline="hover" color="inherit" to={crumb.link}>
          {crumb}
        </RouterLink>
      ))}
    </Breadcrumbs>
  ) : null;
};
