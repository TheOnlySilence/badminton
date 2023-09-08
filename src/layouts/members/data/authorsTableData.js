/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, contact }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox mr={2}>
        <SoftAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SoftBox>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {contact}
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
    { name: "name", align: "left" },
    { name: "职位", align: "left" },
    { name: "status", align: "center" },
    { name: "有效至", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      name: <Author image={""} name="HanYi Jiang" contact="111-222-3333" />,
      职位: <Function job="周五场地沟通" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="有效" color="success" size="xs" container />
      ),
      有效至: (
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
    },
    {
      name: <Author image={""} name="Allen" contact="111-222-3333" />,
      职位: <Function job="社长" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="有效" color="success" size="xs" container />
      ),
      有效至: (
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
    },
    {
      name: <Author image={""} name="Liu Yang" contact="111-222-3333" />,
      职位: <Function job="周六场地沟通" org="Projects" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="有效" color="success" size="xs" container />
      ),
      有效至: (
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
    },
    {
      name: <Author image={""} name="Katy" contact="111-222-3333" />,
      职位: <Function job="财务"/>,
      status: (
        <SoftBadge variant="gradient" badgeContent="有效" color="success" size="xs" container />
      ),
      有效至: (
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
    },
    {
      name: <Author image={""} name="Stephen" contact="111-222-3333" />,
      职位: <Function job="采购" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="有效" color="success" size="xs" container />
      ),
      有效至: (
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
    },
    {
      name: <Author image={""} name="Youngbald" contact="111-222-3333" />,
      职位: <Function job="成员" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="无效" color="secondary" size="xs" container />
      ),
      有效至: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          08/31/2023
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
    }, {
      name: <Author image={""} name="Youngbald" contact="111-222-3333" />,
      职位: <Function job="成员" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="无效" color="secondary" size="xs" container />
      ),
      有效至: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          08/31/2023
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
    }, {
      name: <Author image={""} name="Youngbald" contact="111-222-3333" />,
      职位: <Function job="成员" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="无效" color="secondary" size="xs" container />
      ),
      有效至: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          08/31/2023
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
    }, {
      name: <Author image={""} name="Youngbald" contact="111-222-3333" />,
      职位: <Function job="成员" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="无效" color="secondary" size="xs" container />
      ),
      有效至: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          08/31/2023
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
    }, {
      name: <Author image={""} name="Youngbald" contact="111-222-3333" />,
      职位: <Function job="成员" />,
      status: (
        <SoftBadge variant="gradient" badgeContent="无效" color="secondary" size="xs" container />
      ),
      有效至: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          08/31/2023
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
    },
  ],
};

export default authorsTableData;
