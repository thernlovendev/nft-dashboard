import { Card, Grid, Switch } from "@mui/material"
import SoftAvatar from "components/SoftAvatar"
import SoftBadge from "components/SoftBadge"
import SoftBox from "components/SoftBox"
import SoftButton from "components/SoftButton"
import SoftTypography from "components/SoftTypography"

import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Sessions() {

    return (
        <Card sx={{p:2}} >

            <SoftTypography mb={4} variant="h5" fontWeight="medium" color="white">
                Sessions
            </SoftTypography>
            
            <SoftTypography mb={4} variant="body2" color="dark">
                This is a list of devices that have logged into your account. Remove those that you do not recognize.
            </SoftTypography>

            <Grid container spacing={3} sx={{mb:2}}>
                <Grid item display="flex" alignItems="center" >
                    <LaptopChromebookIcon />
                </Grid>
                <Grid item xs>
                    <SoftBox height="100%" mt={0.5} lineHeight={1}>
                        <SoftTypography variant="body2" color="white">
                            Buenos Aires 68.133.163.201
                            <SoftBadge badgeContent="active" color="success" size="xs" container sx={{float: 'right', marginTop: "5px"}} />
                        </SoftTypography>
                        <SoftTypography variant="caption" color="white">
                            Your current session
                        </SoftTypography>
                    </SoftBox>
                </Grid>
                <Grid item sx={{ ml: "auto" }} alignItems="center">
                    <SoftBox mt={0.25}>
                        <SoftTypography variant="button" color="text" >
                            EU
                        </SoftTypography>
                        <SoftButton  sx={{ml:1}} variant="text" color="primary" size="small" >See more <ArrowForwardIcon style={{marginLeft: "10px"}} /></SoftButton>
                    </SoftBox>
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{mb:2}}>
                <Grid item display="flex" alignItems="center" >
                    <LaptopChromebookIcon />
                </Grid>
                <Grid item xs>
                    <SoftBox height="100%" mt={0.5} lineHeight={1}>
                        <SoftTypography variant="body2" color="white">
                            Chrome on macOS
                        </SoftTypography>
                    </SoftBox>
                </Grid>
                <Grid item sx={{ ml: "auto" }} alignItems="center">
                    <SoftBox mt={0.25}>
                        <SoftTypography variant="button" color="text" >
                            EU
                        </SoftTypography>
                        <SoftButton  sx={{ml:1}} variant="text" color="primary" size="small" >See more <ArrowForwardIcon style={{marginLeft: "10px"}} /></SoftButton>
                    </SoftBox>
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{mb:2}}>
                <Grid item display="flex" alignItems="center" >
                    <PhoneIphoneIcon />
                </Grid>
                <Grid item xs>
                    <SoftBox height="100%" mt={0.5} lineHeight={1}>
                        <SoftTypography variant="body2" color="white">
                            Safari on iPhone
                        </SoftTypography>
                    </SoftBox>
                </Grid>
                <Grid item sx={{ ml: "auto" }} alignItems="center">
                    <SoftBox mt={0.25}>
                        <SoftTypography variant="button" color="text" >
                            EU
                        </SoftTypography>
                        <SoftButton  sx={{ml:1}} variant="text" color="primary" size="small" >See more <ArrowForwardIcon style={{marginLeft: "10px"}} /></SoftButton>
                    </SoftBox>
                </Grid>
            </Grid>

        </Card>
    )

}

export default Sessions