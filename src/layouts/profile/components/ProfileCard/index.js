import { Card, Grid, Switch } from "@mui/material"
import SoftAvatar from "components/SoftAvatar"
import SoftBox from "components/SoftBox"
import SoftTypography from "components/SoftTypography"

import LukasAvatar from "assets/images/Lukas Thern Loven.png";
import { useState } from "react";


function ProfileCard() {

    const [checked, setChecked] = useState(false)

    return (
        <Card sx={{p:2}} >
            <Grid container spacing={3}>
                <Grid item>
                    <SoftAvatar
                    src={LukasAvatar}
                    alt="profile-image"
                    variant="rounded"
                    size="xl"
                    shadow="sm"
                    />
                </Grid>
                <Grid item >
                    <SoftBox height="100%" mt={0.5} lineHeight={1}>
                        <SoftTypography variant="h5" fontWeight="medium" color="white">
                            Alex Thompson
                        </SoftTypography>
                        <SoftTypography variant="button" color="white" fontWeight="medium" >
                            CEO / Co-Founder
                        </SoftTypography>
                    </SoftBox>
                </Grid>
                <Grid item sx={{ ml: "auto" }} display="flex" alignItems="center">
                    <SoftBox mt={0.25}>
                        <SoftTypography variant="button" color="text" >
                            {checked? 'Switch to invisible': 'Switch to visible'}
                        </SoftTypography>
                        <Switch checked={checked} sx={{ml:2}} onChange={() => setChecked(!checked)} />
                    </SoftBox>
                </Grid>
            </Grid>
        </Card>
    )

}

export default ProfileCard