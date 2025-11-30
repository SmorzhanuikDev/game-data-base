import React from 'react';
import s from "../setting.module.scss";
import {useAppSelector} from "../../../../../hooks";

interface props {
    logOut: () => void;
}

export const ProfileData: React.FC<props> = ({logOut}) => {

    const user = useAppSelector(state => state.accountData.currentUser);

    return (
        <div className={s.profileBox}>
            <div className={s.dataString}>
                    <span className={s.desc}>
                        Login:
                    </span>
                <span>
                        {user?.login}
                    </span>
            </div>
            <div className={s.dataString}>
                    <span className={s.desc}>
                        Name:
                    </span>
                <span className={s.userName}>
                        {user?.name}
                    </span>
            </div>
            <button className={s.profileButton} onClick={logOut}>Log out</button>
        </div>
    );
};

