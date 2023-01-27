import { useState } from "react";

const useForm = (initial) => {
    const [form, setForm] = useState(initial);
    const register = (field) => {
        return {
            value: form[field],
            onChange: (e) => {
                setForm((form) => ({
                    ...form,
                    [field]: e.target.value,
                }));
            },
        };
    };
    const registerRadio = (field, val) => {
        return {
            value: val,
            checked: val === form[field],
            onChange: (e) => {
                setForm((form) => ({
                    ...form,
                    [field]: e.target.value === "true",
                }));
            },
        };
    };
    const reset = () => {
        setForm(initial);
    };
    return {
        register,
        registerRadio,
        reset,
        form,
    };
};

export default useForm;
