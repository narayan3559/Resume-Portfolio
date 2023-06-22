import React from 'react'
import './Resume.css'
import { Grid, Icon, Paper, TextField, Typography } from '@mui/material'
import resumeData from '../../utils/resumeData'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import WorkIcon from '@mui/icons-material/Work'
import { TimelineContent, TimelineDot, TimelineItem } from '@mui/lab'
import SchoolIcon from '@mui/icons-material/School';
import CustomButton from '../../components/Button/Button'

const Resume = () => {
  return (
    <>
      {/* about me */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>About me</h6>
        </Grid>
        <Grid xs={12}>
          <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
        </Grid>
      </Grid>

      {/* education and experience */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item sm={12} md={6}>
              <CustomTimeline 
                title='Work Experience' 
                icon={<WorkIcon />}>
                  {resumeData.experiences.map(experience => (
                    <TimelineItem>
                      <CustomTimelineSeparator />
                      <TimelineContent>
                        <Typography className='timeline_title'>
                          {experience.title}
                        </Typography>
                        <Typography className='timeline_date' variant='caption'>
                          {experience.date}
                        </Typography>
                        <Typography className='timeline_description' variant='body2'>
                          {experience.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </CustomTimeline>
            </Grid>

            <Grid item sm={12} md={6}>
              <CustomTimeline 
                title='Education History' 
                icon={<SchoolIcon />}>
                  {resumeData.educations.map(education => (
                    <TimelineItem>
                      <CustomTimelineSeparator />
                      <TimelineContent>
                        <Typography className='timeline_title'>
                          {education.title}
                        </Typography>
                        <Typography className='timeline_date' variant='caption'>
                          {education.date}
                        </Typography>
                        <Typography className='timeline_description' variant='body2'>
                          {education.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
      {/* service */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>My Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {resumeData.services.map(service => (
              <Grid item xs={12} sm={6} md={3}>
                <div className='service'>
                  <Icon className='service_icon MuiSvgIcon-root'>{service.icon}</Icon>
                  <Typography variant='h6' className='service_title'>{service.title}</Typography>
                  <Typography variant='body2' className='service_description'>{service.description}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* skills */}
      <Grid 
        container 
        spacing={3} 
        justify='space-between' 
        className='section graybg pb_45 p_30'>
        {resumeData.skills.map(skill => (
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={0} className='skill'>
              <Typography className='skill_title'>
                {skill.title}
              </Typography>
              {skill.description.map(element => (
                <Typography variant='body2' className='skill_description'>
                  <TimelineDot variant={'outlined'} className='timeline_dot' />
                  {element}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
      
      {/* contact */}
      <Grid container spacing={4} className='section pt_45 pb_45'>
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className='section_title mb_30'>
              <span></span>
              <h6 className='section_title_text'>Contact Form</h6>
            </Grid>
            <Grid item xs={12} paddingRight={2}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <TextField fullWidth variant='filled' name='name' label='Name' />
                </Grid>
                <Grid item xs={12} sm={12 }>
                  <TextField fullWidth variant='filled' name='email' label='E-mail' />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth variant='filled' name='message' label='Message' multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text='Submit' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className='section_title mb_30'>
              <span></span>
              <h6 className='section_title_text'>Contact Details</h6>
            </Grid>
            
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>Address: </span>{resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>Phone: </span>{resumeData.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>Email: </span>{resumeData.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container className='contactInfo_socialsContainer'>
                {Object.keys(resumeData.socials).map(key => (
                  <Grid item className='contactInfo_social'>
                    <a href={resumeData.socials[key].link}>
                      {resumeData.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Resume