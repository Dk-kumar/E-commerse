import React, { useEffect, useState } from "react";
import Header from "./Header.component";
import MobileHeader from "./MobileHeader.component";

const HeaderContainer = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const containerStates = {
    offset: offset,
  };

  return (
    <>
      <div className="Desktop-Wrapper">
        <Header {...containerStates} />;
      </div>
      <div className="Mobile-Wrapper">
        <MobileHeader {...containerStates} />
      </div>
    </>
  );
};

export default HeaderContainer;
