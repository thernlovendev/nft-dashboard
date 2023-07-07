import { Card, Grid, Switch } from "@mui/material"
import SoftAvatar from "components/SoftAvatar"
import SoftBadge from "components/SoftBadge"
import SoftBox from "components/SoftBox"
import SoftButton from "components/SoftButton"
import SoftTypography from "components/SoftTypography"
import { useState } from "react"

function DeleteAccount() {

    const [checked, setChecked] = useState(false)

    return (
        <Card sx={{p:2}} >

            <SoftTypography mb={3} variant="h5" fontWeight="medium" color="white">
                Delete account
            </SoftTypography>
            
            <SoftTypography mb={2} variant="body2" color="dark">
                Once you delete your account, there is no going back. Please be certain.
            </SoftTypography>

            <Grid container spacing={3} sx={{mb:2}}>
                <Grid item display="flex" alignItems="center" >
                    <Switch checked={checked} sx={{ml:2}} onChange={() => setChecked(!checked)} />
                </Grid>
                <Grid item xs>
                    <SoftBox height="100%" mt={0.5} lineHeight={1}>
                        <SoftTypography variant="body2" color="dark">
                            Confirm
                        </SoftTypography>
                        <SoftTypography variant="caption" color="white">
                            I want to delete my account.
                        </SoftTypography>
                    </SoftBox>
                </Grid>
                <Grid item sx={{ ml: "auto" }} alignItems="center">
                    <SoftBox mt={0.25}>
                        <SoftButton sx={{ml:1}} variant="outlined" color="dark"  >Deactivate</SoftButton>
                        <SoftButton sx={{ml:1}} variant="gradient" color="error"  >Delete account</SoftButton>
                    </SoftBox>
                </Grid>
            </Grid>



        </Card>
    )

}

export default DeleteAccount