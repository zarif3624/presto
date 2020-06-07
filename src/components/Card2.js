import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://2.bp.blogspot.com/-yRw3Zbj7xVg/U7zF3nyuoyI/AAAAAAAAAR4/OcYeDIhTlAs/s1600/Design+Space+of+Modern+Supermarket+Shopping.jpg"
          title=" Grocery"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Consumer Essentials
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Status of Consumer Goods and Services
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
