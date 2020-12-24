import React from "react";

interface MainProps {}

const Main = (props: MainProps) => {
  return (
    <div className="text-center py-20">
      <div className="inline-block">
        <img src="avatar.png" alt="brian" />
      </div>
      <div className="text-5xl font-semibold mt-10">
        Im a frontend developer
      </div>
    </div>
  );
};

export default Main;
