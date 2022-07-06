import React from "react";

const Photos = (props) => {
  const { users } = props;

  return (
    <div className="usersPhotos-container">
      {users?.map((obj) => (
        <img className="usersPhotos" src={obj.photoUrl} alt="hila" />
      ))}{" "}
    </div>
  );
};
export default Photos;
