import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: 317.921,
    height: 378.81,
    padding: 16,
    alignItems: 'center',
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
  educatorName: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 500,
    color: '#000', // Change the color as needed
  },
  educatorOccupation: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 400,
    color: '#888', // Change the color as needed
  },
});

const EducatorCard = ({ imageSrc, name, occupation }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imageSrc}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {occupation}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EducatorCard;
