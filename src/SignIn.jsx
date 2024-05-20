import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function handleSubmit(e) {
  e.preventDefault();
  const email = document.querySelector("#signUpEmail").value;
  const password = document.querySelector("#signUpPassword").value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed ip
      console.log(userCredential);
      //   const user = userCredential.user;
      //   // ...
    })
    .catch((error) => {
      console.log("sign in failed");
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export function SignIn() {
  return (
    <form>
      <h1>sign in</h1>
      <div>
        email:{" "}
        <input
          id="signUpEmail"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        password:{" "}
        <input
          id="signUpPassword"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        sign in
      </button>
      <button>sign up</button>
    </form>
  );
}
