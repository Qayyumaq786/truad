import React from 'react';
import { Link } from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';


export const mainListItems = (
  <div>
    <Link style={{textDecoration:"none",color:"inherit"}} to={"/dashboard/"}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon style={{ color: 'white', }} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link style={{textDecoration:"none",color:"inherit"}} to={"/dashboard/orders/"}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon style={{ color: 'white', }} />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
    </Link>
    <Link style={{textDecoration:"none",color:"inherit"}} to={"/dashboard/customer/"}>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon style={{ color: 'white', }} />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    </Link>
    <Link style={{textDecoration:"none",color:"inherit"}} to={"/dashboard/reports/"}>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon style={{ color: 'white', }} />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    </Link>
    <Link style={{textDecoration:"none",color:"inherit"}} to={"/dashboard/productList/"}>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon style={{ color: 'white', }} />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItem>
    </Link>
  </div>
);

