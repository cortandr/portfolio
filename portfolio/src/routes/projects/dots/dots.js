import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navigation from '/Users/andreacortoni/Projects/Portfolio/portfolio/src/routes/AuxComponents/Navigation.js';
import { withRouter } from 'react-router-dom';
import Footer from '/Users/andreacortoni/Projects/Portfolio/portfolio/src/routes/AuxComponents/Footer.js';
import Fade from '@material-ui/core/Fade';
import DotsUI from './dots.png';
import DotsEx from './DotsAndBoxes2.png';
import Results from './results1.png';


class DOTSBOXES extends React.Component{

    render() {
        return (
            <Grid container justify={'center'}>
                <Grid container justify={'center'} style={{marginLeft: 200, marginRight: 200}}>
                    <Navigation/>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 80}}>
                            <Grid item xs={12}>
                                <h1 style={{color: '#4885ed', textAlign: 'center'}}>
                                    Deep Reinforcement Learning for Games
                                </h1>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 30}}>
                            <Grid item xs={12}>
                                <h1 style={{color: '#4885ed'}}>
                                    Problem Definition
                                </h1>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            <Grid item xs={12}>
                                <p style={{textAlign: 'justify'}}>
                                    Deep Reinforcement Learning has proven outstanding potential when applied to games and self-play.
                                    This work attempts to replicate such results and study RL applied to a farly simple game, Dots and Boxes.
                                    Dots and boxes is a game played by two players. The oard of the game is structure as shown below.
                                </p>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'}>
                            <Grid item>
                                <img
                                    src={DotsEx}
                                    alt={'state_pic'}
                                    height={300}
                                    width={'auto'}
                                    style={{borderRadius: '3%'}}
                                />
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'}>
                            <Grid item xs={12}>
                                <p style={{textAlign: 'justify'}}>
                                    Players take turns by drawing a segment connecting two dots horizontally or vertically. A player scores a point
                                    if he/she manages to close a box by drawing its last segment.
                                    The proposed approach is able to play different board sizes and has been trained by means of self-play and DQN algorithm.
                                </p>
                                <p style={{textAlign: 'justify'}}>
                                    This work was part of a course project @KULeuven for the course "Machine Learning Project". The UI and game environment was provided
                                    as part of a skeleton, this performed here is specifically related to the Reinforcement Learning agent learning.
                                </p>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: '8px'}}>
                            <Grid item>
                                <img
                                    src={DotsUI}
                                    alt={'state_pic'}
                                    height={300}
                                    width={'auto'}
                                    style={{border: '0.2px solid #F8F8F9', boxShadow: '2px 2px 2px 3px #F8F8F9'}}
                                />
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 30}}>
                            <Grid item xs={12}>
                                <h1 style={{color: '#4885ed'}}>
                                    Approach
                                </h1>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            <Grid item xs={12}>
                                <p style={{textAlign: 'justify'}}>
                                    The problem was approached as follows. The board was represented as an image like matrix where each cell would represent
                                    the top left corner of each board cell and would hold information regarding two segments connected to it, horizontal to the right and
                                    vertical down.
                                </p>
                                <p style={{textAlign: 'justify'}}>
                                    Such representation is converted to an input tensor when fed into our model with dimension NxMxZ, where N and M are the board dimensions,
                                    while Z is the number feature channels which are divided as follows:
                                </p>
                                <ul>
                                    <li>First Channel : Agent segments</li>
                                    <li>Second Channel : Opponent segments</li>
                                    <li>Third Channel : Action segment</li>
                                </ul>
                                <p style={{textAlign: 'justify'}}>
                                    The first two channels represent a board mask holding information on segments owed by each players. While the last channel embeds the action
                                    to be evaluated by the model. Hence, the model is run for each available action at time step t. The variable dimension of the board was dealt with
                                    by applying a Global average pooling layer after the last Convolutional layer of the network.
                                </p>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            <Grid item xs={12}>
                                <p style={{textAlign: 'justify'}}>
                                    A key element of a reinforcement learning algorithm is the reward signal generated by the environment for the agents.
                                    Such function must be carefully studied and design in order to exploit as much information as possible for the interaction agents-environment
                                    For this problem a straight forward step reward was chosen. It consists of the score difference between the two players
                                </p>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 30}}>
                            <Grid item xs={12}>
                                <h1 style={{color: '#4885ed'}}>
                                    Results
                                </h1>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: 10}}>
                            <Grid item xs={12}>
                                <p style={{textAlign: 'justify'}}>
                                    The resulting agents was tested against benchmark naive agents reporting satisfying results.
                                    The two agents are a Random Policy agent and a more naive agent holding a policy on closing boxes when possible and avoiding giving
                                    boxes to the opponents.
                                </p>
                            </Grid>
                        </Grid>
                    </Fade>
                    <Fade in timeout={1000}>
                        <Grid container justify={'center'} style={{marginTop: '8px'}}>
                            <Grid item>
                                <img
                                    src={Results}
                                    alt={'state_pic'}
                                    height={'auto'}
                                    width={600}
                                    // style={{border: '0.2px solid #F8F8F9', boxShadow: '2px 2px 2px 3px #F8F8F9'}}
                                />
                            </Grid>
                        </Grid>
                    </Fade>
                    <Grid container justify={'center'} style={{marginTop: 30}}>
                        <Grid item xs={12}>
                            <h1 style={{color: '#4885ed'}}>
                                TO-DO
                            </h1>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <ul>
                                <li>
                                    Test RL Agent against more advanced Naive opponents
                                </li>
                                <li>
                                    Extend Model Architecture
                                </li>
                                <li>
                                    Design and Build new UI
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
                <Footer/>
            </Grid>
        );
    };
}

export default withRouter(DOTSBOXES);
