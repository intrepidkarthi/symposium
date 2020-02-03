import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//Components
import { Header, Banner, RegistrationModal, EventCard } from "components";

//Styles
import "./styles.scss";

//Constants
import { Events } from "constant";

function Home() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const hideRegistrationModal = () => setShow(false);
  const showRegistrationModal = () => setShow(true);
  return (
    <>
      <RegistrationModal show={show} hideModal={hideRegistrationModal} />
      <Header showModal={showRegistrationModal} />
      <Banner />
      <div className="event-box">
        <div className="align-box-p">
          <div>
            <div className="align-box-m">
              <div className="event-title">
                <div className="event-title-container">
                  <h3 className="heading">Events</h3>
                  <div className="subHeading">Explore our events</div>
                </div>
              </div>
              <div className="event-listing-wrapper">
                {Events.map(event => {
                  const { image }: { image: string } = event;
                  return (
                    <div
                      key={Math.random()}
                      className="event-card-wrapper row"
                      onClick={() => history.push("/event")}
                    >
                      <div className="event-card-container">
                        <EventCard imgUrl={image} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
}

export default Home;
