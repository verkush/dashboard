import LoginForm from "../components/LoginForm";
import LoginBg from "../assets/img/sideimg.jpg";

const LoginPage = () => {
  return (
    <div className="flex flex-col flex-auto w-full h-screen">
      <div className="h-full">
        <div className="grid lg:grid-cols-3 h-full">
          <div
            className="bg-blue-400 bg-cover lg:flex bg-no-repeat hidden"
            style={{ backgroundImage: `url(${LoginBg})` }}
          ></div>
          <div className="col-span-2 flex justify-center items-center">
            <div className="min-w-[450px] px-8">
              <div className="mb-8">
                <h1 className="text-3xl font-medium mb-2">Welcome Back</h1>
                <p>Please enter your credentials to login!</p>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
