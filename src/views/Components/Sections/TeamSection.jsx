import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/SaraProfile.png";
import team2 from "assets/img/faces/JulieProfile.png";
import team3 from "assets/img/faces/JulianProfile.png";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Our Team</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Sarah Gersten
                  <br />
                  <small className={classes.smallTitle}>Chief Executive Officer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Sarah is a transactional attorney with a focus on intellectual property.  While she currently works for a congressional agency, she has experience working with public and private companies in initial and secondary public offerings, and has advised companies on issues of formation, operation, and general corporate matters.  She became involved in cannabis law and policy during law school when she worked with the Marijuana Policy Project of Massachusetts on the initiative to legalize recreational marijuana.  She currently serves as a founding member of the DC Cannabis Business Association.  Sarah is a graduate of Tulane University and Harvard Law School.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-twitter"} />
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-instagram"} />
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-facebook"} />
                  </IconButton>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Julie Saltman
                  <br />
                  <small className={classes.smallTitle}>Chief Operating Officer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                  Julie Saltman is a seasoned attorney who spent over a decade with
                  the United States Department of Justice, Civil Division, before becoming
                  Assistant General Counsel at the U.S. Copyright Office. Her work at DOJ focused primarily
                  on litigation involving federal statutes, regulations, and agency actions in cases involving
                  matters of constitutional and administrative law.
                  As Assistant General Counsel, Julie currently assists the Copyright Office in ongoing litigation,
                  congressionally mandated rulemakings and regulatory requirements, as well as drafting and reviewing
                  office policies and procedures.  Julie is also a member of the Georgetown Law adjunct faculty.
                  She is a graduate of Yale University and University of Michigan Law School.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-twitter"} />
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </IconButton>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Julian Barthold
                  <br />
                  <small className={classes.smallTitle}>Chief Technology Officer</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                  Julian is a former Oracle IT Auditor whose side projects turned
                  into a passion for  building web infrastructure to explore and process data.
                  He began with Visual Basic and shell scripting, building programs to automate
                  repetitive audit data analysis.  Julian continues to broaden his understanding of
                  software architecture through contract work with companies like Snomatic, where he is currently
                  developing snowmaking automation and control integration.  Julian is a graduate of Boston University
                   and the General Assembly Data Science and Web Development programs where he learned to build web
                   infrastructure around data.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-twitter"} />
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-instagram"} />
                  </IconButton>
                  <IconButton color="transparent" className={classes.margin5}>
                    <i className={classes.socials + " fab fa-facebook"} />
                  </IconButton>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
