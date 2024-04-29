import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./UserPage.scss";
import deleteIcon from "../../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../../assets/icons/edit-24px.svg";
import chevronRight from "../../../assets/icons/chevron_right-24px.svg";
import Sidebar from "../../../components/component/Sidebar/Sidebar";
import DeleteModal from "../../../components/component/DeleteModal/DeleteModal";
import AddButton from "../../../components/component/AddButton/AddButton";

const UserPage = () => {
  let baseURL = "http://localhost:8081/users";
  const [userList, setuserList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState([]);
  const [id, setId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleDeleteIconClick = (e, firstName, lastName, id) => {
    e.preventDefault();
    setModalShow(true);
    setMessage([
      `${firstName} ${lastName} `,
      `${firstName} ${lastName} from the list of users`,
    ]);
    setId(id);
  };

  const handleClose = () => {
    setModalShow(false);
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await axios.delete(`${baseURL}/${id}`);
      const response = await axios.get(`${baseURL}`);
      setuserList(response.data);
      setModalShow(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      const getUserList = async () => {
        const response = await axios.get(baseURL);
        // setUserLengths(response.data.length);
        setuserList(response.data);
      };
      getUserList();
    } catch (error) {
      console.log(error);
    }
  }, [userList.length]);

  if (!userList || userList.length === 0) {
    return <></>;
  }

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userList.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(userList.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className={`content ${modalShow ? `content--show` : ``}`}>
        <Sidebar />
        <div className="tables">
          <Link to={`/user/add`}>/
            <button className="add-button">Add User</button>
            {/* <AddButton /> */}
          </Link>
          <table className="table">
            {/* Table headers */}
            <thead>
              <tr>
                <th className="table__header">Display Name</th>
                <th className="table__header">Email</th>
                <th className="table__header">Status</th>
                <th className="table__header">Role</th>
                <th className="table__header">Actions</th>

                {/* Add more headers as needed */}
              </tr>
            </thead>
            <tbody>
              {/* Render current items */}
              {currentItems.map((item) => (
                <tr key={item.id}>
                  <td className="table__row">
                    <Link
                      to={`/user/${item.id}`}
                      className="table__link"
                      state={{ isEdit: false }}
                    >
                      <div>
                        {item.firstName} {item.lastName}
                        <img
                          className="table__chevron"
                          src={chevronRight}
                          alt="Chervon right arrow icon that links to user info page"
                        />
                      </div>
                    </Link>
                  </td>
                  <td className="table__row"> {item.email}</td>
                  <td className="table__row">
                    {" "}
                    <p className={`table__${item.status}`}>{item.status}</p>
                  </td>
                  <td className="table__row">{item.role}</td>
                  <td className="table__row ">
                    {" "}
                    <div className="table--icon">
                      <img
                        className="table__icon"
                        src={deleteIcon}
                        alt="Delete icon linking to delete user"
                        onClick={(e) =>
                          handleDeleteIconClick(
                            e,
                            item.firstName,
                            item.lastName,
                            item.id
                          )
                        }
                      />
                      <Link
                        to={`/user/${item.id}`}
                        state={{ isEdit: true }}
                        className="user__link"
                      >
                        <img
                          className="table__icon"
                          src={editIcon}
                          alt="Edit icon linking to edit user"
                        />
                      </Link>
                    </div>
                  </td>

                  {/* Add more cells as needed */}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination controls */}
          <div className="tablePage">
            <div className="pageNumber">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    className="pgbtn"
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      {modalShow && (
        <DeleteModal
          onHide={handleClose}
          message={message}
          handleDelete={() => handleDelete(id)}
        />
      )}
    </>
  );
};

export default UserPage;
