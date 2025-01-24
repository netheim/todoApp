import {FC} from 'react';
import styles from './Input.module.scss'
import {InputTypes} from "../../../types/Input.types.ts";



const Input:FC<InputTypes> = ({placeholder, type, value, onChange}) => {
    return (
        <input
            value={value}
            onChange={onChange}
            className={styles.input}
            placeholder={placeholder}
            type={type}
        />

    );
};

export default Input;