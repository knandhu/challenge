import { DropdownButton, Dropdown, Table } from "react-bootstrap";
import React from "react";
import axios from "axios";

function DropdownList() {
  const [val, setVal] = React.useState("");
  const [filteredval, setFilteredVal] = React.useState({});
  const handleSelect = (e) => {
    setVal(e);
  };

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/users/age/?Item=${val}`)
      .then((res) => setFilteredVal({ ...res.data }));
  }, [val]);

  return (
    <>
      <p>Age Demographic of Users --</p>
      <DropdownButton
        id="dropdown-item-button"
        title={!val ? "Item" : val}
        onSelect={handleSelect}
      >
        <Dropdown.Item eventKey="carrot">carrot</Dropdown.Item>
        <Dropdown.Item eventKey="apple">apple</Dropdown.Item>
        <Dropdown.Item eventKey="grapes">grapes</Dropdown.Item>
        <Dropdown.Item eventKey="cake">cake</Dropdown.Item>
        <Dropdown.Item eventKey="tv">tv</Dropdown.Item>
        <Dropdown.Item eventKey="crackers">crackers</Dropdown.Item>
        <Dropdown.Item eventKey="chips">chips</Dropdown.Item>
        <Dropdown.Item eventKey="ham">ham</Dropdown.Item>
      </DropdownButton>
      <br />
      {val ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Age</th>
              <th>Count</th>
            </tr>
          </thead>

          {Object.entries(filteredval).map(([age, count]) => {
            return (
              <tbody>
                <tr>
                  <td>{age}</td>
                  <td>{count}</td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      ) : null}
    </>
  );
}

export default DropdownList;
