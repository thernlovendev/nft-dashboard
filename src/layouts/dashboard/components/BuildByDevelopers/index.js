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
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function BuildByDevelopers({title, value, percent, dateRange}:{title: any; value: any; percent: any; dateRange: any}) {
  return (
    <Card >
      <SoftBox p={2} >
        <Grid container spacing={3} >
          <Grid item xs>
            <SoftBox display="flex" flexDirection="column">
              <SoftBox pt={0} mb={0.5}>
                <SoftTypography variant="body2" color="white" fontWeight="medium">
                  {title}
                  <SoftTypography variant="caption" color="text" fontWeight="medium" style={{float: 'right'}}>
                    {dateRange}
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftTypography variant="h5" fontWeight="bold" color="white" mt={0} mb={0} gutterBottom>
                ${value}
              </SoftTypography>
              <SoftBox mt={0} pt={0}>
                <SoftTypography variant="string" color="success" mr={1} sx={{fontSize: 14}} >
                  {percent} 
                </SoftTypography>
                <SoftTypography variant="string" color="text" sx={{fontSize: 14}}>
                  since last month
                </SoftTypography>
              </SoftBox>
            </SoftBox>
          </Grid>
          {/* <Grid item xs={12} lg={6}>
            <SoftTypography variant="caption" color="text" fontWeight="medium" style={{float: 'right'}}>
              {dateRange}
            </SoftTypography>
          </Grid> */}
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default BuildByDevelopers;
