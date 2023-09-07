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
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";

function Transactions() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Transactions
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={3} pb={2} px={2}>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="error"
            icon="arrow_downward"
            name="500x 羽毛球"
            description="27 March 2023, at 12:30 PM"
            value="- $ 2,500"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="会费by Andy"
            description="27 March 2023, at 04:30 AM"
            value="+ $ 40"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="会费by Andy"
            description="26 March 2023, at 13:45 PM"
            value="+ $ 40"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="会费by Andy"
            description="26 March 2023, at 12:30 PM"
            value="+ $ 40"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="会费by Andy"
            description="26 March 2023, at 08:30 AM"
            value="+ $ 40"
          />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Transactions;
