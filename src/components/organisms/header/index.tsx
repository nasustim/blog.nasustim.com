import { Link } from "@/components/atoms/link";
import {
  containerStyle,
  h1Style,
  h2Style,
  linkIconStyle,
  linkListStyle,
  titleStyle,
} from "./index.css";
import { SITE_ORIGIN, SUB_TITLE, TITLE } from "@/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

type Props = {
  isTopPage?: boolean;
};
export const Header: FC<Props> = ({ isTopPage }) => (
  <header className={containerStyle}>
    <div className={titleStyle}>
      <Link to={new URL(!isTopPage ? "/" : "/#", SITE_ORIGIN)} noStyle={true}>
        <h1 className={h1Style}>{TITLE}</h1>
        <h2 className={h2Style}>{SUB_TITLE}</h2>
      </Link>
    </div>
    <div className={linkListStyle}>
      <Link to={new URL("/", "https://nasustim.com")}>
        <FontAwesomeIcon
          icon={faAddressCard}
          className={linkIconStyle}
          title="my portal web page"
        />
      </Link>
    </div>
  </header>
);
