import React, { useState } from "react";
import "./Portfolio.css";
import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from "@mui/material";
import resumeData from "../../utils/resumeData";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All")
  const [projectDialog, setProjectDialog] = useState(false)

  return (
    <Grid container spacing={1} className="portfolio section pt_45 pb_45">
      <Grid item className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="custom_tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customTabs_item active" : "customTabs_item"
            }
          />
          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue === tag
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      <Grid item xs={12} className="allcard">
        <Grid container spacing={2}>
          {resumeData.projects.map((project) => (
            <>
              {tabValue === project.tag || tabValue === "All" ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Grow in timeout={800}>
                    <Card
                      className="customCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            className="customCard_title"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            className="customCard_description"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog open={projectDialog} onClose={() => setProjectDialog(false)}>
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <img src={projectDialog.image} alt="" className="projectDialog_image" />
        <DialogContent>
          <Typography className="projectDialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link) => (
            <a
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="projectDialog_icon"
            >
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default Portfolio;

// https://www.youtube.com/watch?v=sYkzCiw3yZ4&list=PLISG6SSQ9nqyuuTjr2cDApJlY9-K3jrn1&index=13 