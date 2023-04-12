import React, { useRef, useEffect } from "react";
import { mount as MarketingMount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

export const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = MarketingMount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) history.push(nextPathname);
      },
      initialPath: history.location.pathname,
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
export default MarketingApp;
