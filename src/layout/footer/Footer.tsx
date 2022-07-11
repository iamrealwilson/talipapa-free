import { ReactElement } from "react";
import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import AdbIcon from "@mui/icons-material/Adb";

const StyledFooter = styled(Grid)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#23c686",
  padding: "0 1.5rem",
  color: "#fff",
}));

const StyledFooterContent = styled(Grid)(({ theme }) => ({
  height: "15rem",
  padding: "2rem 0",
}));

const StyledCopyrightSection = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTop: "1px solid #fff",
  width: "100%",
  height: "4rem",
}));

const StyledTitles = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  fontWeight: "600",
}));

export const Footer = (): ReactElement => {
  return (
    <StyledFooter>
      <StyledFooterContent container>
        <Grid xs={0.8} display="flex" justifyContent="center">
          <AdbIcon />
        </Grid>
        <Grid xs={1} display="flex" justifyContent="center">
          <StyledTitles>About Us</StyledTitles>
        </Grid>
        <Grid xs={1} display="flex" justifyContent="center">
          <StyledTitles>Shop</StyledTitles>
        </Grid>
        <Grid xs={2.7}>
          <Grid>
            <StyledTitles>Recommend a Service Provider</StyledTitles>
            <StyledTitles>FAQs</StyledTitles>
          </Grid>
        </Grid>
        <Grid xs={1.5}>
          <Grid>
            <StyledTitles>Support</StyledTitles>
            <StyledTitles>Term of Use</StyledTitles>
            <StyledTitles>Privacy Policy</StyledTitles>
          </Grid>
        </Grid>
        <Grid xs={1.8} display="flex" justifyContent="center">
          <StyledTitles>Connect with us</StyledTitles>
        </Grid>
        <Grid xs={3}>
          <Grid>
            <StyledTitles>Download the App</StyledTitles>
            <Typography>Available on App Store ang Google Play</Typography>
          </Grid>
        </Grid>
      </StyledFooterContent>
      <StyledCopyrightSection>
        <Typography variant="h6">Copyright 2022 Talipapa</Typography>
      </StyledCopyrightSection>
    </StyledFooter>
  );
};

export default Footer;
