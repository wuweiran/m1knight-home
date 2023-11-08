import { makeStyles, typographyStyles, Text } from "@fluentui/react-components";
import { tokens } from "@fluentui/react-theme";

const useTypographyStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },

  heading1: {
    ...typographyStyles.display,
    marginBottom: tokens.spacingVerticalXXL,
  },

  heading2: {
    ...typographyStyles.title1,
    marginTop: tokens.spacingVerticalL,
    marginBottom: tokens.spacingVerticalXXL,
  },

  heading3: {
    ...typographyStyles.title3,
    marginBottom: tokens.spacingVerticalXXL,
  },

  paragraph: {
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightRegular,
    lineHeight: tokens.lineHeightBase500,
    marginBottom: tokens.spacingVerticalXXL,
  },
});

export const Typography = (props: React.PropsWithChildren) => {
  const styles = useTypographyStyles();

  return <article className={styles.root}>{props.children}</article>;
};

export const Heading1 = (props: React.PropsWithChildren) => {
  const styles = useTypographyStyles();

  return (
    <Text as="h1" className={styles.heading1}>
      {props.children}
    </Text>
  );
};

export const Heading2 = (props: React.PropsWithChildren) => {
  const styles = useTypographyStyles();

  return (
    <Text as="h2" className={styles.heading2}>
      {props.children}
    </Text>
  );
};

export const Heading3 = (props: React.PropsWithChildren) => {
  const styles = useTypographyStyles();

  return (
    <Text as="h3" className={styles.heading3}>
      {props.children}
    </Text>
  );
};

export const Paragraph = (props: React.PropsWithChildren) => {
  const styles = useTypographyStyles();

  return (
    <Text as="p" className={styles.paragraph}>
      {props.children}
    </Text>
  );
};
