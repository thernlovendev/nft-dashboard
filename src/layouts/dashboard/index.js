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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "features/LayoutContainers/DashboardLayout";
import DashboardNavbar from "features/Navbars/DashboardNavbar";

import MiniStatisticsCard from "features/Cards/StatisticsCards/MiniStatisticsCard";
import GradientLineChart from "features/Charts/LineCharts/GradientLineChart";
import PieChart from "features/Charts/PieChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";

// Data
import reportsPieChartData from "layouts/dashboard/data/reportsPieChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

// Images
import lizard from "assets/images/lizard.png";
import wizard from "assets/images/wizard.webp";
import seal from "assets/images/seal.png";
import walter from "assets/images/walter.jpeg";

function Dashboard() {
  const { size } = typography;
  const { chart } = reportsPieChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3} >
              <MiniStatisticsCard
                title={{ text: "Total Assets" }}
                count="$3,500"
                icon={{ color: "primary", component: <i className="ni ni-collection text-dark text-lg opacity-10" aria-hidden="true"></i>
              }}
                bgColor={"primary"}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total Items" }}
                count="240"
                icon={{ color: "info", component:  <i className="ni ni-image text-dark text-lg opacity-10" aria-hidden="true"></i> }}
                bgColor={"primary"}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total Sales" }}
                count="$2,400"
                icon={{ color: "info", component: <i className="ni ni-money-coins text-dark text-lg opacity-10" aria-hidden="true"></i> }}
                bgColor={"primary"}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Activities" }}
                count="240"
                icon={{ color: "info", component: <i className="ni ni-mobile-button text-dark text-lg opacity-10" aria-hidden="true"></i> }}
                bgColor={"primary"}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mt={3} mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <Grid container spacing={3} >
                <Grid item xs={12} lg={12}>
                  <BuildByDevelopers 
                    title="Total Value"
                    value={2000} 
                    percent={"+55%"}
                    dateRange="6 May - 7 May"
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <BuildByDevelopers 
                    title="Sol Balance"
                    value={5000} 
                    percent={"+46%"}
                    dateRange="6 May - 7 May"
                  />
                </Grid>
                <Grid item xs={12} lg={12}>
                  <BuildByDevelopers 
                    title="Spl Token Value"
                    value={2000} 
                    percent={"+12%"}
                    dateRange="6 May - 7 May"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={6} >
                  <WorkWithTheRockets
                    bgImage={lizard}
                    collection= {2}
                    floor= {500}
                    totalFloor= {1500}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <WorkWithTheRockets
                      bgImage={wizard}
                      collection= {2}
                      floor= {200}
                      totalFloor= {800}
                    />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <WorkWithTheRockets
                      bgImage={seal}
                      collection= {3}
                      floor= {300}
                      totalFloor= {900}
                    />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <WorkWithTheRockets
                      bgImage={walter}
                      collection= {4}
                      floor= {100}
                      totalFloor= {500}
                    />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <GradientLineChart
                title="Revenues"
                height="20.25rem"
                description="See witch Ads perform better"
                chart={gradientLineChartData}
              />
            </Grid>
            <Grid item xs={12} lg={5}>
              <PieChart 
                title="Channels"
                height="20.25rem"
                description="See traffic channels"
                chart={chart}
              />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Dashboard;
