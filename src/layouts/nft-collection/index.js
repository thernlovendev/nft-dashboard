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

import React from "react";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "features/LayoutContainers/DashboardLayout";
import DashboardNavbar from "features/Navbars/DashboardNavbar";
import Table from "features/Tables/Table";

// Data
import NFTableData from "layouts/nft-collection/data/NFTableData";
import SoftInput from "components/SoftInput";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, IconButton, InputLabel, MenuItem, Select } from "@mui/material";
import SoftSelect from "components/SoftSelect";
import SoftButton from "components/SoftButton";
import CloseIcon from '@mui/icons-material/Close';
import DropDown from "features/DropDow";



function Tables() {
  const { columns, rows } = NFTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card sx={{p: 3}}  >
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h5" color="white">NFT Collection</SoftTypography>
            </SoftBox>
            <SoftBox pr={1} display="flex" flexDirection="row">
            <Grid container spacing={3}>
              <Grid item xs={12} lg={4} display="flex" flexDirection="row" alignItems="center">
              <FormControl >
                <SoftSelect values={[5, 10, 15, 20, 25]} select={5} />
              </FormControl>  
                <SoftTypography ml={2} variant="body2" color="dark" >
                  entries per page
                </SoftTypography>
              </Grid>
              <Grid item xs={12} lg={5}>
              </Grid>
              <Grid item xs={12} lg={3}>
                <SoftInput
                  placeholder="Search..."
                />
              </Grid>
            </Grid>
              
            
            </SoftBox>
            
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </SoftBox>
            
            <SoftTypography mt={3} variant="body2" color="dark">
              Showing 1 to 4 of 4 entries
            </SoftTypography>
            

          </Card>
        </SoftBox>


      </SoftBox>

    </DashboardLayout>
  );
}

export default Tables;
