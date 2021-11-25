import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import ReviewCard from '../components/ReviewCard';

const REVIEWS_LIST = gql`
{
    reviews{
        id
        title
        rating
        body
        categories{
            name
            id
        }
    }
}
`

export default function Home() {

    const { data, loading, error } = useQuery(REVIEWS_LIST);
    return (
        <div>
            {loading && <h2>Loading...</h2>}
            {data && data.reviews.map(review => (
                <ReviewCard review={review} />
            ))}
        </div>
    )
}
