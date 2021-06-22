import React from 'react';
import { Card, CardMedia, CardContent, Typography, makeStyles} from '@material-ui/core';

export const Item = ({id, category, name, description, price, icon}) => {

    const classes = useStyles();

    return <Card className={classes.item}>
            <CardMedia className={classes.media}
            image={icon}
            style={{backgroundSize: 'contain'}}
            />
        <CardContent>
            <Typography variant="h5" component="h2">{name}</Typography>
            <Typography>{price}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
        </CardContent>
    </Card>
}

const useStyles = makeStyles((theme) => ({
    item: {
        maxWidth: '300px',
        margin: '1em',
        boxSizing: 'border-box'
    },
    media: {
        minHeight: '200px'
    }
}));
