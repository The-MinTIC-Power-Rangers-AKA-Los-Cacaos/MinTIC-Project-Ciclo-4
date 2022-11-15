import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Search = () => {

    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();
    const searchHandler = (e) => {
        e.preventDefault();

        if (keyword.trim()) {
            navigate(`/busqueda/${keyword}`);
        } else {
            navigate("/");
        }
    }


    return (
        <div class="wrap">
            <form onSubmit={searchHandler}>
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="¿Qué estás buscando?" onChange={(e) => setKeyword(e.target.value)} />
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}
