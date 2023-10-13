import { Heading1, Paragraph, Typography } from "../Typography.tsx";
import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();

  return (
    <Typography>
      <Heading1>{t("nav.service")}</Heading1>
      <Paragraph>{t("service.overview")}</Paragraph>
    </Typography>
  );
};

export default Service;
