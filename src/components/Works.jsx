
import React from 'react'
import styled from 'styled-components'


const Section = styled.div`
height: 100vh;
scroll-snap-align:center;

`
function Works() {

  return (
    <Section>

      <div className="container works-wrapper">
        <div className="works-main">
          <div className="works-title">
            <h2>Collaborate with brands and agencies to create impactful results.</h2>
          </div>
          <div className="works-cards">
            <div className="single-work-card" >
              <div className="single-work-img">
                <img src="./img/ui-ux.png" alt="" />
              </div>
              <div className="single-work-title">UX & UI</div>
              <div className="single-work-desc">
                Designing interfaces that are intuitive, efficient, and enjoyable to use.
              </div>
            </div>
            <div className="single-work-card" >
              <div className="single-work-img">
                <img src="./img/web-app.png" alt="" />
              </div>
              <div className="single-work-title">Web & Mobile App</div>
              <div className="single-work-desc">
                Transforming ideas into exceptional web and mobile app experiences.
              </div>
            </div>
            <div className="single-work-card" >
              <div className="single-work-img">
                <img src="./img/design.png" alt="" />
              </div>
              <div className="single-work-title">Design & Creative</div>
              <div className="single-work-desc">
                Crafting visually stunning designs that connect with your audience.
              </div>
            </div>
            <div className="single-work-card" >
              <div className="single-work-img">
                <img src="./img/development.png" alt="" />
              </div>
              <div className="single-work-title">Development</div>
              <div className="single-work-desc">
                Bringing your vision to life with the latest technology and design trends.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Works