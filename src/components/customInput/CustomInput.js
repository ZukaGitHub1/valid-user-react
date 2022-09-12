import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
  
    return (
      <form>
        <label>{label}</label>
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input error" : ""}
        />
        {meta.touched && meta.error && <div className="error">{meta.error}</div>}
      </form>
    );
  };
  export default CustomInput