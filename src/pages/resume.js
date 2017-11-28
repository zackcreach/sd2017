import React from 'react';
import Link from 'gatsby-link';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

import Header from '../layouts/header';
import Content from '../layouts/content';
import Transition from '../components/transition';

class Resume extends React.Component {
  state = {
    width: null,
    in: true
  }
  componentDidMount() {
    this.setState({
      width: this.container.offsetWidth
    })
  }
  componentWillUnmount() {
    this.setState({
      in: false
    })
  }
  render() {
    return (
      <section>
        <Header headerWidth={this.state.width} />
        <Transition show={this.state.in}>
          <div ref={node => this.container = node}>
            <Content>
              <h2>Resume</h2>
              <div className="resume-full">
						Height: 5’5”<br />
						Weight: 110lbs<br />
						Hair: Red<br />
						Eyes: Blue<br /><br /><br />
						</div>
						
						<div className="resume-full"><h2 className="resumetitle">FILM</h2></div>
						
						<div className="resume-left">
						Just Imagine<br />
						Going Together<br />
						The Attress<br />
						Man Up<br />
						Do I?<br />
						Amoreaux<br />
						Fade To Bright<br /><br /><br />
						</div>
						
						<div className="resume-middle">
						Lead<br />
						Featured<br />
						Supporting<br />
						Supporting<br />
						Lead<br />
						Lead<br />
						Lead
						</div>
						
						<div className="resume-right">
						Sarah Moss<br />
						Sophie Webb<br />
						Nell Nakkan<br />
						Cyrus Hogg<br />
						Nell Nakkan<br />
						New York Film Academy<br />
						Chapman University
						</div>

						<div className="resume-full"><h2 className="resumetitle">THEATER</h2></div>
						
						<div className="resume-left">
						HuMan Up: Voices to Help End Rape Culture<br />
						The Broken Hearts Club	<br />
						Suburbia<br />
						Dinner With Friends<br />
						Look Homeward, Angel<br />
						La Ronde<br />
						Doubt: A Parable<br />
						Arcadia<br />
						The Tempest<br />
						Major Barbara<br />
						Five Women Wearing the Same Dress	<br />
						Once A Catholic<br />
						Southern Girls<br />
						Playing For Time<br /><br /><br />
						</div>
						
						<div className="resume-middle">
						Supporting<br />
						Shannie<br />
						Erica<br />
						Karen<br />
						Helen<br />
						Young Wife<br />
						Sister James<br />
						Thomasina<br />
						Miranda<br />
						Jenny<br />
						Meredeth<br />
						Mary Mooney<br />
						Charlotte<br />
						Fania Fenelon
						</div>
						
						<div className="resume-right">
						The Mammal Gallery<br />
						The Complex<br />
						American Academy of  Dramatic Arts<br />
						American Academy of  Dramatic Arts<br />
						American Academy of  Dramatic Arts<br />
						American Academy of  Dramatic Arts<br />
						American Academy of  Dramatic Arts<br />
						American Academy of  Dramatic Arts<br />
						American Academy of  Dramatic Arts<br />
						American Academy of  Dramatic Arts<br />
						American Academy of  Dramatic Arts<br />
						American Academy of  Dramatic Arts<br />
						American Academy of  Dramatic Arts<br />
						Morgantown Theater Company<br /><br />
						</div>
						
						<div className="resume-full">
						<h2 className="resumetitle">TRAINING</h2>
						Drama Inc. On-Camera Acting – Atlanta, GA<br />
						Highwhire Comedy Improv – Ryan Stadler - Atlanta, GA<br />
						Village Theater Improv – Cassidy Russell - Atlanta, GA<br />
						Drama Inc. Chubbuck – Jerri Tubbs – Atlanta, GA<br />
						Improv Olympic West – Paul Vaillancourt, Brett Elam, Brian Jack – Los Angeles, CA<br />
						Ivanna Chubbuck Studio – Deryl Carroll, Frantz Turner – Los Angeles, CA<br />
						UCB Improv – Allan McLeod, Brian Finkelstein – Los Angeles, CA<br />
						L.A. On-Camera Training Center – Jamison Haase – Los Angeles, CA<br />
						The American Academy of Dramatic Arts, Associate of Arts – Los Angeles, CA<br />
						Sword Fights, Inc. – Stage Combat, Brian Danner – Los Angeles, CA<br /><br /><br />
						</div>
						
						<div className="resume-full">
						<h2 className="resumetitle">SPECIAL SKILLS</h2>
						Instruments: Oboe, some Clarinet<br />
						Dialects: Standard British, Cockney, Irish, New York, Southern, Valley Girl<br />
						Other: YOGA, improv, baton twirling, basic stage combat, basic ballet, skeet shooting, eyebrow contortionist<br /><br /><br />
						</div>
            </Content>
          </div>  
        </Transition>
      </section>
    )
  }
}

export default Resume;