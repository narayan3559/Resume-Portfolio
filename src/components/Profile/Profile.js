import { Typography } from '@mui/material'
import React from 'react'
import './Profile.css'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import resumeData from '../../utils/resumeData'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { TimelineContent, TimelineItem } from '@mui/lab'
import CustomButton from '../Button/Button'
import GetAppIcon from '@mui/icons-material/GetApp';

const CustomTimelineItem = ({title, text, link}) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className='TimelineContent'>
      {link ? 
        (
          <Typography className='TimelineItem_text'>
            <span>{title}: </span>{''}
            <a href={link} target='_blank' rel="noreferrer">{text}</a>
          </Typography>
        ) : 
        (
          <Typography className='TimelineItem_text'>
            <span>{title}: </span>{text}
          </Typography>
        )
      }
    </TimelineContent>
  </TimelineItem>
)

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>
      <figure className='profile_image'>
        <img src={require('../../assets/images/Profile_pic.jpg')} alt='profile picture' />
      </figure>
      <div className='profile_information'>
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title='Name' text={resumeData.name} />
          <CustomTimelineItem title='Title' text={resumeData.title} />
          <CustomTimelineItem title='Email' text={resumeData.email} />
          {Object.keys(resumeData.socials).map((key)=>(
            <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
          ))}
        </CustomTimeline>
        <br />
        <div className='button_container'>
          <CustomButton text={'Download Cv'} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  )
}

export default Profile