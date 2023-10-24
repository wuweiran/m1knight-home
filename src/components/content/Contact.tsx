import { Persona, makeStyles, tokens } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { Paragraph, Heading1, Heading2, Typography } from "../Typography.tsx";

const useStyles = makeStyles({
  persona: {
    marginBottom: tokens.spacingVerticalXXL,
  },
});

const Contact = () => {
  const styles = useStyles();

  const { t } = useTranslation();

  return (
    <Typography>
      <Heading1>{t("nav.contact")}</Heading1>
      <Paragraph>{t("contact.overview")}</Paragraph>
      <Heading2>{t("contact.contact info")}</Heading2>
      <Persona
        className={styles.persona}
        name={t("contact.ceo name")}
        secondaryText={t("contact.ceo")}
        tertiaryText={t("m1knight company name")}
        size="huge"
      />
      <Paragraph>{t("contact.wechat")}</Paragraph>
      <Paragraph>{t("contact.tel")}</Paragraph>
    </Typography>
  );
};

export default Contact;
