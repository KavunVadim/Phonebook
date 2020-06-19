import React from "react";
import { useSelector } from "react-redux";
import { TransitionGroup } from "react-transition-group";

import { List, Item } from "./ContactList.styles";
import ContactItem from "../ContactItem/ContactItem";
import { contactsFiltered } from "../../redux/selectors";
import { getLoader } from "../../redux/selectors";
import Spiner from "../Spiner/Spiner";

const ContactList = () => {
  const filteredArr = useSelector((state) => contactsFiltered(state));
  const spinier = useSelector((state) => getLoader(state));
  return (
    <TransitionGroup component={List}>
      {filteredArr.map((contact) => (
        <Item key={contact.id}>
          {spinier && <Spiner />}
          {!spinier && <ContactItem contact={contact}></ContactItem>}
        </Item>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;
