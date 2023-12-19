// TeamCard.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 317.921,
    height: 378.81,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flexShrink: 0,
    borderRadius: 24,
    border: '1px solid #EAECF0',
    background: 'var(--white, #FFF)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    marginBottom: 15, 

    
  },
  media: {
    height: 200,
    width: 280, 
  },
  teamName: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 500,
    color: '#000', // Change the color as needed
  },
  teamRole: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 400,
    color: '#888', // Change the color as needed
  },

  socialMediaIcons: {
    display: 'flex',
    gap: 10,
    marginTop: 10,
    marginLeft: 10,
    
  },
  icon: {
    
    width: 36,
    height: 36,
    padding: 10,
    borderRadius: 100,
    background: '#F2F4F7',
  },
});

const TeamCard = ({ person, category }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={person ? person.image : null} // Add the person's image URL
        title={person ? person.name : category}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" className={classes.teamName}>
          {person ? person.name : category}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.teamRole}>
          {person ? person.role : null} {/* Add person's role */}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {person ? person.text : null} {/* Add person's small about */}
        </Typography>
        <div className={classes.socialMediaIcons}>
          {person ? (
            <>
              <FaFacebook className={classes.icon}/>
              <FaInstagram  className={classes.icon}/>
              <FaTwitter  className={classes.icon}/>
            </>
          ) : null}
          
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
