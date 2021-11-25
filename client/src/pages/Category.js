import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router';
import ReviewCard from '../components/ReviewCard';

const CATEGROY = gql`
query getCategory($id:ID!) {
    category(id: $id) {
        name
        id
        reviews {
            title
            id
            body
            rating
            categories{
                name
            }
        }
    }
}
`

export default function Category() {
    const { id } = useParams();
    const { data, loading, error } = useQuery(CATEGROY, {
        variables: { id }
    });

    let category = null;
    if (!loading) {
        category = data.category;
    }
    return (
        <div>
            {loading && <h2>loading..</h2>}
            {category && <h2> {category.name}</h2>
                && category.reviews.map(review => (
                    <ReviewCard review={review} key={review.id} />
                ))
            }
        </div>
    )
}
