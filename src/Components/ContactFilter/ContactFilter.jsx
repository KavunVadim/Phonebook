import React from "react";
import { Input, Lable, Container } from "./ContactFilter.styles";

import { useSelector, useDispatch } from "react-redux";
import { filterContact } from "../../redux/action/filter";
import { getFilter } from "../../redux/selectors";

const ContactFilter = ({ showFilter }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => getFilter(state));

  const inputHandler = (e) => {
    dispatch(filterContact(e));
  };
  return (
    <Container in={showFilter}>
      <Lable htmlFor="name">
        Find contact by name
        <Input type="text" value={filter} onChange={inputHandler} />
      </Lable>
    </Container>
  );
};

export default ContactFilter;
