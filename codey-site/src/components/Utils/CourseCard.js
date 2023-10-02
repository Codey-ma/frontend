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
import ScheduleIcon from '@material-ui/icons/Schedule'; // Import the Schedule icon
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'; // Import the VideoLibrary icon

import tutorImage from '../../assets/tutor.png'
import woman from '../../assets/girl.png';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    marginBottom: theme.spacing(10),
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
    marginLeft: '110px'
  },
  joinButton: {
    borderRadius: '25px',
  },
}));

export default function Course() {
  const classes = useStyles();

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
            <Typography variant="body2">UX/UI Design</Typography>
            <div className={classes.rating}>
              <StarIcon  />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon/>
            </div>
          </div>
          <Typography 
          variant="h5" 
          className={classes.title}
          style={{
            color: 'var(--blk, #000)',
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
          }}
          >
          The Ultimate Python Course for Beginners
          </Typography>
          <Divider className={classes.divider} />
          <div className={classes.courseInfo}>
            <Typography variant="body2" style={{display:"flex"}}><ScheduleIcon style={{verticalAlign: 'middle', marginTop: '-2px'}}/> 6 weeks</Typography>
            <Typography variant="body2" style={{display:"flex"}}><VideoLibraryIcon/> 15 courses</Typography>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop:"30px" }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden', marginRight: '10px' }}>
                <img src={tutorImage} alt="Tutor" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{
                  color: '#353535',
                  fontFamily: 'Poppins',
                  fontSize: '17px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                }}
              >
                Tutor Name
              </Typography>
            </div>
            <div>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{
                  color: '#FF2626',
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: 'normal',
                }}
              >
                Free
              </Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            style={{ backgroundColor: '#1FD891', 'alignItems': 'center' }}
            className={classes.joinButton}
          >
            Join Course
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
