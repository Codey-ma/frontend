import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: 317.921,
    height: 378.81,
    padding: 16,
    alignItems: 'flex-start',
    gap: 10,
    flexShrink: 0,
    borderRadius: 24,
    background: 'var(--white, #FFF)',
    boxShadow: '0px 3px 12px 0px rgba(75, 75, 75, 0.08)',
    marginBottom: 15, // Add margin bottom to separate cards
  },
  media: {
    height: 140,
  },
  blogTitle: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 500,
    color: '#000', // Change the color as needed
  },
  profileInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  profileImage: {
    width: 40, // Adjust the size as needed
    height: 40, // Adjust the size as needed
    borderRadius: '50%',
  },
  publisherName: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 400,
    color: '#000', // Change the color as needed
  },
  dateAndDuration: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 400,
    color: '#888', // Change the color as needed
  },
});

const BlogCard = ({ imageUrl, title, publisherImage, publisherName, date, duration }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl} // Provide the URL to the blog image
          title="Blog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.blogTitle}>
            {title}
          </Typography>
          <div className={classes.profileInfo}>
            <img src={publisherImage} alt="Publisher" className={classes.profileImage} />
            <div>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.publisherName}>
                {publisherName}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.dateAndDuration}>
                {date} • {duration} Read
              </Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
