import React from "react";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg ">
      <h1 className="text-4xl  mb-4 text-white font-extrabold">
        Oops! 404 Not Found
      </h1>
      <p className="text-lg text-gray-400 mb-4 font-bold">
        We can't seem to find the page you're looking for.
      </p>
      <a href="/" className="text-blue-500 hover:underline">
        Go back home
      </a>
    </div>
  );
}

export default NotFoundPage;
