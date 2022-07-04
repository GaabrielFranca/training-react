import React from "react";

const Head = ({ title, description }) => {
  React.useEffect(() => {
    document.title = "NameWebSite | " + title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", description);
  }, [title, description]);

  return <></>;
};

export default Head;
