import "./AddButton.scss";

function AddButton() {
  const handleAdd = () => {
    console.log("Add");
  };
  return (
    <div>
      <button className="add-button">Add User</button>
    </div>
  );
}

export default AddButton;
