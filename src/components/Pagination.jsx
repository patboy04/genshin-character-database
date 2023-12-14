import React from 'react'

const Pagination = (props) => {
    let pages = [];

    for(let i = 1; i < Math.ceil(props.totalPosts/props.postsPerPage); i++) {
        pages.push(i)
    }

  return (
    <div>
        <div className='flex gap-5 sm:gap-5 pb-5 sm:pb-10 lg:pb-10 justify-center'>
            {pages.map((page, index) => {
                return (
                    <div key={index} className='w-[40px] h-[40px] lg:w-[45px] lg:h[45px] bg-[#989DA2] text-white rounded-xl flex justify-center'>
                        <button 
                            className='w-full h-full'
                            onClick={() => {
                                props.setCurrentPage(page);
                                window.scrollTo({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth",
                                });
                            }}>
                            {page}
                        </button>
                    </div>
                )
                
            })}
        </div>
    </div>
  )
}

export default Pagination