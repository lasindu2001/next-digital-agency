import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import { auth } from "@/lib/auth";

const Login = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
      </div>
    </div>
  )
}

export default Login