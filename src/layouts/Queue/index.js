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
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import QueueCard from 'examples/Cards/QueueCards';
import Container from "@mui/material/Container";
import Board from './components/board';
import { DragDropContext,Draggable,Droppable} from "react-beautiful-dnd";


// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components

// Data
import reportsBarChartData from "layouts/Overview/data/reportsBarChartData";
import gradientLineChartData from "layouts/Overview/data/gradientLineChartData";
import checkedInUsers from "./data/checkedInUsers";

function Dashboard() {

  return (
    <DashboardLayout>
      <div style={{display:"flex"}}>

      </div>
        {/*<div style={{display:"flex",justifyContent:"space-around"}}>*/}
        {/*    <Container fixed>*/}
        {/*        <h1>Waiting Zone</h1>*/}
        {/*        <div style={{ alignItems:"center",backgroundColor: "lightgrey", minHeight:"30rem",width: "50%"}}>*/}
        {/*            <QueueCard name="Andy" />*/}
        {/*            <QueueCard name="Youngbald" />*/}
        {/*        </div>*/}
        {/*    </Container>*/}
        {/*    <Container fixed>*/}
        {/*        <h1>Queue Zone</h1>*/}
        {/*        <div style={{ alignItems:"center",backgroundColor: "lightgrey", minHeight:"30rem",width: "50%"}}>*/}
        {/*            <QueueCard name="Andy" />*/}
        {/*            <QueueCard name="Youngbald" />*/}
        {/*        </div>*/}
        {/*    </Container>*/}
        {/*</div>*/}


    </DashboardLayout>
  );
}

export default Dashboard;
