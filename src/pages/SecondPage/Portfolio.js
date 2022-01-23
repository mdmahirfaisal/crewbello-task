import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Nav } from 'react-bootstrap';



const Portfolio = ({ pf }) => {


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <div className='mb-5'>
            <Card className="shadow " sx={{ maxWidth: 345, borderRadius: '25px' }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={pf.images[0].image}
                    alt="Portfolio"
                    style={{ borderRadius: '25px' }}
                />

                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            <img src="https://crewbella.s3.ap-south-1.amazonaws.com/img/profiles/image/2_082f840a25435f461c0cd48ba63f410a8954077c4fc7bbd9a51448.jpg" className='img-fluid' alt="avatar" />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Chirag Balani"
                    subheader="@chiragbalani"
                />


                <CardActions disableSpacing>

                    <p
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        style={{ fontSize: '13px', cursor: 'pointer' }} className='text-dark text-start'>Director's Assistant <span className='text-dark'>at</span> Mismatched... <span className='text-secondary'>{expanded ? "less" : "more"}</span></p>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>

                        <Nav.Link className='mt-0 pt-0' style={{ fontSize: '12px' }} href={pf.link}>{pf.link}</Nav.Link>

                        <div className='row'>
                            <div className='col-6 text-start'>
                                <p style={{ fontSize: '13px' }}><span className=' text-secondary'>Started</span> <br /> <span className='fw-bold text-dark'>{pf.started_time}</span></p>
                            </div>

                            <div className='col-6 text-start'>
                                <p style={{ fontSize: '13px' }}><span className=' text-secondary'>Ended</span> <br /> <span className='fw-bold text-dark'>{pf.ended_time}</span></p>
                            </div>
                        </div>

                        <p className='mb-0 pb-0' style={{ fontSize: '13px' }} >{pf.description}</p>
                        <p className='m-0 p-0 text-start' style={{ fontSize: '13px' }}>•7 MONTHS AGO</p>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
};

export default Portfolio;