import fitnessforecast from '../../assets/Running-Outside-Banner.png'
import characraft from '../../assets/characraft.png'
import projectmanagement from '../../assets/Project-Management.png'
import graphicdesign from '../../assets/Graphic-Design.png'
import sales from '../../assets/sales.png'
import photography from '../../assets/Photography.png'

const Project = () => {
    return (
        <section className="gallery-section" id="work">
          <div className="flexbox-container">
            <h2 className="work-styling">Work</h2>
            <div className="gallery">
              <strong>Fitness Forecast | Project 1</strong>
              <a href="https://boydstacken.github.io/fitness-forecast/">
                <img src={fitnessforecast} alt="guy Running" className="flexbox-container img-styling" />
              </a>
            </div>
            <div className="gallery">
              <strong>CharaCraft | Project 2</strong>
              <a href="https://characraft-27a6d9fbde68.herokuapp.com/">
                <img src={characraft} alt="characraft" className="flexbox-container img-styling" />
              </a>
            </div>
            <div className="gallery ul">
              <ul>
                <li><img src={projectmanagement} alt="Project management communication" /></li>
                <li><img src={graphicdesign} alt="Computer showing graphic design" /></li>
                <li><img src={sales} alt="Sales consultation" /></li>
                <li><img src={photography} alt="Picture of dream oasis" /></li>
              </ul>
            </div>
          </div>
        </section>
      );
    }

export default Project;
