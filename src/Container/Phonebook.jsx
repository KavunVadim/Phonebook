import React, { useState, useEffect } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../redux/selectors/";
import { asyncGetContacts } from "../redux/axiosOperations";
//Components
import ContactForm from "../Components/ContactForm/ContactForm";
import ContactList from "../Components/ContactList/ContactList";
import TitleLogo from "../Components/TitleLogo/TitleLogo";
import ContactFilter from "../Components/ContactFilter/ContactFilter";
//toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const PhoneBook = () => {
  const contacts = useSelector((state) => getContacts(state));

  const dispatch = useDispatch();
  const [logo, setLogo] = useState(false);

  useEffect(() => {
    setLogo(true);
    dispatch(asyncGetContacts());
  }, [dispatch]);

  return (
    <>
      <TitleLogo logo={logo} />
      <ContactForm />
      <ContactFilter showFilter={contacts.length > 1} />
      <ContactList />
    </>
  );
};

export default PhoneBook;
