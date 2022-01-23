import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const ClientPosting = ({ cp }) => {

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));



    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className='mb-5'>
            <Card className="shadow " sx={{ maxWidth: 345, borderRadius: '25px' }}>
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

                <CardContent>
                    <div className='d-flex align-items-center w-100'>
                        <h2 className="fw-bold text-warning"><i>POSTING</i></h2>
                        <h5 className="bg-success text-white rounded-pill px-3 ms-auto me-2 py-1"><i>OPEN</i></h5>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <p><span className='fw-bold text-dark'>Looking for</span> <br /> {cp.profession}</p>

                            <p><span className='fw-bold text-dark'>Experience</span> <br /> {cp.experience} years</p>

                        </div>

                        <div className='col-6'>
                            <p><span className='fw-bold text-dark'>Location</span> <br /> {cp.location}</p>

                            <p><span className='fw-bold text-dark'>Skills</span> <br /> {cp.skills}</p>
                        </div>
                    </div>
                    <p className='text-start' style={{ fontSize: '12px' }}>• 1 YEAR AGO </p>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    </IconButton>
                    <IconButton aria-label="share">
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {cp.description}
                        </Typography>
                    </CardContent>
                </Collapse>

                <div className="row px-1">
                    <div className="col-4"><p><small className='tex-secondary'><i className="fas fa-book"></i></small> Details</p></div>
                    <div className="col-4"><p><small className='tex-secondary'><i className="fas fa-pen"></i></small> Apply</p></div>
                    <div className="col-4"><p><small className='tex-secondary'><i className="far fa-envelope"></i></small> Ping</p></div>
                </div>

            </Card>
        </div>
    );
};

export default ClientPosting;