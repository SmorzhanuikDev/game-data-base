import React from 'react';
import s from "../setting.module.scss";
import {CiWarning} from "react-icons/ci";
import {DeleteModal} from "./DeleteModal";

interface props {
    logOut: () => void;
}

export const DeleteAccount: React.FC<props> = ({logOut}) => {

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const container = document.getElementById('html')

    const openModal = () => {
        setIsModalOpen(true);
        if (container) {
            container.style.overflow = 'hidden';
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
        if (container) {
            container.style.overflow = 'auto';
        }
    }


    return (
        <>
            {
                isModalOpen
                    ? <DeleteModal closeModal={closeModal} logOut={logOut} />
                    : null
            }
            <div className={s.profileBox}>
                <div className={s.deleteInfo}>
                    <CiWarning className={s.warningIcon}/>
                    <span>
                    Once deleted, your game lists and ratings cannot be restored.
                </span>
                </div>
                <button className={s.profileButton} onClick={openModal}>Delete account</button>
            </div>
        </>
    );
};

