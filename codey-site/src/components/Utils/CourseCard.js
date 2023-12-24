import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import Divider from '@material-ui/core/Divider';
import ScheduleIcon from '@material-ui/icons/Schedule';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import tutorImage from '../../assets/tutor.png';
import woman from '../../assets/girl.png';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    marginBottom: theme.spacing(2),
    boxShadow:
    "0px 14px 80px rgba(59, 79, 123, 0.1), 0px 10px 50px rgba(59, 79, 123, 0. 4)",
  },
  media: {
    height: 210,
  },
  category: {
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.palette.grey[500],
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    color: "#FFFF00"
  },
  title: {
    marginTop: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  courseInfo: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  tutorInfo: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '110px',
  },
  joinButton: {
    borderRadius: '25px',
  },
}));
;

export default function Course({ courseData }) {
  const classes = useStyles();

  const {
    category,
    rating,
    title,
    schedule,
    numberOfCourses,
    tutorImageSrc = {tutorImage},
    tutorName,
    coursePrice,
  } = courseData;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          className={classes.media}
          image={woman}
          title="Course Image"
        />
        <CardContent>
          <div className={classes.category}>
            <Typography variant="body2">{category}</Typography>
            <div className={classes.rating}>
              {Array.from({ length: rating }).map((_, index) => (
                <StarIcon key={index} />
              ))}
            </div>
          </div>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
          <Divider className={classes.divider} />
          <div className={classes.courseInfo}>
            <Typography variant="body2" style={{ display: 'flex' }}>
              <ScheduleIcon style={{ verticalAlign: 'middle', marginTop: '-2px' }} /> {schedule}
            </Typography>
            <Typography variant="body2" style={{ display: 'flex' }}>
              <VideoLibraryIcon /> {numberOfCourses} courses
            </Typography>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden', marginRight: '10px' }}>
                <img src={tutorImageSrc} alt="Tutor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <Typography variant="body2" color="textSecondary" component="p">
                {tutorName}
              </Typography>
            </div>
            <div>
              <Typography variant="body2" color="textSecondary" component="p">
                {coursePrice}
              </Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className={classes.buttonContainer}>
          <Button variant="contained" style={{ backgroundColor: '#1FD891', 'alignItems': 'center' }} className={classes.joinButton}>
            LEARN MORE
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
