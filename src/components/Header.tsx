import logo from "/m1knight.svg";
import {
  Select,
  Image,
  SelectOnChangeData,
  tokens,
  makeStyles,
  Button,
} from "@fluentui/react-components";
import { PanelLeftExpandRegular, Globe24Regular } from "@fluentui/react-icons";
import React from "react";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow4,
  },
  selectLanguage: {
    display: "flex",
    alignItems: "center",
    columnGap: tokens.spacingHorizontalS,
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
    void i18n.changeLanguage(selected).then(() => {
      setSelectedLanguage(selected);
    });
  };

  const onClickShowSideBar = () => {
    document.body.classList.add("sidebar-visible");
  };

  return (
    <header className={styles.root}>
      <nav className="nav content-width">
        <div className="toggler">
          <Button
            icon={<PanelLeftExpandRegular />}
            title={t("nav.show side bar")}
            as="button"
            onClick={onClickShowSideBar}
            appearance="transparent"
            size="large"
          />
        </div>
        <div className="flex links">
          <Image
            src={logo}
            height={32}
            shape="rounded"
            alt={t("m1knight logo")}
            title={t("m1knight logo")}
          />
          <div className={styles.selectLanguage}>
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
