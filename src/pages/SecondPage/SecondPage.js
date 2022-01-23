import * as React from 'react';
import './SecondPage.css';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import NavigationBar from '../../NavigationBar/NavigationBar';
import ClientPosting from './ClientPosting';
import QuickBookModal from './QuickBookModal';
import EventModal from './EventModal';
import Portfolio from './Portfolio';
import Professions from './Professions';
import Operating from './Operating';
import Interactions from './Interactions';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const SecondPage = () => {
    const [basicData, setBasicData] = React.useState([])
    const [eventData, setEventData] = React.useState([])
    const [postingsData, setPostingsData] = React.useState([])
    const [portfolioData, setPortfolioData] = React.useState([])
    const [professionData, setProfessionData] = React.useState([])
    const [locationData, setLocationData] = React.useState([])
    const [interactionData, setInteractionData] = React.useState([])

    React.useEffect(() => {
        fetch('https://py.crewbella.com/user/api/profile/chiragbalani')
            .then(res => res.json())
            .then(data => {
                setBasicData(data.basic)
                setPostingsData(data.client_postings)
                setPortfolioData(data.portfolio)
                setProfessionData(data.professions)
                setLocationData(data.locations)
                setInteractionData(data.questions)
                setEventData(data.events[0])
                console.log(data.events[0]);
            })
    }, [])

    // Tabs 
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    // quickbook modal
    const [QModalOpen, setQModalOpen] = React.useState(false);
    const handleQmodalOpen = () => setQModalOpen(true);
    const handleQmodalClose = () => setQModalOpen(false);


    // Event modal
    const [eventModalOpen, setEventModalOpen] = React.useState(false);
    const handleEventModalOpen = () => setEventModalOpen(true);
    const handleEventModalClose = () => setEventModalOpen(false);

    return (
        <>
            <NavigationBar></NavigationBar>
            <div className='bg-light' style={{ minHeight: '1000px' }}>

                <div className=" mx-auto" style={{ width: '96%' }}>
                    <div className="row pt-5">

                        {/* first column */}

                        <div className="col-md-4 mb-4">
                            <div className="sticky-top">
                                <div className="profile-card ">
                                    <img src={basicData.image_hd} alt="Person" className="card__image" />
                                    <p className="card__name fw-bold">{basicData.fullname}</p>
                                    <div className="row">
                                        <div className="col-6 text-start"><p className='fw-light'>@chiragbalani</p></div>
                                        <div className=" text-end col-6"><p className='fw-light'><i className="fas fa-map-marker-alt"></i> Jaipur</p></div>
                                    </div>

                                    <div className="grid-container">
                                        <div className="grid-child-posts">
                                            <p><span className="fw-bold">{basicData.followings}</span>  followers</p>
                                        </div>

                                        <div className="grid-child-followers">
                                            <p><span className="fw-bold">{basicData.quick_bookings}</span>   quickbooks </p>
                                        </div>

                                    </div>

                                    <button onClick={handleQmodalOpen} className="see-btn draw-border">See Quickbook</button>
                                    <QuickBookModal
                                        handleQmodalClose={handleQmodalClose}
                                        QModalOpen={QModalOpen}
                                    ></QuickBookModal>

                                    <p className="fw-bold my-3"><small>#Director  #Director  #Filmaker </small> </p>

                                    <Accordion className=" text-secondary w-75 mx-auto mb-4" style={{ fontSize: '14px' }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <p className='text-center'>Know More</p>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <p><i className="fas fa-calendar-alt"></i> Joined: <span className='fw-bold'>{basicData.created_at}</span></p>
                                            <p><i className="fas fa-calendar-week"></i> Date of Birth: <span className='fw-bold' >{basicData.dob}</span><i className="fas fa-calendar-week"></i> Date of Birth: <span className='fw-bold' >{basicData.dob}</span>

                                            </p>
                                        </AccordionDetails>
                                    </Accordion>

                                    <div className="d-flex align-items-center text-secondary mx-auto" style={{ width: '80%' }}>
                                        <div className='me-auto '><button className='btn ' style={{ backgroundColor: '#a0a0a043', width: '50px', height: '50px', borderRadius: '50%' }}><i className="fas fs-4 fa-user-plus"></i></button><p className='fw-bold text-dark'><small>Follow</small></p></div>
                                        <div className='ms-auto'><button className='btn ' style={{ backgroundColor: '#a0a0a043', width: '50px', height: '50px', borderRadius: '50%' }}><i className="fas fs-4 fa-paper-plane"></i></button><p className='fw-bold text-dark'><small>Ping</small></p></div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Second column */}

                        <div className="col-md-4 mb-4">
                            <Box sx={{ flexGrow: 1, marginBottom: '20px', maxWidth: '100%', bgcolor: 'background.paper' }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    variant="scrollable"
                                    scrollButtons
                                    aria-label="visible arrows tabs example"
                                    sx={{
                                        [`& .${tabsClasses.scrollButtons}`]: {
                                            '&.Mui-disabled': { opacity: 0.8 },
                                        },
                                    }}
                                >
                                    <Tab label="Top" />
                                    <Tab label="Portfolio" />
                                    <Tab label="Client Postings" />
                                    <Tab label="Professions" />
                                    <Tab label="Operating in" />
                                    <Tab label="Interactions" />
                                </Tabs>
                            </Box>

                            {/* Portfolio Data       */}

                            <div className="container">
                                <div className="row">
                                    {portfolioData.map((pf) => <Portfolio
                                        key={pf.id}
                                        pf={pf}
                                    ></Portfolio>)}
                                </div>

                                {/* Client postings Data */}

                                <div className="row">
                                    {postingsData.map((cp) => <ClientPosting
                                        key={cp.id}
                                        cp={cp}
                                    ></ClientPosting>)}
                                </div>

                                {/* Professions Data */}

                                <div className="row">
                                    {professionData.map((pfs) => <Professions
                                        key={pfs.id}
                                        pfs={pfs}
                                    ></Professions>)}
                                </div>

                                {/* Operating in Data */}

                                <div className="row">
                                    {locationData.map((location) => <Operating
                                        key={location.id}
                                        location={location}
                                    ></Operating>)}
                                </div>
                                {/* Operating in Data */}

                                <div className="row">
                                    {interactionData.map((question) => <Interactions
                                        key={question.id}
                                        question={question}
                                    ></Interactions>)}
                                </div>

                            </div>
                        </div>



                        {/* Third column */}

                        <div className="col-md-4  text-start ">
                            <div className="sticky-top">
                                <h2 className='border-bottom fw-bold '>Events</h2>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div onClick={handleEventModalOpen} className=" event-card" style={{ cursor: 'pointer' }}>
                                            <img src="https://crewbella.s3.ap-south-1.amazonaws.com/img/events/photography/thumbnail/2_2caa75f9a85bfa9928a073e1bec3a723fd8fce22cf93522ba5efb2.jpg" className='img-fluid d-block w-100' alt='Event img' />
                                        </div>

                                        <EventModal
                                            eventModalOpen={eventModalOpen}
                                            handleEventModalClose={handleEventModalClose}
                                            eventData={eventData}
                                        ></EventModal>
                                    </div>
                                    <div className="col-md-6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SecondPage;