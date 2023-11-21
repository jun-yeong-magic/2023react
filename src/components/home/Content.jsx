import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaLightbulb } from "react-icons/fa6";

function Content() {
    return (
        <Container>
            <h3>The Udacity Adventage</h3>
            <Row>
                <Col sx={12} md={6} className='order-1 order-md-1 d-flex align-items-end'>
                    <div className='banner d-flex flex-column align-items-center align-items-md-start'>
                        <div className='icon'>
                            <FaLightbulb style={{ color: "white", fontSize: "2em" }} />
                        </div>
                        <div className='text-center text-md-start'>
                            <h4>title</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                    </div>
                </Col>
                <Col sx={12} md={6} className='order-1 order-md-1'>2
                </Col>
            </Row>

        </Container>
    )
}
export default Content;