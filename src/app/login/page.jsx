import styles from "@/app/page.module.css";

const Login = () => {
    return (
        <main className={`${styles.main} `}>
            <div className="login-container ">
                <h1 className="text-title text-medium text-center">
                    📚 Bookshelf
                </h1>
                <form className="login-form">
                    <div className="form-field column">
                        <label className="field-label text-title">
                            username
                        </label>
                        <div className="field-input pt-12">
                            <input />
                        </div>
                    </div>
                    <div>
                        <button className="btn-primary w-full">LOGIN</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Login;
