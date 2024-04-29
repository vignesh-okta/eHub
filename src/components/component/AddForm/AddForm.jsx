import "./AddForm.scss";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import arrowBack from "../../../assets/icons/arrow_back-24px.svg";
import CancelButton from "../../../components/component/CancelButton/CancelButton";
import AddButton from "../../../components/component/AddButton/AddButton";

const apiURL = "http://localhost:8081/users/";

function AdduserPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    city: "",
    country: "",
    salt: "hello",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitted");
    try {
      const response = await axios.post(apiURL, formData);
      console.log(response.data.id);
      navigate(`/user/:${response.data.id}`, {
        state: { isEdit: false, formData: response.data },
      });
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="user-add">
      <div className="user-add__wrapper">
        <div className="user-add__header">
          <Link className="user-add__link" to="/">
            <img
              className="user-add__icon"
              src={arrowBack}
              alt="Return previous page"
            />
          </Link>
          <h1 className="user-add__title">Add New user</h1>
        </div>
        <form className="user-add__form" onSubmit={handleSubmit}>
          <div className="user-add__form-container">
            <div className="user-add__detail">
              <label className="user-add__label">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className={`user-add__form-detail `}
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
                required
              />

              <label className="user-add__label">Phone</label>
              <input
                type="text"
                placeholder="Phone Number"
                className={`user-add__form-detail`}
                value={formData.phone}
                onChange={handleChange}
                name="phone"
                required
              />

              <label className="user-add__label">Department</label>
              <input
                type="text"
                placeholder="Department"
                className={`user-add__form-detail`}
                value={formData.department}
                onChange={handleChange}
                name="department"
                required
              />

              <label className="user-add__label">City</label>
              <input
                type="text"
                placeholder="city"
                className={`user-add__form-detail`}
                value={formData.city}
                onChange={handleChange}
                name="city"
                required
              />
              <label className="user-add__label">State</label>
              <input
                type="text"
                placeholder="state"
                className={`user-add__form-detail`}
                value={formData.state}
                onChange={handleChange}
                name="state"
                required
              />
              <label className="user-add__label">Role</label>
              <input
                type="text"
                placeholder="role"
                className={`user-add__form-detail`}
                value={formData.role}
                onChange={handleChange}
                name="role"
                required
              />
              <label className="user-add__label">Password</label>
              <input
                type="password"
                placeholder="password"
                className={`user-add__form-detail`}
                value={formData.password}
                onChange={handleChange}
                name="password"
                required
              />
            </div>
            <div className="user-add__status">
              <label className="user-add__label">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className={`user-add__form-detail `}
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                required
              />

              <label className="user-add__label">Email</label>
              <input
                type="text"
                placeholder="email"
                className={`user-add__form-detail`}
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
              />

              <label className="user-add__label">Job Title</label>
              <input
                type="text"
                placeholder="Job Title"
                className={`user-add__form-detail `}
                value={formData.jobTitle}
                onChange={handleChange}
                name="jobTitle"
                required
              />

              <label className="user-add__label">Country</label>
              <input
                type="text"
                placeholder="country"
                className={`user-add__form-detail`}
                value={formData.country}
                onChange={handleChange}
                name="country"
                required
              />
              <label className="user-add__label">Source</label>
              <input
                type="text"
                placeholder="Source"
                className={`user-add__form-detail`}
                value={formData.source}
                onChange={handleChange}
                name="source"
                required
              />
              <label className="user-add__label">Status</label>
              <input
                type="text"
                placeholder="status"
                className={`user-add__form-detail`}
                value={formData.status}
                onChange={handleChange}
                name="status"
                required
              />
            </div>
          </div>
          <div className="user-add__button-wrapper">
            <div className="user-add__button">
              <CancelButton to="/" />
              <AddButton />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdduserPage;
