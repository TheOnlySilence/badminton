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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Draggable from "react-draggable";

function PlaceholderCard({ name }) {
    return (
        <Draggable>
            <Card sx={{ width:200, height:70}}>
                <CardContent style={{padding:20}}>
                    <Typography variant="h5" component="div" align="center">
                        {name}
                    </Typography>
                    {/*<Typography sx={{ mb: 1.5 }} color="text.secondary">*/}
                    {/*    adjective*/}
                    {/*</Typography>*/}
                    {/*<Typography variant="body2">*/}
                    {/*    well meaning and kindly.*/}
                    {/*    <br />*/}
                    {/*    {'"a benevolent smile"'}*/}
                    {/*</Typography>*/}
                </CardContent>
                {/*<CardActions>*/}
                {/*    <Button size="small">Learn More</Button>*/}
                {/*</CardActions>*/}
            </Card>
        </Draggable>
    );
}

// Setting default values for the props of PlaceholderCard
PlaceholderCard.defaultProps = {
    icon: "add",
    hasBorder: false,
    outlined: false,
};

// Typechecking props for the PlaceholderCard
PlaceholderCard.propTypes = {
    name: PropTypes.string
}
//     title: PropTypes.shape({
//         variant: PropTypes.string.isRequired,
//         text: PropTypes.string.isRequired,
//     }).isRequired,
//     hasBorder: PropTypes.bool,
//     outlined: PropTypes.bool,
// };

export default PlaceholderCard;
