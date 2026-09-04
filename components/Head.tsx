import React from 'react';
import Head from 'next/head';

type Props = {
  title?: string
  description?: string
  canonicalPath?: string | null
  themeColor?: string
  noIndex?: boolean
  socialImage?: {
    path: string
    alt: string
    width: number
    height: number
  }
};

const siteUrl = 'https://aab.is';

export const PageHead = function PageHead({
  title,
  description,
  canonicalPath = '/',
  themeColor = '#1c1c20',
  noIndex = false,
  socialImage,
}: Props) {
  const resolvedTitle = title || 'Syed Aabis Akhtar';
  const resolvedDescription = description || 'Aabis builds across aerospace, software, and startups.';
  const canonicalUrl = canonicalPath ? new URL(canonicalPath, siteUrl).toString() : null;
  const socialImageUrl = socialImage ? new URL(socialImage.path, siteUrl).toString() : null;

  return (
    <Head>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="theme-color" content={themeColor} />
      <meta name="color-scheme" content={themeColor === '#1c1c20' ? 'dark' : 'light'} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Syed Aabis Akhtar" />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {socialImage && socialImageUrl && (
        <>
          <meta property="og:image" content={socialImageUrl} />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content={String(socialImage.width)} />
          <meta property="og:image:height" content={String(socialImage.height)} />
          <meta property="og:image:alt" content={socialImage.alt} />
        </>
      )}
      <meta name="twitter:card" content={socialImageUrl ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      {socialImageUrl && <meta name="twitter:image" content={socialImageUrl} />}
      {socialImage && socialImageUrl && (
        <meta name="twitter:image:alt" content={socialImage.alt} />
      )}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
    </Head>
  );
};
