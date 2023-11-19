const LoginForm = () => {
  return (
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label
          htmlFor="nxp_id"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          NXP ID
        </label>
        <div className="mt-2">
          <input
            id="nxp_id"
            name="nxp_id"
            type="text"
            required
            placeholder="nxf97418"
            className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="********"
            required
            className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="relative flex items-start">
        <div className="flex h-6 items-center">
          <input
            id="candidates"
            aria-describedby="candidates-description"
            name="candidates"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
        <div className="ml-3 text-sm leading-6">
          <label htmlFor="candidates" className="font-medium text-gray-900">
            Remember Me
          </label>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-blue-600 p-3 text-md font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
