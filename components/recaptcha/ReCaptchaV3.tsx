import { Button, TextField } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { GoogleReCaptcha, useGoogleReCaptcha } from "react-google-recaptcha-v3";

const ReCaptchaV3 = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [token, setToken] = useState("");
  const [noOfVerifications, setNoOfVerifications] = useState(0);
  const [dynamicAction, setDynamicAction] = useState("homepage");
  const [actionToChange, setActionToChange] = useState("");

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
    } else {
      const token = await executeRecaptcha("dynamicAction");
      setToken(token);
      setNoOfVerifications((noOfVerifications) => noOfVerifications + 1);
      // Do whatever you want with the token
    }
  }, [dynamicAction, executeRecaptcha]);

  const handleTextChange = useCallback((event) => {
    setActionToChange(event.target.value);
  }, []);

  const handleCommitAction = useCallback(() => {
    setDynamicAction(actionToChange);
  }, [actionToChange]);

  useEffect(() => {
    if (!executeRecaptcha || !dynamicAction) {
      return;
    }

    const handleReCaptchaVerify = async () => {
      const token = await executeRecaptcha(dynamicAction);
      setToken(token);
      setNoOfVerifications((noOfVerifications) => noOfVerifications + 1);
    };

    handleReCaptchaVerify();
  }, [executeRecaptcha, dynamicAction]);

  return (
    <div>
      <div>
        <p>Current ReCaptcha action: {dynamicAction}</p>
        <TextField
          variant="outlined"
          margin="normal"
          required
          onChange={handleTextChange}
          value={actionToChange}
        />
        <button onClick={handleCommitAction}>Change action</button>
      </div>
      <br />
      <Button
        color="secondary"
        fullWidth
        variant="contained"
        onClick={handleReCaptchaVerify}
      >
        Verify recaptcha
      </Button>
      <br />
      {token && <p>Token: {token}</p>}
      <p> No of verifications: {noOfVerifications}</p>
    </div>
  );
};

export default ReCaptchaV3;
