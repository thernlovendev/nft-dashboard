import { Card, Grid, Switch, TextField } from "@mui/material"
import SoftAvatar from "components/SoftAvatar"
import SoftBox from "components/SoftBox"
import SoftTypography from "components/SoftTypography"

import LukasAvatar from "assets/images/Lukas Thern Loven.png";
import SoftInput from "components/SoftInput";
import SoftSelect from "components/SoftSelect";


function BasicInfo() {

    return (
        <Card sx={{p:4}} >

            <SoftBox>                
                <SoftTypography variant="h5" fontWeight="medium" color="white">
                    Basic Info
                </SoftTypography>

                <Grid container spacing={3} mt={1} mb={1} >
                    <Grid item xs={12} lg={6} >
                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                            First name
                        </SoftTypography>
                        <SoftInput sx={{mt:1}} type="text" placeholder="First name" />
                    </Grid>
                    <Grid item xs={12} lg={6} >
                        <SoftTypography  component="label" variant="caption" fontWeight="bold">
                            Last name
                        </SoftTypography>
                        <SoftInput sx={{mt:1}} type="text" placeholder="Last name" />
                    </Grid>
                </Grid>

                <Grid container spacing={3} mt={1} mb={1} >
                    <Grid item xs={12} lg={3} >
                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                            I&apos;m
                        </SoftTypography>
                        <SoftSelect values={["Male", "Female"]} select="Male" />
                    </Grid>
                    <Grid item xs={12} lg={9} >
                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                            Birth date
                        </SoftTypography>
                        <SoftBox display="flex" flexDirection="row" justifyContent="space-between" >
                            <Grid container spacing={3}>
                                <Grid item xs={5} lg={5}>
                                    <SoftSelect style={{marginRight: 10}} values={["Jan", "Feb", "Mar", "Avr", "Mai", "Jun", "Jui", "Oug", "Sep", "Oct", "Nov", "Dec"]} select="Jan" />
                                </Grid>
                                <Grid item xs={3} lg={3}>
                                    <SoftSelect sx={{mr:1}} values={[1, 2, 3, 4, 6, 6, 7, 8, 9, 10, 11]} select={1} />
                                </Grid>
                                <Grid item xs={4} lg={4}>
                                    <SoftSelect values={[2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]} select={2014} />
                                </Grid>
                            </Grid>
                        </SoftBox>
                    </Grid>
                </Grid>

                <Grid container spacing={3} mt={1} mb={1} >
                    <Grid item xs={12} lg={6} >
                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                            Email
                        </SoftTypography>
                        <SoftInput sx={{mt:1}} type="email" placeholder="example@gmail.com" />
                    </Grid>
                    <Grid item xs={12} lg={6} >
                        <SoftTypography  component="label" variant="caption" fontWeight="bold">
                            Confirmation Email
                        </SoftTypography>
                        <SoftInput sx={{mt:1}} type="email" placeholder="example@gmail.com" />
                    </Grid>
                </Grid>

                <Grid container spacing={3} mt={1} mb={1} >
                    <Grid item xs={12} lg={6} >
                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                            Your location
                        </SoftTypography>
                        <SoftInput sx={{mt:1}} type="text" placeholder="Buenos Aires" />
                    </Grid>
                    <Grid item xs={12} lg={6} >
                        <SoftTypography  component="label" variant="caption" fontWeight="bold">
                            Phone number
                        </SoftTypography>
                        <SoftInput sx={{mt:1}} type="text" placeholder="+54 735 631 620" />
                    </Grid>
                </Grid>

            </SoftBox>

        </Card>
    )

}

export default BasicInfo