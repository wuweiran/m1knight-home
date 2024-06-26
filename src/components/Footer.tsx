import { Divider, makeStyles, tokens } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: { backgroundColor: tokens.colorNeutralBackground3 },
  divider: {
    marginTop: tokens.spacingVerticalXXL,
    marginBottom: tokens.spacingVerticalXXL,
  },
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
        <Divider className={styles.divider} />
        <section className="footer-bottom"> © Amobsi 2024 </section>
      </div>
    </footer>
  );
};

export default Footer;
