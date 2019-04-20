import React from "react";

const Like = props => {
  return (
    <>
      {props.liked && (
        <i onClick={props.onClick} className="fa fa-heart fa-lg" />
      )}
      {!props.liked && (
        <i onClick={props.onClick} className="fa fa-heart-o fa-lg" />
      )}
    </>
  );
};

export default Like;
