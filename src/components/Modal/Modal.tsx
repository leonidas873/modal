import {FC} from 'react';
import "./Modal.css";


interface IProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    callback?: (name: string, age: number) => number
}

const Modal:FC<IProps> = ({isOpen, setIsOpen}) => {

const handleCloseModal = () => {
    setIsOpen(false)
}
const onBackgroundClick = ()=> {
    handleCloseModal();
}
    return isOpen && <div className="modal__background" onClick={onBackgroundClick}>
        <div className="modal__content" onClick={(e)=>e.stopPropagation()}>
        this is modal
        <button onClick={handleCloseModal}>close button</button>
        </div>
        </div>
}

export default Modal;