import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { LoadingSpinner } from '../../components/LoadingSpinner';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { preventDefault } from '../../lib/utils/links';
import Link from '@material-ui/core/Link';
import { Graph } from './Graph';
import useAppState from 'state/AppStateProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1400,
    margin: '5%',
    boxShadow: 'unset'
  },
  graph: {
    height: 600
  }
}));

function CountryStatsGraph() {
  const classes = useStyles();
  const { selectedCountry } = useAppState();
  const { name, alpha3Code } = selectedCountry;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.graph}>
          <Graph countryCode={alpha3Code} />
        </CardMedia>
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Overall {name} Statistics
        </Typography>
      </CardContent>
    </Card>
  );
}

export { CountryStatsGraph };
