import React from "react";

function FieldTemplate(props) {
  const { classNames, children } = props;//description
  return (
    <div className={classNames}>
      {children}
    </div>
  );
}

export default FieldTemplate;
