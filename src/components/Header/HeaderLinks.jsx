/* eslint-disable */
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import Tooltip from "material-ui/Tooltip";
import { isLoggedIn } from "API/Authentication";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";



function HeaderLinks({ ...props }) {

  const { classes, handleLogout } = props;
  const showLogin = isLoggedIn()

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          buttonText="Services"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Business Formation
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Branding
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              License and Compliance
            </Link>,
            // eslint-disable-next-line
          ]}
        />
      </ListItem>
      {/* Social Links
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            href="https://twitter.com/CreativeTim"
            target="_blank"
            color="transparent"
            className={classes.navLink + " " + classes.socialIconsButton}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            color="transparent"
            href="https://www.facebook.com/CreativeTim"
            target="_blank"
            className={classes.navLink + " " + classes.socialIconsButton}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </IconButton>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial"
            target="_blank"
            className={classes.navLink + " " + classes.socialIconsButton}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </IconButton>
        </Tooltip>
      </ListItem>
      */}
      <ListItem className={classes.listItem}>
      {
        isLoggedIn() ? (
            <Button
            onClick={handleLogout}
            size='sm'> Logout </Button>
        ) : (
            <Link to="/login">
              <Button size='sm'> Login </Button>
             </Link>
        )
      }
      </ListItem>

    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
