/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "features/LayoutContainers/DashboardLayout";

// Overview page components
import ProfileMenu from "layouts/profile/components/ProfileMenu";
import ProfileCard from "layouts/profile/components/ProfileCard";
import BasicInfo from "layouts/profile/components/BasicInfo";
import PasswordChange from "layouts/profile/components/PasswordChange";
import TwoFA from "layouts/profile/components/TwoFA";
import Sessions from "layouts/profile/components/Sessions";
import DeleteAccount from "layouts/profile/components/DeleteAccount";

// Images

import DashboardNavbar from "features/Navbars/DashboardNavbar";



function Overview() {
  return (
    <DashboardLayout>

      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>

        <Grid container spacing={3} >
          <Grid item xs={12} lg={4}>
              <ProfileMenu />
          </Grid>
          <Grid item xs={12} lg={8}>
            <SoftBox mb={3}>
              <Grid container spacing={3} >
                <Grid item xs={12} lg={12} id="profile">
                  <ProfileCard /> 
                </Grid>
                <Grid item xs={12} lg={12} id="basicInfo" >
                  <BasicInfo />
                </Grid>
                <Grid item xs={12} lg={12} id="passwordChange">
                  <PasswordChange />
                </Grid>
                <Grid item xs={12} lg={12} id="twoFA">
                  <TwoFA />
                </Grid>
                <Grid item xs={12} lg={12} id="sessions">
                  <Sessions />
                </Grid>
                <Grid item xs={12} lg={12} id="deleteAccount" >
                  <DeleteAccount />
                </Grid>
              </Grid>
            </SoftBox>
          </Grid>
        </Grid>

        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Overview;
