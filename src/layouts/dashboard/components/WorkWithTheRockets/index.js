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
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";



function WorkWithTheRockets({bgImage, collection, floor, totalFloor}:{bgImage: any; collection: any; floor: any; totalFloor: any;}) {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox position="relative" height="100%" p={0}>
        <SoftBox
          display="flex"
          flexDirection="column"
          height="100%"
          py={2}
          px={2}
          borderRadius="lg"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
          }}
        >
          <SoftBox mb={1} pt={1}>
            <SoftTypography variant="h6" color="white" fontWeight="medium">
              Spl Token Value
            </SoftTypography>
            <SoftTypography variant="h5" color="white" fontWeight="bold">
              $2000
            </SoftTypography>
          </SoftBox>
          <SoftBox mb={2}>
            {/* <SoftBox>
              <SoftTypography variant="body2" sx={{color:"#02DBC6"}}>
                Collection:
                <SoftTypography variant="caption" color="white">
                  {collection}
                </SoftTypography>
              </SoftTypography>
            </SoftBox> */}
            <SoftTypography variant="body2" sx={{color:"#02DBC6"}}>
            Collection: 
              <span style={{color:"#ffffff", marginLeft: '5px'}} >{collection}</span>
            </SoftTypography>
            <SoftTypography variant="body2" sx={{color:"#02DBC6"}}>
              Floor: 
              <span style={{color:"#ffffff", marginLeft: '5px'}} >{floor}</span>
            </SoftTypography>
            <SoftTypography variant="body2" sx={{color:"#02DBC6"}}>
              Total Floor Value: 
              <span style={{color:"#ffffff", marginLeft: '5px'}} >{totalFloor}</span>
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default WorkWithTheRockets;
