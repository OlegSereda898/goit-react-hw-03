import { FcPhoneAndroid } from "react-icons/fc";
import { GrUserManager } from "react-icons/gr";
import css from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={css.item}>
      <div className={css.container}>
        <p>
          <GrUserManager className={css.icon} />
          {name}
        </p>
        <p>
          <FcPhoneAndroid className={css.icon} />
          {number}
        </p>
      </div>

      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
