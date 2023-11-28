import React from 'react';
import './BlogCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';





const BlogCard = ({ imageUrl, title, publisherImage, publisherName, date, duration }) => {
  

  return (
    <Card className="root">
      <CardActionArea>
        <CardMedia
          className="media"
          image={imageUrl} // Provide the URL to the blog image
          title="Blog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="blogTitle">
            {title}
          </Typography>
          <div className="profileInfo">
            <img src={publisherImage} alt="Publisher" className="profileImage"/>
            <div>
              <Typography variant="body2" color="textSecondary" component="p" className="publisherName">
                {publisherName}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className="dateAndDuration">
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
