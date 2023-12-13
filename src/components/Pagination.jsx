import React from 'react'

const Pagination = (props) => {
    let pages = [];

    for(let i = 1; i < Math.ceil(props.totalPosts/props.postsPerPage); i++) {
        pages.push(i)
    }
  return (
    <div>
        <div>
            {pages.map((page, index) => {
                return <button key={index} onClick={() => {
                    props.setCurrentPage(page);
                    window.scrollTo(0, 0);
                }}>
                {page}</button>
            })}
        </div>
    </div>
  )
}

export default Pagination