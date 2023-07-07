import { Card, Grid, List, ListItem, Switch, TextField } from "@mui/material"
import SoftAvatar from "components/SoftAvatar"
import SoftBox from "components/SoftBox"
import SoftTypography from "components/SoftTypography"

import LukasAvatar from "assets/images/Lukas Thern Loven.png";
import SoftInput from "components/SoftInput";
import SoftSelect from "components/SoftSelect";
import SoftButton from "components/SoftButton";


function PasswordChange() {

    return (
        <Card sx={{p:4}} >

            <SoftBox>                
                <SoftTypography mb={4} variant="h5" fontWeight="medium" color="white">
                    Password change
                </SoftTypography>
            
                <SoftBox mb={1}>
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Current password
                    </SoftTypography>
                    <SoftInput sx={{mt:1}} type="password" placeholder="Current password" />
                </SoftBox>

                <SoftBox mb={1}>
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                        New password
                    </SoftTypography>
                    <SoftInput sx={{mt:1}} type="password" placeholder="New password" />
                </SoftBox>

                <SoftBox mb={1}>
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Confirm new password
                    </SoftTypography>
                    <SoftInput sx={{mt:1}} type="password" placeholder="Confirm new password" />
                </SoftBox>

                <SoftTypography mt={6} variant="h5" fontWeight="medium" color="white">
                    Password requirements
                </SoftTypography>
                <SoftTypography mt={1} variant="body2" color="text">
                    Please follow this guide for a strong password:
                </SoftTypography>
                <Grid container mb={1} >
                    <Grid item xs={12} lg={6} >
                        <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }} >
                            <SoftTypography variant="body2" color="text">
                                <ListItem sx={{ display: 'list-item' }}>
                                        One special characters
                                </ListItem>
                            </SoftTypography>
                            <SoftTypography variant="body2" color="text">
                                <ListItem sx={{ display: 'list-item' }}>
                                        Min 6 characters
                                </ListItem>
                            </SoftTypography>
                            <SoftTypography variant="body2" color="text">
                                <ListItem sx={{ display: 'list-item' }}>
                                        One number (2 are recommended)
                                </ListItem>
                            </SoftTypography>
                            <SoftTypography variant="body2" color="text">
                                <ListItem sx={{ display: 'list-item' }}>
                                        Change it often
                                </ListItem>
                            </SoftTypography>
                        </List>
                    </Grid>
                    <Grid item xs={12} lg={6} display="flex" alignItems="end" justifyContent="end" >
                        <SoftButton color="dark" variant="gradient" >Update Password</SoftButton>
                    </Grid>
                </Grid>

            </SoftBox>

        </Card>
    )

}

export default PasswordChange