

const Project = () => {
    return (
        <section className="gallery-section" id="work">
          <div className="flexbox-container">
            <h2 className="work-styling">Work</h2>
            <div className="gallery">
              <strong>Fitness Forecast | Project 1</strong>
              <a href="https://boydstacken.github.io/fitness-forecast/">
                <img src="src/assets/Running-Outside-Banner.png" alt="guy Running" className="flexbox-container img-styling" />
              </a>
            </div>
            <div className="gallery">
              <strong>CharaCraft | Project 2</strong>
              <a href="https://characraft-27a6d9fbde68.herokuapp.com/">
                <img src="src/assets/characraft.png" alt="characraft" className="flexbox-container img-styling" />
              </a>
            </div>
            <div className="gallery ul">
              <ul>
                <li><img src="src/assets/Project-Management.png" alt="Project management communication" /></li>
                <li><img src="src/assets/Graphic-Design.png" alt="Computer showing graphic design" /></li>
                <li><img src="src/assets/Sales.png" alt="Sales consultation" /></li>
                <li><img src="src/assets/Photography.png" alt="Picture of dream oasis" /></li>
              </ul>
            </div>
          </div>
        </section>
      );
    }

export default Project;
