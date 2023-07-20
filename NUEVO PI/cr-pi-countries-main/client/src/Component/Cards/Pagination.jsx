import React, { useEffect, useState } from "react";
import styles from './Pagination.module.css'

// Funcion que sirve para imprimir el paginado

const Pagination = ({ currentPage, totalPages, handlePageClick }) => {
  const pageLimit = 2;
  const pageNumbers = [];   //array que almacena todos los valores de las paginas, es decir 1,2,3..

  // calculos del inicio y del final de la pagina
  let startPage = Math.max(currentPage - pageLimit, 1);     //currentpage viene por props, en este caso seria el valor de la posicion cuando seleccionamos la pagina
  let endPage = Math.min(currentPage + pageLimit, totalPages);    //totalpages viene por props, en este caso seria el valor que tenemos en el estado local en Cards, es = (total de paises/cant a mostrar) 

  // ciclo el cual carga la secuencia de numeros para el paginado, es decir... 1,2,3...
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // funcion handler que maneja el boton de previous
  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };
  // funcion handler que maneja el boton de next
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button onClick={handlePrevClick} disabled={currentPage === 1}>
        Prev
      </button>
      {startPage > 1 && (
        <button onClick={() => handlePageClick(1)}>1</button>
      )}
      {startPage > 2 && <span>...</span>}
      {/* PERMITE MOSTRAR LOS NUMEROS DE PAGINAS */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageClick(number)}
          className={currentPage === number ? styles.active : ""}
        >
          {number}
        </button>
      ))}
      {endPage < totalPages - 1 && <span>...</span>}
      {endPage < totalPages && (
        <button onClick={() => handlePageClick(totalPages)}>
          {totalPages}
        </button>
      )}
      <button onClick={handleNextClick} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;