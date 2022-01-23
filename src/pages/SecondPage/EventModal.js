import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    margin: '0 auto',
    minHeight: '350px',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    border: 'none',
    boxShadow: 10,
    p: 4,
};

const EventModal = ({ eventModalOpen, handleEventModalClose, eventData }) => {

    console.log(eventData);
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={eventModalOpen}
                onClose={handleEventModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >

                <Fade in={eventModalOpen}>
                    <Box sx={style}>
                        <h4 className='border-bottom pb-3'><i className="fas fa-arrow-left me-4"></i> Photography</h4>
                        <div className="row">
                            <div className="col-md-7">
                                <div>
                                    <img className='d-block w-100 mt-4' src={eventData?.thumbnail} alt="Img" />
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="row">
                                    <div className="col-3">

                                        <div>
                                            <img style={{ width: '65px', height: '65px', borderRadius: '50%' }} src="https://crewbella.s3.ap-south-1.amazonaws.com/img/profiles/image/2_082f840a25435f461c0cd48ba63f410a8954077c4fc7bbd9a51448.jpg" className='img-fluid' alt="avatar" />
                                        </div>

                                    </div>
                                    <div className="col-6">
                                        <h6 className='fw-bold'>Chirag Balani</h6>
                                        <h6 className='text-danger border-right'>{eventData?.theme}</h6>
                                        <p>Professional</p>
                                    </div>
                                    <div className="col-3 text-secondary">
                                        <i className="fs-3 fas fa-paper-plane"></i> <br />
                                        <p>Ping</p>
                                    </div>
                                </div>
                                <p><small><i className="far fa-clock"></i> 1 year ago</small></p>
                                <p className='py-2 border-bottom border-top'>Zara hatt ke , Zara bach k , ye hai hindustan meri jaan
                                </p>

                                <div className="row text-center">
                                    <div className="col">
                                        2 <br /> <span className='text-secondary fw-light'>Vot(s)</span>
                                    </div>
                                    <div className="col">
                                        1 <br /><span className='text-secondary fw-light'>Comment(s)</span>
                                    </div>
                                    <div className="col">
                                        g95yk <br /> <span className='text-secondary fw-light'>Unique ID</span>
                                    </div>
                                </div>

                                <div className="row text-center border-bottom">
                                    <div className="col"><p className='bg-light rounded-pill py-1'><small><i className="fas fa-star-of-david"></i> Vote (Login)</small></p></div>
                                    <div className="col"><p className='bg-light rounded-pill py-1'><small><i className="fas fa-share-square"></i> Share</small></p></div>
                                </div>
                                <h5>Comments</h5>
                                <div className="row border-bottom ">
                                    <div className="col-4">
                                        <h6 className='bg-warning text-dark text-center mt-2' style={{ width: '30px', height: '30px', borderRadius: '50%' }}>VK</h6>
                                    </div>
                                    <div className="col-8 ">
                                        <p className='fw-bold'><small>Cvaralika. <span className='text-secondary fw-light'>1 year ago</span></small></p>
                                        <p>This is brilliant !</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default EventModal;