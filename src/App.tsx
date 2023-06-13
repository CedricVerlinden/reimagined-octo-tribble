import { useState } from "react";

import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alert, setAlert] = useState(false);

  return (
    <>
      {alert && (
        <Alert
          onClick={() => {
            setAlert(false);
          }}
        >
          GROW UP, HAVE CHILDREN, GO TO COLLEGE, GRADUATE, GET MARRIED, GET SIX
          KIDS, DIE
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlert(true)}>
        {alert ? "Gotta use the X on the alert fucker" : "Oh nyo!"}
      </Button>
    </>
  );
}

export default App;
