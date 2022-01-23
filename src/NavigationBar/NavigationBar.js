import * as React from 'react';
import './NavigationBar.css'
import { Container, Nav, Navbar, Overlay, Popover } from 'react-bootstrap';
const Navigation = () => {

    const [isSticky, setSticky] = React.useState(false);
    const [isCollapsed, setCollapsed] = React.useState(null);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);


    // pop over 
    const [show, setShow] = React.useState(false);
    const [target, setTarget] = React.useState(null);
    const ref = React.useRef(null)

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="light"
                fixed="top"
                className={(isSticky || isCollapsed) ? "shadow-sm nav-bg-color py-2" : "py-4"}>
                <Container>

                    <Navbar.Brand
                        to="/"
                        className="ml-md-5"
                        style={{ color: "#3a4256", fontSize: "1.55rem" }}>

                        <strong>CREWBELLO</strong>
                    </Navbar.Brand>

                    <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
                        <Nav className="mx-auto" style={{ cursor: 'pointer' }}>
                            <Nav.Link as="h3" className="me-4" onClick={() => window.scrollTo(500, 0)} active><i className="fas fa-home"></i></Nav.Link>
                            <Nav.Link as="h3"
                                className="me-4 text-secondary" active>
                                <i className="fas fa-search"></i>
                            </Nav.Link>
                            <Nav.Link as="h3"
                                className="me-4" active>
                                <i className="fas fa-book"></i>
                            </Nav.Link>
                            <Nav.Link as="h3"
                                className="me-4" active>
                                <i className="far fa-envelope"></i>
                            </Nav.Link>
                            <Nav.Link as="h3"
                                className="me-4" active>
                                <i className="fas fa-envelope-open-text"></i>                            </Nav.Link>

                        </Nav>

                        <Nav className='ms-auto '>
                            <div ref={ref}>
                                <h1 onClick={handleClick} style={{ cursor: 'pointer' }}><i className="fas fa-user-circle"></i></h1>

                                <Overlay
                                    show={show}
                                    target={target}
                                    placement="bottom"
                                    container={ref}
                                    containerPadding={20}
                                >
                                    <Popover id="popover-contained" className='border-0 bg-light shadow'>
                                        <Popover.Header className='border-0' > <h5 className='text-center text-primary'>CREWBELLO</h5></Popover.Header>
                                        <Popover.Body>
                                            <p>This Is Crewbello</p>
                                        </Popover.Body>
                                    </Popover>
                                </Overlay>
                            </div>



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;