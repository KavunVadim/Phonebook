import React from "react";
import { Input, Lable, Container } from "./ContactFilter.styles";

import { useSelector, useDispatch } from "react-redux";
import { filterContact } from "../../redux/action/filter";
import { getFilter } from "../../redux/selectors";

const ContactFilter = ({ showFilter }) => {
  const filter = useSelector((state) => getFilter(state));
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    dispatch(filterContact(e));
  };
  return (
    <Container in={showFilter}>
      <Lable htmlFor="name">
        Find contact by name
        <Input
          type="text"
          value={filter}
          onChange={(e) => inputHandler(e.target.value)}
        />
      </Lable>
    </Container>
  );
};

export default ContactFilter;
