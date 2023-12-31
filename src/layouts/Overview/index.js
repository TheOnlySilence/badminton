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
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import Transactions from "layouts/billing/components/Transactions";
import TimelineItem from "examples/Timeline/TimelineItem";
import TimelineList from "examples/Timeline/TimelineList";


// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components

// Data
import reportsBarChartData from "layouts/Overview/data/reportsBarChartData";
import gradientLineChartData from "layouts/Overview/data/gradientLineChartData";

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "会费余额" }}
                count="$3,000"
                // percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: "paid" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "会员数量" }}
                count="200"
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "新增用户" }}
                count="+2"
                icon={{ color: "info", component: "emoji_events" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "羽球数量" }}
                count="100"
                icon={{
                  color: "info",
                  component: "shopping_cart",
                }}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3} >
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <GradientLineChart
                title="Trend"
                description={""
                }
                height="20.25rem"
                chart={gradientLineChartData}
              />
            </Grid>
            <Grid item xs={12} lg={4} height='100'>
              <TimelineList title="Events" >
              <TimelineItem
                color="success"
                icon="notifications"
                title="$2400 Design changes"
                dateTime="22 DEC 7:20 PM"
                description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
                badges={["design"]}
              />
            <TimelineItem
              color="error"
              icon="inventory_2"
              title="New order #1832412"
              dateTime="21 DEC 11 PM"
              description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
              badges={["order", "#1832412"]}
            />  
            <TimelineItem
            icon="shopping_cart"
            title="Server payments for April"
            dateTime="21 DEC 9:34 PM"
            description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
            badges={["server", "payments"]}
            lastItem
          />
              </TimelineList>
            </Grid>
          </Grid>
        </SoftBox>
          <Grid item xs={12} md={6} lg={8}>
            <Transactions />
          </Grid>
        
      </SoftBox>
    </DashboardLayout>
  );
}

export default Dashboard;
