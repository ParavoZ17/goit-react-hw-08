import "./App.css";
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import ErrorMessage from "../Error/Error.jsx";
import { selectError, selectLoading } from "../../redux/contactsSlice.js";
import Loading from "../Loading/Loading.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps.js";

export default function App() {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="limbo">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loading />}
      {error && <ErrorMessage />}
      <ContactList />
    </div>
  );
}
