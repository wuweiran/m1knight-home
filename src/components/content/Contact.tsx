import { Persona } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { Paragraph, Heading1, Heading2, Typography } from "../Typography.tsx";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Typography>
      <Heading1>{t("nav.contact")}</Heading1>
      <Paragraph>{t("contact.overview")}</Paragraph>
      <Heading2>{t("contact.contact person")}</Heading2>
      <Persona
        name={t("contact.ceo name")}
        secondaryText={t("contact.ceo")}
        tertiaryText={t("m1knight company name")}
        size="huge"
      />
    </Typography>
  );
};

export default Contact;
