import React from 'react';
import { Card, ThemeProvider, Container, Row, Col } from 'react-bootstrap';
// import wordFinderImage from '../screenshots/word-finder.png';
// import weatherImage from '../screenshots/weather.png';
// import newsImage from '../screenshots/news.png';
// import esperantoImage from '../screenshots/esperanto.png';

export default function Projects() {

    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
            <Container className="projects-container">
                <Row xs={1} sm={2} lg={4} xxl={4}>
                    <Col>
                        <Card as="project-card">
                            <Card.Link href="https://word-finder-game.herokuapp.com/" className="card-link">
                                <Card.Img 
                                    variant="top" 
                                    src={wordFinderImage}
                                    alt="Image not available"
                                />
                                <Card.Body>
                                    <Card.Title style={{textDecoration: "none"}}>Word Finder Game</Card.Title>
                                    <Card.Text>Inspired by Boggle, this is a game that was coded using React.</Card.Text>            
                                </Card.Body>                            
                            </Card.Link>
                        </Card>                  
                    </Col>
                    <Col>
                        <Card.Link href="https://dean-wright-weather-app.herokuapp.com" className="card-link">
                            <Card as="project-card">
                                <Card.Img 
                                    variant="top" 
                                    src={weatherImage}
                                    alt="Image not available"
                                />
                                <Card.Body>
                                    <Card.Title>Weather App</Card.Title>
                                    <Card.Text>This web app uses a React frontend and an Express backend. It allows users to lookup weather information for any US zip code.</Card.Text>            
                                </Card.Body>
                            </Card> 
                        </Card.Link>
                       
                    </Col>
                    <Col>
                        <Card.Link href="https://dean-wright-news-app.herokuapp.com/" className="card-link">
                            <Card as="project-card">
                                <Card.Img 
                                    variant="top" 
                                    src={newsImage}
                                    alt="Image not available"
                                />
                                <Card.Body>
                                    <Card.Title>News</Card.Title>
                                    <Card.Text>This web app, coded with React, allows users to search for current news items.</Card.Text>            
                                </Card.Body>
                            </Card>                         
                        </Card.Link>
                         
                    </Col>
                    <Col>
                        <Card.Link href="https://dmwspace.github.io/Esperanto-flashcard-game/" className="card-link">
                            <Card as="project-card">
                                <Card.Img 
                                    variant="top" 
                                    src={esperantoImage}
                                    alt="Image not available"
                                />
                                <Card.Body>
                                    <Card.Title>Esperanto Flash Card App</Card.Title>
                                    <Card.Text> In this game an English word is presented and the user types in the Esperanto word that is equivalent to it. It was coded using vanilla HTML, CSS, and Javascript.</Card.Text>            
                                </Card.Body>
                            </Card>  
                        </Card.Link>
                    </Col>
                </Row>
            </Container>
        </ThemeProvider>
                     


    )
}