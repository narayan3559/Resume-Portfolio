import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DeveloperModeOutlinedIcon from '@mui/icons-material/DeveloperModeOutlined';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import AndroidIcon from '@mui/icons-material/Android';
import StorageIcon from '@mui/icons-material/Storage';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import proimage from './../assets/images/proimage.png'

export default {
  name: "Jake Gyllenhaal",
  title: "Full Stack Developer",
  birthday: "29th February 1999",
  email: "jake@jake.com",
  address: "344 St CA Hotel California",
  phone: "9999009999",
  socials: {
    Facebook: {
      link: "https://www.facebook.com/xdfws",
      text: "Facebook",
      icon: <FacebookIcon />,
    },
    Twitter: {
      link: "https://www.facebook.com/xdfws",
      text: "Twitter",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.facebook.com/xdfws",
      text: "LinkedIn",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://www.facebook.com/xdfws",
      text: "GitHub",
      icon: <GitHubIcon />,
    },
  },
  about:
    "A full-stack developer is someone who has expertise in both the front-end and back-end aspects of web development. This means that they are skilled in developing the user interface and experience of a website or application, as well as the server-side logic that makes it run smoothly. And as you might know the mighty Jake here is a phenominal career in that. \n\n To be successful as a full-stack developer, one needs to have a strong foundation in programming languages such as HTML, CSS, JavaScript, and various back-end languages such as Java, Ruby on Rails, or Python. They also need to be familiar with front-end frameworks such as React, Angular, or Vue and back-end frameworks such as Node.js, Django, or Flask.",
  experiences: [
    {
      title: "Work-1",
      date: "2020 - present",
      description:
        "Expenses as material breeding insisted building to it. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "Work-2",
      date: "2018 - 2020",
      description:
        "Expenses as material breeding insisted building to it. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "Work-3",
      date: "2017 - 2018",
      description:
        "Expenses as material breeding insisted building to it. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
  ],

  educations: [
    {
      title: "Education-1",
      date: "2015 - 2017",
      description:
        "Expenses as material breeding insisted building to it. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "Education-2",
      date: "2013 - 2015",
      description:
        "Expenses as material breeding insisted building to it. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "Education-3",
      date: "2011 - 2013",
      description:
        "Expenses as material breeding insisted building to it. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
  ],

  services: [
    {
      title: "Web Dev",
      description: "I have been a notable web developer for 10 years.",
      icon: <DeveloperModeOutlinedIcon />,
    },
    {
      title: "Brand Identity",
      description:
        "We will make you a brand that is catchy and leaves a trace.",
      icon: <BrandingWatermarkIcon />,
    },
    {
      title: "Android Developer",
      description: "I have been a notable web developer for 10 tears",
      icon: <AndroidIcon />,
    },
    {
      title: "Database Admin",
      description: "I have been a notable web developer for 10 tears",
      icon: <StorageIcon />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: [
        "ReactJS",
        "Javascript",
        "Typescript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "BACK-END",
      description: ["NodeJS", "Java", "Python", "Solidity"],
    },
    {
      title: "DATABASES",
      description: ["Firebase", "MySql Server", "Mysql", "MongoDB"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub", "SCRUM/Agile"],
    },
  ],

  projects: [
    {
      tag: "React",
      image:
        "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdnByb2plY3RvbGQxLW5pbmctMDA2MV8yLmpwZw.jpg",
      title: "React Project 1",
      caption: "A short project description",
      description:
        "This is my project details regarding technologies and dependencies.",
      links: [
        { link: "https://www.youtube.com", icon: <YouTubeIcon /> },
        { link: "https://www.twitter.com", icon: <TwitterIcon /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "React",
      image:
        "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdnByb2plY3RvbGQxLW5pbmctMDA2MV8yLmpwZw.jpg",
      title: "React Project 2",
      caption: "A short project description",
      description:
        "This is my project details regarding technologies and dependencies.",
      links: [
        { link: "https://www.youtube.com", icon: <YouTubeIcon /> },
        { link: "https://www.twitter.com", icon: <TwitterIcon /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "Python",
      image:
        "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdnByb2plY3RvbGQxLW5pbmctMDA2MV8yLmpwZw.jpg",
      title: "Python Project 1",
      caption: "A short project description",
      description:
        "This is my project details regarding technologies and dependencies.",
      links: [
        { link: "https://www.youtube.com", icon: <YouTubeIcon /> },
        { link: "https://www.twitter.com", icon: <TwitterIcon /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "Python",
      image:
        "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdnByb2plY3RvbGQxLW5pbmctMDA2MV8yLmpwZw.jpg",
      title: "Python Project 2",
      caption: "A short project description",
      description:
        "This is my project details regarding technologies and dependencies.",
      links: [
        { link: "https://www.youtube.com", icon: <YouTubeIcon /> },
        { link: "https://www.twitter.com", icon: <TwitterIcon /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "Java",
      image:
        "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdnByb2plY3RvbGQxLW5pbmctMDA2MV8yLmpwZw.jpg",
      title: "Java Project 1",
      caption: "A short project description",
      description:
        "This is my project details regarding technologies and dependencies.",
      links: [
        { link: "https://www.youtube.com", icon: <YouTubeIcon /> },
        { link: "https://www.twitter.com", icon: <TwitterIcon /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "Java",
      image:
        "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdnByb2plY3RvbGQxLW5pbmctMDA2MV8yLmpwZw.jpg",
      title: "Java Project 2",
      caption: "A short project description",
      description:
        "This is my project details regarding technologies and dependencies.",
      links: [
        { link: "https://www.youtube.com", icon: <YouTubeIcon /> },
        { link: "https://www.twitter.com", icon: <TwitterIcon /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
      ],
    },
  ],
};