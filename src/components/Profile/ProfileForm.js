import classes from "./ProfileForm.module.css";
import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const idToken = authCtx.token;
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB_wzEcVD8Q8ppoBPVc46eQ4b5sFvkSS78",
      {
        method: 'post',
        body: JSON.stringify({
          idToken,
          password: enteredNewPassword,
          returnSecureToke: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res => {
      
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" minLength="7" id="new-password" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
