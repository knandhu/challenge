import { DropdownButton, Dropdown, Table } from "react-bootstrap";
import React, { Fragment } from "react";
import axios from "axios";

function DropdownList() {
  const [val, setVal] = React.useState("");
  const [filteredval, setFilteredVal] = React.useState({});
  const handleSelect = (e) => {
    setVal(e);
  };
  // calling the API whenever item changes (val)
  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/users/age/?Item=${val}`)
      .then((res) => setFilteredVal({ ...res.data }));
  }, [val]);

  return (
    <Fragment>
      <p>Age Demographic of Users With __</p>
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
        <Table striped bordered hover responsive size="sm">
          <thead>
            <tr>
              <th>Age</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(filteredval).map(([age, count], idx) => (
                <tr key={idx}>
                  <td>{age}</td>
                  <td>{count}</td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      ) : null}
    </Fragment>
  );
}

export default DropdownList;
