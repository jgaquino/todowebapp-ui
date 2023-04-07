import styles from "./Checkbox.module.scss";

const Checkbox = ({ label, onChange, checked }) => {
  return (
    <label className={styles.container}>
      {label}
      <input
        onChange={(e) => onChange(e.target.checked)}
        checked={checked}
        type="checkbox"
      />
      <span></span>
    </label>
  );
};

export default Checkbox;
