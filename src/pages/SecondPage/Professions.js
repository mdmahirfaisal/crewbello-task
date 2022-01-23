import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Professions = ({ pfs }) => {
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
                    <div className='text-start'>
                        <h2 className="fw-bold text-warning"><i>QUICKBOOK</i></h2>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <img className='img-fluid' style={{ width: '60px' }} src="https://cdn.jsdelivr.net/gh/FrontCrewbella/sttc/img/user/post/profession.svg" alt="Profession" />

                        </div>

                        <div className='col-6 text-start'>
                            <p>{pfs.title}</p>
                            <p className="mt-2">Rate: {pfs.quickbook_details === null ? "Working as a Filmaker for 5 Year(s)" : pfs.quickbook_details.rate_currency} {pfs.quickbook_details === null ? "" : pfs.quickbook_details.rate_amount} {pfs.quickbook_details === null ? "" : pfs.quickbook_details.rate_duration}</p>
                        </div>
                    </div>

                </CardContent>

            </Card>
        </div>
    );
};

export default Professions;