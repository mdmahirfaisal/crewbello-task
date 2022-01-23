import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const Operating = ({ location }) => {
    const { city, country, state, zip_code } = location;
    return (
        <div>
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
                    <div className='row'>
                        <div className='col-4 '>
                            <i className="fs-1 text-danger fas fa-map-marker-alt"></i>

                        </div>

                        <div className='col-8 text-start'>
                            <h5 className='text-dark '>Now available for work in: {city} {zip_code} {state} {country} </h5>
                        </div>
                    </div>

                </CardContent>

            </Card>
        </div>
    );
};

export default Operating;