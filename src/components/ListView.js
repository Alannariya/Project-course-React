import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ListView = ({gallery}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 
  const totalItems = gallery.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginateData = (data, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const paginatedData = paginateData(gallery, currentPage, itemsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    window.scrollTo(0, 0); 
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo(0, 0); 
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); 
  };

  return (
    <Wrapper>
      {paginatedData.map((painting) => {
        const { id, img, title, author, info} = painting
        return (
          <article key={id}>
            <img src={img} alt={title} />
            <div>
              <h4>{title}</h4>
              <h5 className='author'>{author}</h5>
              <p>{info.substring(0, 150)}...</p>
              <Link to={`/gallery/${id}`} className='btn'>
                Подробнее
              </Link>
            </div>
          </article>
        )
      })}
      <div className='pagination'>
        <button
          disabled={currentPage === 1}
          onClick={goToPreviousPage}
					className=' btn'
        >
          Предыдущая страница
        </button>

        <div className='page-numbers'>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`btn btn-number ${currentPage === i + 1 ? "active-btn" : ""}` }
              onClick={() => goToPage(i + 1)}	
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          disabled={paginatedData.length < itemsPerPage}
          onClick={goToNextPage}
					className=' btn'
        >
          Следующая страница
        </button>
      </div>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 350px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .author {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
	.pagination{
		display: flex;
    justify-content: space-evenly;
	}
	.btn-number{
		margin-right: 2px;
		margin-left: 2px;
	}
	.active-btn {
		background: var(--clr-primary-7);
	}
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView
