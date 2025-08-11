import { useState, useEffect, type FC } from "react";
import {
  OgpCard,
  OgpCardLoading,
  OgpCardError,
} from "@/components/organisms/ogp-card";
import { fetchOgpData, isStandaloneUrl, type OgpData } from "@/utils/ogpUtils";

type LinkRendererProps = {
  href?: string;
  children?: React.ReactNode;
};

export const LinkRenderer: FC<LinkRendererProps> = ({ href, children }) => {
  const [ogpData, setOgpData] = useState<OgpData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const shouldRenderAsCard =
    href &&
    isStandaloneUrl(
      typeof children === "string" ? children : String(children),
      href,
    );

  useEffect(() => {
    if (!shouldRenderAsCard || !href) return;

    let isCancelled = false;

    const loadOgpData = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        const data = await fetchOgpData(href);
        if (!isCancelled) {
          if (data) {
            setOgpData(data);
          } else {
            setHasError(true);
          }
        }
      } catch (error) {
        if (!isCancelled) {
          console.warn("Failed to load OGP data:", error);
          setHasError(true);
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    loadOgpData();

    return () => {
      isCancelled = true;
    };
  }, [shouldRenderAsCard, href]);

  if (!href) {
    return <>{children}</>;
  }

  if (!shouldRenderAsCard) {
    const isExternalLink =
      href.startsWith("http") &&
      typeof window !== "undefined" &&
      !href.includes(window.location.hostname);
    return (
      <a
        href={href}
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  if (isLoading) {
    return <OgpCardLoading url={href} />;
  }

  if (hasError || !ogpData) {
    return <OgpCardError url={href}>{children}</OgpCardError>;
  }

  return <OgpCard ogpData={ogpData} />;
};
