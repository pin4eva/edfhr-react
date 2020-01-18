import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import {
  PowerSettingsNew,
  Print,
  SupervisedUserCircle,
  VpnKey
} from "@material-ui/icons";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Gavel from "@material-ui/icons/Gavel";
import PermContactCalendar from "@material-ui/icons/PermContactCalendar";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import React from "react";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to="/dashboard">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>

    <Link to="/dashboard/applicants">
      <ListItem button>
        <ListItemIcon>
          <PermContactCalendar />
        </ListItemIcon>
        <ListItemText primary="Applicants" />
      </ListItem>
    </Link>

    <Link to="/dashboard/sponsors">
      <ListItem button>
        <ListItemIcon>
          <SupervisorAccount />
        </ListItemIcon>
        <ListItemText primary="Sponsors" />
      </ListItem>
    </Link>
    <Link to="/dashboard/lawyers">
      <ListItem button>
        <ListItemIcon>
          <Gavel />
        </ListItemIcon>
        <ListItemText primary="Lawyers" />
      </ListItem>
    </Link>
    <Link to="/dashboard/drafts">
      <ListItem button>
        <ListItemIcon>
          <Print />
        </ListItemIcon>
        <ListItemText primary="Print Draft" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Acount Profile</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <VpnKey />
      </ListItemIcon>
      <ListItemText primary="Change Password" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SupervisedUserCircle />
      </ListItemIcon>
      <ListItemText primary="Edit Profile" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PowerSettingsNew />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);
