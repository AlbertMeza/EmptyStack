import React from "react";
import useCollapse from "react-collapsed";
import "./App.css";

const Collapsible = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        {isExpanded ? "Collapse" : "Expand"}
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          Now you can see the hidden content. <br />
          <br />
          Click again to hide...
        </div>
      </div>
    </div>
  );
};

export default Week;
