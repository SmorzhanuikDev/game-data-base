import React from 'react';
import s from '../Games.module.scss'

interface props {
    page: number
    setPage: (page: number) => void
    lastPage: number | undefined
}

export const Pagination: React.FC<props> = ({page, setPage, lastPage}) => {

    const changePage = (page: number) => {
        setPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className={s.pagination}>
            {
                page > 1
                    ? <div className={page > 1 ? s.paginationItem : s.disabled} onClick={() => changePage(1)}>
                        1
                    </div>
                    : null

            }
            <div className={page > 1 ? s.paginationItem : s.disabled}
                 onClick={page > 1 ? () => changePage(page - 1) : () => {}}>
                prev
            </div>

            <div className={s.paginationItem} aria-selected={true}>
                {page}
            </div>

            <div className={page !== lastPage ? s.paginationItem : s.disabled}
                 onClick={page !== lastPage ?() => changePage(page + 1) : () => {}}>
                next
            </div>


            {
                lastPage && (page !== lastPage)
                    ? <div className={s.paginationItem} onClick={() => changePage(lastPage)}>
                        {lastPage}
                    </div>
                    : null
            }
        </div>
    );
};

