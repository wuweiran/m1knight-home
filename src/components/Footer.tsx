import { Divider, makeStyles, tokens } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: { backgroundColor: tokens.colorNeutralBackground3 },
});

const Footer = () => {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <footer className={styles.root}>
      <div className="content-width footer-content">
        <section className="footer-top flex">
          {t("m1knight company name")}
        </section>
        <Divider className="sep" />
        <section className="footer-bottom"> © Amobsi 2023 </section>
      </div>
    </footer>
  );
};

export default Footer;
