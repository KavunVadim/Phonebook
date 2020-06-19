import React from "react";
import { useSelector } from "react-redux";
import { TransitionGroup } from "react-transition-group";

import { List, Item } from "./ContactList.styles";
import ContactItem from "../ContactItem/ContactItem";
import { contactsFiltered } from "../../redux/selectors";

const ContactList = ({ deleteContact }) => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => contactsFiltered(state));

  return (
    <TransitionGroup component={List}>
      {contacts.map((contact) => (
        <Item key={contact.id}>
          <ContactItem contact={contact}></ContactItem>
        </Item>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;
