import React from 'react'

function Loading({text}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={"/loading.gif"} alt="loading" className="w-24 h-24" />
      <p className="w-full text-center text-secondary text-xl">
        {text}
      </p>
    </div>
  );
}

export default Loading