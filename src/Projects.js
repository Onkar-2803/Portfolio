import { Card, CardActionArea, CardActions, CardContent, CardHeader, Chip, Grid, Hidden, Link, makeStyles, Tooltip, Typography } from "@material-ui/core";
import { RepoForkedIcon, RepoIcon, StarIcon } from '@primer/octicons-react';
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
    cont: {
        minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
    },
    card: {
        height: '100%'
    },
    cardActionArea: {
        height: '100%',
        display: 'grid'
    }
}))

export default function Projects({ data }) {

    const classes = useStyles()

    return(
        <Grid direction="row-reverse" container justify="center" alignItems="center" spacing={10} className={classes.cont}>
            <Grid item xs={12} lg={6}>
                <Typography variant="h2" gutterBottom align="center">
                    Projects
                </Typography>
                <Hidden mdDown>
                    <Image
                        src="/projects.svg"
                        width="1144"
                        height="617.32"
                    />
                </Hidden>
            </Grid>
            <Grid container item xs={12} lg={6} direction="row" spacing={1}>
                {
                    !!data && data.map((v,i) =>
                    <Grid item lg={6} xs={12} key={i}>
                        <Card key={i} className={classes.card}>
                            <CardActionArea 
                                className={classes.cardActionArea} 
                                href={v.value.html_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <CardHeader
                                    title={<><RepoIcon verticalAlign='middle'/> {v.value.name}</>}
                                    subheader={
                                        <>
                                            {
                                                !!v.value.stargazers_count && 
                                                <>
                                                    <StarIcon verticalAlign='middle'/> 
                                                    {v.value.stargazers_count}
                                                </>
                                            }
                                            {
                                                !!v.value.forks && 
                                                <>
                                                    <RepoForkedIcon verticalAlign='middle'/>
                                                    {v.value.forks}
                                                </>
                                            }
                                        </>
                                    }
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {v.value.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Grid container direction="row" spacing={1}>
                                    {
                                        !!v.value.languages &&
                                        v.value.languages.map((lang, i) =>
                                            <Grid item key={i}>
                                                <Chip
                                                    key={i}
                                                    label={lang}
                                                    size="small"
                                                />  
                                            </Grid>
                                        )
                                    }
                                    </Grid>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>     
                    )
                }
            </Grid>
        </Grid>
    )
}