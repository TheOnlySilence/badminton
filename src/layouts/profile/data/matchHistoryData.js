/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";

function Author({ name, name2 }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="medium">
          {name2}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
    </SoftBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "Team1", align: "center" },
    { name: "Score", align: "left" },
    { name: "Team2", align: "left" },
    { name: "Date", align: "center" },
    // { name: "action", align: "center" },
  ],

  rows: [
    {
      Team1: <Author name="HanYi Jiang" name2="Stephen" />,
      Score: (
        <SoftBadge variant="gradient" badgeContent="21-0, 21-1" color="success" size="xs" container />
      ),
      Team2: <Author name="youngbald" name2="Kimi" />,
      Date: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          12/31/2023
        </SoftTypography>
      ),
      action: (
        <SoftTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Edit
        </SoftTypography>
      ),
    }
    
  ],
};

export default authorsTableData;
