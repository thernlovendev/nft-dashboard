import { Card, Grid, Switch } from "@mui/material"
import SoftAvatar from "components/SoftAvatar"
import SoftBadge from "components/SoftBadge"
import SoftBox from "components/SoftBox"
import SoftButton from "components/SoftButton"
import SoftTypography from "components/SoftTypography"


function TwoFA() {

    return (
        <Card sx={{p:2}} >

            <SoftTypography mb={4} variant="h5" fontWeight="medium" color="white">
                Two-factor authentication
                <SoftBadge badgeContent="enabled" color="success" size="sm" container sx={{float: 'right'}} />
            </SoftTypography>
            
            <Grid container spacing={3} sx={{mb:2}}>
                <Grid item >
                    <SoftBox height="100%" mt={0.5} lineHeight={1}>
                        <SoftTypography variant="body2" color="white">
                            Security keys
                        </SoftTypography>
                    </SoftBox>
                </Grid>
                <Grid item sx={{ ml: "auto" }} alignItems="center">
                    <SoftBox mt={0.25}>
                        <SoftTypography variant="button" color="text" >
                            No Security Keys
                        </SoftTypography>
                        <SoftButton  sx={{ml:2}} variant="outlined" color="dark" size="small" >Add</SoftButton>
                    </SoftBox>
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{mb:2}}>
                <Grid item >
                    <SoftBox height="100%" mt={0.5} lineHeight={1}>
                        <SoftTypography variant="body2" color="white">
                            SMS number
                        </SoftTypography>
                    </SoftBox>
                </Grid>
                <Grid item sx={{ ml: "auto" }} alignItems="center">
                    <SoftBox mt={0.25}>
                        <SoftTypography variant="button" color="text" >
                            +4012374423
                        </SoftTypography>
                        <SoftButton  sx={{ml:2}} variant="outlined" color="dark" size="small" >Edit</SoftButton>
                    </SoftBox>
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{mb:2}}>
                <Grid item >
                    <SoftBox height="100%" mt={0.5} lineHeight={1}>
                        <SoftTypography variant="body2" color="white">
                            Authenticator app
                        </SoftTypography>
                    </SoftBox>
                </Grid>
                <Grid item sx={{ ml: "auto" }} alignItems="center">
                    <SoftBox mt={0.25}>
                        <SoftTypography variant="button" color="text" >
                            Not Configured
                        </SoftTypography>
                        <SoftButton  sx={{ml:2}} variant="outlined" color="dark" size="small" >Set Up</SoftButton>
                    </SoftBox>
                </Grid>
            </Grid>

        </Card>
    )

}

export default TwoFA