import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const CARTEGORIES = gql`
query getcategories{
    categories{
        name
        id
    }
}
`

export default function SiteHeader() {
    const { data, loading, error } = useQuery(CARTEGORIES);

    return (

        <div className="site-header">
            <Link to="/">
                <h1>Games Reviews</h1>
            </Link>

            {loading && <h2>Loading Catgeories...</h2>}
            <nav className="categories">
                <span>Filter reviews by category:</span>
                {data && data.categories.map(category => (
                    <Link key={category.id} to={`/category/${category.id}`}>{category.name}</Link>
                ))}
            </nav>
        </div>
    )
}
