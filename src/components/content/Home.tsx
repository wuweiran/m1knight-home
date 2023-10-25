import { Text, makeStyles, tokens } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  welcome: {
    fontSize: tokens.fontSizeBase400,
    lineHeight: tokens.lineHeightBase400,
    fontWeight: tokens.fontWeightBold,
    textTransform: "uppercase",
    color: tokens.colorNeutralForeground1,
    marginTop: tokens.spacingVerticalM,
    marginBottom: tokens.spacingVerticalM,
  },
  brand: {
    fontSize: "80px",
    lineHeight: "110px",
    fontWeight: tokens.fontWeightBold,
    color: tokens.colorNeutralForeground1,
    marginBottom: tokens.spacingVerticalM,
  },
  slogan: {
    fontSize: tokens.fontSizeHero900,
    lineHeight: tokens.lineHeightHero900,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
});

const Home = () => {
  const styles = useStyles();

  const { t } = useTranslation();

  return (
    <div className="home-content-block">
      <Text as="p" className={styles.welcome}>
        {t("home.welcome to")}
      </Text>
      <Text as="h1" className={styles.brand}>
        M1Knight
      </Text>
      <Text as="h2" className={styles.slogan}>
        {t("home.slogan")}
      </Text>
    </div>
  );
};

export default Home;
