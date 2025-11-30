import React, {PropsWithChildren} from 'react';
import s from '../setting.module.scss'

interface props extends PropsWithChildren {
    error: string | undefined;
}

export const SettingErrorMessage: React.FC<props> = ({error, children}) => {
    return (
        <div className={s.errorBox}>
            {children}
            {
                error && <>
                    <div className={s.arrow}></div>
                    <div className={s.errorMessage}>
                        {error}
                    </div>
                </>
            }
        </div>
    );
};