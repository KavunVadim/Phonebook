import React from "react";
import PropTypes from "prop-types";

import { Text, Button } from "./ContactItem.styles";

import iconClose from "../../helpers/icon/Delete_icon.svg";

import { useDispatch } from "react-redux";
import { asyncDeleteContact } from "../../redux/axiosOperations";

const ContactItem = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(asyncDeleteContact(id));
  };

  return (
    <>
      <Text>{name}</Text>
      <Text> {number}</Text>
      <Button src={iconClose} onClick={remove}></Button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactItem;
