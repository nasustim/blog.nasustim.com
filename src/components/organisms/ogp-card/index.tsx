import type { FC } from "react";
import type { OgpData } from "@/utils/ogp";
import {
  ogpCardStyle,
  ogpImageStyle,
  ogpContentStyle,
  ogpTitleStyle,
  ogpDescriptionStyle,
  ogpSiteNameStyle,
  ogpLoadingStyle,
  ogpErrorStyle,
} from "./index.css";

type Props = {
  ogpData: OgpData;
};

export const OgpCard: FC<Props> = ({ ogpData }) => {
  const { url, title, description, image, siteName } = ogpData;

  const displayTitle = title || url;
  const displaySiteName = siteName || new URL(url).hostname;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={ogpCardStyle}
    >
      {image && (
        <img
          src={image}
          alt={displayTitle}
          className={ogpImageStyle}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      )}
      <div className={ogpContentStyle}>
        <div className={ogpTitleStyle}>{displayTitle}</div>
        {description && (
          <div className={ogpDescriptionStyle}>{description}</div>
        )}
        <div className={ogpSiteNameStyle}>{displaySiteName}</div>
      </div>
    </a>
  );
};

export const OgpCardLoading: FC<{ url: string }> = ({ url }) => (
  <div className={ogpLoadingStyle}>
    Loading preview for {new URL(url).hostname}...
  </div>
);

export const OgpCardError: FC<{ url: string; children: React.ReactNode }> = ({
  url,
  children,
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={ogpErrorStyle}
  >
    {children}
  </a>
);
