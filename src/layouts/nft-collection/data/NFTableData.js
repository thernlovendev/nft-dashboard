import React from "react";
/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import lizard from "assets/images/lizard.png";
import seal from "assets/images/seal.png";
import walter from "assets/images/walter.jpeg";
import wizard from "assets/images/wizard.webp";

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Tooltip } from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';
import { FaMoneyCheck } from 'react-icons/fa';
import DropDown from "features/DropDow";
import SoftButton from "components/SoftButton";
import CloseIcon from '@mui/icons-material/Close';

function User({ image, name }) {
  
  const [checked, setChecked] = React.useState(true);

  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <Checkbox size="small" checked={checked} onChange={()=>setChecked(!checked)} />
      </SoftBox>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" sx={{borderRadius: 0}} />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium" color="white">
          {name}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}


function Trend({value}){
  return (
  <SoftBox display="flex" flexDirection="row" alignItems="center" >
      <RocketLaunchIcon color="success" fontSize="small" />
      <SoftTypography variant="body2" color="success">
        {value}
      </SoftTypography>
  </SoftBox>
  )
}

function Status ({text}){
  return (
    <SoftBadge  badgeContent={text} color="success" size="xs" container />
  )
}

function Action (){

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <SoftBox display="flex" flexDirection="row" alignItems="center" >
          <FaMoneyCheck color="dark" fontSize="large" style={{marginLeft: 10, cursor: "pointer"}} onClick={handleClickOpen} />
          <Tooltip title="Preview NFT">
            <IconButton>
              <VisibilityIcon color="dark" fontSize="medium" style={{marginRight: 10}} />
            </IconButton>
          </Tooltip>
      </SoftBox>
      <Dialog
            fullWidth={true}
            maxWidth="xs"
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
        <DialogTitle sx={{mt:0, mb:2}} id="responsive-dialog-title" color="inherit">
          {"Sell NFT"}
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
            <DropDown options={['ETH', 'SOL', 'BTC']} />
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
    </React.Fragment>
  )
}

const collectionTableData = {
  columns: [
    { name: "name", align: "left" },
    { name: "boughtAt", align: "left" },
    { name: "trend", align: "center" },
    { name: "value", align: "center" },
    { name: "quantity", align: "center" },
    { name: "status", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      name: <User image={lizard} name="Narentines" />,
      boughtAt : "$236",
      trend: <Trend value="23%" />,
      value: "$1,345",
      quantity: 2,
      status: <Status text="trending"/>,
      action: <Action />,
    },
    {
      name: <User image={seal} name="Artic Frenz" />,
      boughtAt : "$632",
      trend: <Trend value="13%" />,
      value: "$1,125",
      quantity: 1,
      status: <Status text="trending"/>,
      action: <Action />,
    },
    {
      name: <User image={walter} name="BLXCK-FLIP" />,
      boughtAt : "$236",
      trend: <Trend value="23%" />,
      value: "$1,345",
      quantity: 2,
      status: <Status text="trending"/>,
      action: <Action />,
    },
    {
      name: <User image={wizard} name="Angry DAO" />,
      boughtAt : "$236",
      trend: <Trend value="23%" />,
      value: "$1,345",
      quantity: 2,
      status: <Status text="trending"/>,
      action: <Action />,
    }
  ],
};

export default collectionTableData;
