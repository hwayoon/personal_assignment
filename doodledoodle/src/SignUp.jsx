import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function handleSubmit(e) {
  e.preventDefault();
  const signInEmail = document.querySelector("#signInEmail").value;
  const signInPassword = document.querySelector("#signInPassword").value;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, signInEmail, signInPassword).then(
    (userCredential) => {
      // Signed up
      console.log(userCredential);
      //   const user = userCredential.user;
      //   // ...
      // })
      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      // ..
    }
  );
}

export function SignUp() {
  return (
    <form>
      <h1>sign up</h1>
      <div>
        email: <input id="signInEmail" type="email" required />
      </div>
      <div>
        password: <input id="signInPassword" type="password" required />
      </div>
      <button type="submit" onClick={handleSubmit}>
        sign up
      </button>
      <button>sign in</button>
    </form>
  );
}
