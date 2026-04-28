import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-full md:w-1/2 overflow-y-auto">
        <div className="min-h-full flex flex-col px-12 pt-8 pb-12 ">
          <div className="grow flex items-center justify-center">{children}</div>
        </div>
      </div>
      <div className="hidden md:block w-1/2">
        <img
          src="https://images.pexels.com/photos/6991831/pexels-photo-6991831.jpeg?_gl=1*ppchl3*_ga*MTQzMDAwODc5OC4xNzc2MzQ2NTE2*_ga_8JE65Q40S6*czE3NzYzNDY1MTUkbzEkZzEkdDE3NzYzNDg4MjIkajU5JGwwJGgw"
          alt="Login background"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
export default AuthLayout;
