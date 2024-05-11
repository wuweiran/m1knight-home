import {
  Button,
  SelectTabData,
  SelectTabEvent,
  Tab,
  TabList,
  TabValue,
  makeStyles,
  mergeClasses,
  tokens,
} from "@fluentui/react-components";
import { PanelLeftContractRegular } from "@fluentui/react-icons";
import React from "react";
import Service from "./content/Service.tsx";
import Contact from "./content/Contact.tsx";
import { useTranslation } from "react-i18next";
import Home from "./content/Home.tsx";

const useStyles = makeStyles({
  sideBar: {
    transitionProperty: "left",
    transitionDuration: tokens.durationSlow,
    transitionTimingFunction: tokens.curveEasyEase,
    backgroundColor: tokens.colorNeutralBackground1,
    borderRightWidth: "1px",
    borderRightStyle: "solid",
    borderRightColor: tokens.colorNeutralStroke2,
    "@media (min-width: 1140px)": {
      backgroundColor: undefined,
      borderRightWidth: 0,
    },
  },
});

const Content = () => {
  const style = useStyles();
  const { t } = useTranslation();

  const [selectedValue, setSelectedValue] = React.useState<TabValue>("home");

  const onTabSelect = (_: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
  };

  const onClickHideSideBar = () => {
    document.body.classList.remove("sidebar-visible");
  };

  return (
    <div className="wrap content-width">
      <aside className={mergeClasses("sidebar", style.sideBar)}>
        <div className="sidebar-content">
          <div className="offscreen-top">
            <Button
              icon={<PanelLeftContractRegular />}
              title={t("nav.hide side bar")}
              as="button"
              onClick={onClickHideSideBar}
              appearance="transparent"
              size="large"
            />
          </div>
          <nav>
            <TabList
              size="large"
              appearance="subtle"
              vertical
              selectedValue={selectedValue}
              onTabSelect={onTabSelect}
            >
              <Tab value="home">{t("nav.home")}</Tab>
              <Tab value="service">{t("nav.service")}</Tab>
              <Tab value="contact">{t("nav.contact")}</Tab>
            </TabList>
          </nav>
        </div>
      </aside>

      <main className="s-main">
        <div className="content">
          {selectedValue === "home" && <Home />}
          {selectedValue === "service" && <Service />}
          {selectedValue === "contact" && <Contact />}
        </div>
        <div className="toc" hidden={selectedValue === "home"}></div>
      </main>
    </div>
  );
};

export default Content;
