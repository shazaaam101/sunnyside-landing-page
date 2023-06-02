import React from "react";

const Client = ({ srcImg, detail, name, role }) => {
  return (
    <div className="Client">
      <img src={srcImg} alt="avatar" />
      <p className="detail">{detail}</p>
      <div className="name">{name}</div>
      <div className="role">{role}</div>
    </div>
  );
};

export default Client;
