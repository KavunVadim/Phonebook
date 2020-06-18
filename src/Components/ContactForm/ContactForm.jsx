import React, { useState } from "react";
import PropTypes from "prop-types";

//redux
import { useDispatch, useSelector } from "react-redux";
import { asyncAddContact } from "../../redux/axiosOperations";
import { getContacts } from "../../redux/selectors";
//style
import { Lable, Input, Button, Form, Container } from "./ContactForm.styles";
//toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const formInitialState = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(formInitialState);

  const contacts = useSelector((state) => getContacts(state));
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    const name = e.target.name;
    let value = "";
    if (name === "name") {
      value = e.target.value.replace(/[^A-zА-яЁё\s]+/gi, "");
    }
    if (name === "number") {
      value = e.target.value.replace(/[^\d\s,+,(,),-]+/gi, "");
    }

    setForm({ ...form, [name]: value });
  };

  const MessageIsAlready = (name) =>
    toast.error(`${name} is already in contacts`, {
      position: toast.POSITION.TOP_CENTER,
    });

  const messageIsShort = (warn) =>
    toast.error(`Contact ${warn} is too short!`, {
      position: toast.POSITION.TOP_CENTER,
    });

  const { name, number } = form;
  const submitHandler = (e) => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };

    const findSimilarName = contacts.find((el) => el.name === contact.name);

    if (findSimilarName) {
      MessageIsAlready(name);
      return;
    } else if (name.length <= 2) {
      messageIsShort("Name");
      return;
    } else if (number.length <= 2) {
      messageIsShort("Number");
      return;
    }

    dispatch(asyncAddContact(contact));
    setForm(formInitialState);
  };

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Lable htmlFor="name">
          Name
          <Input
            name="name"
            type="text"
            value={name}
            onChange={inputHandler}
            autoFocus
          />
        </Lable>

        <Lable htmlFor="number">
          Number
          <Input
            name="number"
            type="text"
            value={number}
            onChange={inputHandler}
          />
        </Lable>

        <Button type="submit" disabled={!name || !number}>
          Add contact
        </Button>
      </Form>
    </Container>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default ContactForm;
