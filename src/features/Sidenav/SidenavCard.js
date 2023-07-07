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
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// Soft UI Dashboard React components
import SoftButton from "components/SoftButton";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Custom styles for the SidenavCard
import { card, cardContent, cardIconBox, cardIcon } from "features/Sidenav/styles/sidenavCard";

// Soft UI Dashboard React context
import { useSoftUIController } from "context";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import SoftSelect from "components/SoftSelect";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function SidenavCard() {
  const [controller] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })} >
      <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
        <SoftBox
          bgColor="white"
          width="2rem"
          height="2rem"
          borderRadius="md"
          shadow="md"
          mb={2}
          sx={cardIconBox}
        >
          <Icon fontSize="medium" sx={(theme) => cardIcon(theme, { sidenavColor })} >
            language
          </Icon>
        </SoftBox>
        <SoftBox lineHeight={1}>
          <SoftTypography variant="h3" color="white" align="center" >
            2,401.02
          </SoftTypography>
          <SoftBox mb={1.825} mt={-1} align="center">
            <SoftTypography variant="caption" color="white" fontWeight="medium" align="center" >
              ETH
            </SoftTypography>
          </SoftBox>
          <SoftButton
            size="small"
            color="white"
            fullWidth
            onClick={handleClickOpen}
          >
            &gt; CHANGE CRYPTO
          </SoftButton>
        </SoftBox>
      </CardContent>

      <Dialog
            fullWidth={true}
            maxWidth="xs"
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
        <DialogTitle sx={{mt:0, mb:2}} id="responsive-dialog-title" color="inherit">
          {"Change Crypto Currency"}
          <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <SoftSelect values={["Bitcoin", "Solana", "Etherreum", "Tether"]} select="Bitcoin" />
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{p:2}} >
          <SoftButton sx={{ml:1}} variant="gradient" color="secondary" onClick={handleClose} >
            Close
          </SoftButton>
          <SoftButton sx={{ml:1}} variant="gradient" color="primary" onClick={handleClose} autoFocus >
            Save Changes
          </SoftButton>
        </DialogActions>
      </Dialog>

    </Card>
  );
}

export default SidenavCard;
