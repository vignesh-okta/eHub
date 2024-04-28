import React from "react";
import CancelButton from "../CancelButton/CancelButton";
import SaveButton from "../../../components/component/SaveButton/SaveButton";
import editIcon from "../../../assets/icons/edit-24px.svg";
import $ from "jquery";

import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./EditForm.scss";

function EditForm({ isEdit }) {
  const { id } = useParams();
  const apiURL = "http://localhost:8081/users/";
  const location = useLocation();

  const [formData, setFormData] = useState(
    Object.keys(location.state).length > 1 ? location.state.formData : null
  );
  const [editClicked, setEditClicked] = useState(isEdit);

  console.log(formData);

  const handleEditClick = (e) => {
    e.preventDefault();
    setEditClicked(true);
    $("#userName").focus();
    $("#userName").removeAttr("readOnly");
  };

  const handleChange = (e) => {
    // setFormData({ ...formData, firstName: e.target.value });

    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(e.target.phone.value);
    const reqbody = {
      firstName: e.target.userName.value,
      phone: e.target.phone.value,
      department: e.target.department.value,
      city: e.target.city.value,
      state: e.target.state.value,
      role: e.target.role.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      jobTitle: e.target.jobTitle.value,
      country: e.target.country.value,
      status: e.target.status.value,
    };
    try {
      await axios.put(`${apiURL}${id}`, reqbody);
      setEditClicked(false);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (Object.keys(location.state).length === 1) {
          const response = await axios.get(`${apiURL}${id}`);

          setFormData(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!formData) {
    return <></>;
  }
  return (
    <div className="form-wrapper">
      <form
        className="form"
        onSubmit={(e) => {
          handleSave(e);
        }}
      >
        {Object.keys(location.state).length === 1 && (
          <button className="form__image" onClick={handleEditClick}>
            <p className="form__title"> EDIT USER</p>
            <img
              className="table__icon"
              src={editIcon}
              alt="Edit icon linking to edit user"
            />
          </button>
        )}
        <div className="form__fields">
          <div>
            <div className="field-wrap">
              <label className="form__label ">
                First Name
                <input
                  type="text"
                  className={`form__input ${
                    editClicked ? `form__input--highlight` : ``
                  }`}
                  id="userName"
                  name="firstName"
                  value={`${formData.firstName}`}
                  onChange={handleChange}
                  readOnly={!editClicked}
                />
              </label>
            </div>
            <div className="field-wrap">
              <label className="form__label">
                Phone
                <input
                  type="text"
                  className="form__input"
                  id="phone"
                  name="phone"
                  value={`${formData.phone}`}
                  onChange={handleChange}
                  readOnly={!editClicked}
                />
              </label>
            </div>
            <div className="field-wrap">
              <label className="form__label">
                Department
                <input
                  type="text"
                  className="form__input"
                  id="department"
                  name="department"
                  value={`${formData.department}`}
                  onChange={handleChange}
                  readOnly={!editClicked}
                />
              </label>
            </div>
            <div className="field-wrap">
              <label className="form__label">
                City
                <input
                  type="text"
                  className="form__input"
                  id="city"
                  name="city"
                  value={`${formData.city}`}
                  onChange={handleChange}
                  readOnly={!editClicked}
                />
              </label>
            </div>
            <div className="field-wrap">
              <label className="form__label">
                State
                <input
                  type="text"
                  className="form__input"
                  id="state"
                  name="state"
                  value={`${formData.state}`}
                  onChange={handleChange}
                  readOnly={!editClicked}
                />
              </label>
            </div>
            <div className="field-wrap">
              <label className="form__label">
                Role
                <input
                  type="text"
                  className="form__input"
                  id="role"
                  name="role"
                  value={`${formData.role}`}
                  readOnly={!editClicked}
                />
              </label>
            </div>
          </div>
          <div>
            <div className="field-wrap">
              <label className="form__label">
                Last Name
                <input
                  type="text"
                  className="form__input"
                  id="lastName"
                  name="lastName"
                  value={`${formData.lastName}`}
                  onChange={handleChange}
                  readOnly={!editClicked}
                />
              </label>
            </div>
            <div className="field-wrap">
              <label className="form__label">
                Email
                <input
                  type="text"
                  className="form__input"
                  id="email"
                  name="email"
                  value={`${formData.email}`}
                  onChange={handleChange}
                  readOnly={!editClicked}
                />
              </label>
            </div>
            <div className="field-wrap">
              <label className="form__label">
                Job Title
                <input
                  type="text"
                  className="form__input"
                  id="jobTitle"
                  name="jobTitle"
                  value={`${formData.jobTitle}`}
                  onChange={handleChange}
                  readOnly={!editClicked}
                />
              </label>
            </div>
            <div className="field-wrap">
              <label className="form__label">
                Country
                <input
                  type="text"
                  className="form__input"
                  id="country"
                  name="country"
                  value={`${formData.country}`}
                  onChange={handleChange}
                  readOnly={!editClicked}
                />
              </label>
            </div>
            <div className="field-wrap">
              <label className="form__label">
                Source
                <input
                  type="text"
                  className="form__input"
                  id="source"
                  name="source"
                  value={`${formData.source}`}
                  readOnly={true}
                />
              </label>
            </div>
            <div className="field-wrap">
              <label className="form__label">
                Status
                <input
                  type="text"
                  className="form__input"
                  id="status"
                  name="status"
                  value={`${formData.status}`}
                  readOnly={!editClicked}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="user-edit__button-wrapper">
          <div className="user-edit__button">
            {editClicked && (
              <>
                <button
                  className="cancel-button"
                  onClick={() => setEditClicked(false)}
                >
                  CANCEL
                </button>
                <button className="save-button">Save</button>;
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
