import styles from './AddButton.module.scss'
import {FC} from "react";
import {AddButtonTypes} from "../../../types/AddButton.types.ts";

const AddButton:FC<AddButtonTypes> = ({children, onClick}) => {
    return (
        <button className={styles.addBtn} onClick={onClick}>
            {children}
        </button>
    );
};

export default AddButton;