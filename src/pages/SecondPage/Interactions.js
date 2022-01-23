import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Interactions = ({ question }) => {
    const { description } = question?.answer;

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='mt-5'>
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

                    <h2 className="fw-bold text-warning text-start"><i>QUESTION</i></h2>
                    <h5 className='text-dark fw-bold text-start'>{question.title}</h5>

                </CardContent>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <div className="row">
                            <div className="col-2">
                                <Avatar aria-label="recipe">
                                    <img src="https://crewbella.s3.ap-south-1.amazonaws.com/img/profiles/image/2_082f840a25435f461c0cd48ba63f410a8954077c4fc7bbd9a51448.jpg" className='img-fluid' alt="avatar" />
                                </Avatar>
                            </div>
                            <div className="col-10 text-start">
                                <p className='fw-bold'>Chirag Balani</p>
                                <p>{description}</p>
                            </div>
                        </div>
                    </CardContent>
                </Collapse>

                <div expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more" className="row px-1">
                    <div className="col-4"><p ><small className='tex-secondary'><i className="fas fa-book"></i></small> Details</p></div>
                    <div className="col-4"><p><small className='tex-secondary'><i className="fas fa-pen"></i></small> Apply</p></div>
                    <div className="col-4"><p><small className='tex-secondary'><i className="far fa-envelope"></i></small> Ping</p></div>
                </div>

            </Card>
        </div>
    );
};

export default Interactions;