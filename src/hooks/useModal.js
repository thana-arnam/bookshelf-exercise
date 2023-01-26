import { useState } from "react";

const useModal = () => {
    const [isShow, setIsShow] = useState(false);
    const close = () => {
        setIsShow(false);
    };
    const open = () => {
        setIsShow(true);
    };
    return { isShow, open, close };
};

export default useModal;
