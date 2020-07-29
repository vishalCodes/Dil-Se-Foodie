import React from "react";

const Header = ({ search, onChangeHandler, onSubmitHandler }) => {
  return (
    <div className="jumbotron jumbotron-fluid ">
      <h1 className="display-1">
        <span className="material-icons brand-icon">local_dining</span>Dil Se
        Foodie
      </h1>
      <div className="input-group mb-3 searchtext">
        <input
          type="text"
          className="form-control"
          placeholder="Search Your Favourite Food..."
          value={search}
          onChange={(e) => onChangeHandler(e)}
        />
        <div className="input-group-append">
          <button className="btn btn-dark" onClick={onSubmitHandler}>
            Search Food
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
