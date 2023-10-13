import logo from "/m1kight.svg";
import {
  Select,
  Image,
  SelectOnChangeData,
  tokens,
  makeStyles,
} from "@fluentui/react-components";
import {
  PanelLeftExpand24Regular,
  Globe24Regular,
} from "@fluentui/react-icons";
import React from "react";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow4,
  },
});

const Header = () => {
  const styles = useStyles();
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>(
    i18n.language
  );

  const onLanguageSelect = (_: unknown, data: SelectOnChangeData) => {
    const selected = data.value;
    i18n.changeLanguage(selected);
    setSelectedLanguage(selected);
  };

  const onClickShowSideBar = () => {
    document.body.classList.add("sidebar-visible");
  };

  return (
    <header className={styles.root}>
      <nav className="nav content-width">
        <button
          className="toggler"
          title={t("nav.show side bar")}
          type="button"
          onClick={onClickShowSideBar}
        >
          <PanelLeftExpand24Regular />
        </button>
        <div className="flex links">
          <Image src={logo} height={100} title={t("m1kight logo")} />
          <div className="select-lang">
            <Globe24Regular />
            <Select
              value={selectedLanguage}
              onChange={onLanguageSelect}
              title={t("select lang")}
            >
              <option value="en">{t("lang.en")}</option>
              <option value="zh">{t("lang.zh")}</option>
            </Select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
