import React, {useEffect} from 'react';
import s from './pagination.module.scss'
import {MdArrowForwardIos as NextArrow} from "react-icons/md";
import {MdArrowBackIos as BackArrow} from "react-icons/md";
import {useSearchParams} from "react-router-dom";


interface props {
    page: number
    lastPage: number | undefined
}

export const Pagination: React.FC<props> = ({page, lastPage}) => {

    const [searchParams, setSearchParams] = useSearchParams()

    const changePage = (page: number) => {
        searchParams.set('page', String(page))
        setSearchParams(searchParams)
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    useEffect(() => {
        if (!page) {
            searchParams.set('page', '1')
            setSearchParams(searchParams)
        }
    }, [page, searchParams, setSearchParams]);

    return (
        <div className={s.pagination}>
            {page > 1
                ? <div className={page > 1 ? s.paginationItem : s.disabled} onClick={() => changePage(1)}>
                    1
                </div>
                : null
            }
            <div className={page > 1 ? s.paginationItem : s.disabled}
                 onClick={page > 1 ? () => changePage(page - 1) : () => null}>
                <span className={s.backArrow}>
                <BackArrow/>
                </span>
            </div>
            <div className={s.paginationItem} aria-selected={true}>
                {page}
            </div>
            <div className={page !== lastPage ? s.paginationItem : s.disabled}
                 onClick={page !== lastPage ? () => changePage(page + 1) : () => null}>
                <NextArrow/>
            </div>
            {lastPage && (page !== lastPage)
                ? <div className={s.paginationItem} onClick={() => changePage(lastPage)}>
                    {lastPage}
                </div>
                : null
            }
        </div>
    );
};

