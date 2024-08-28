import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.contact}>
        <p className={css.item}>
          <IoMdPerson className={css.icon} />
          {name}
        </p>
        <p className={css.item}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.delete} onClick={onDelete} type="button">
        Delete
      </button>
    </>
  );
}
