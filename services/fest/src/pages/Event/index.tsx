import React, { useState } from "react";

//Components
import { Header, RegistrationModal } from "components";

//Styles
import "./styles.scss";

function Event() {
  const [show, setShow] = useState(false);
  const hideRegistrationModal = () => setShow(false);
  const showRegistrationModal = () => setShow(true);
  return (
    <div>
      <RegistrationModal show={show} hideModal={hideRegistrationModal} />
      <Header showModal={showRegistrationModal} />
      <p>Welcome Event :)</p>
    </div>
  );
}

export default Event;
