import React from 'react';
import { useParams } from 'react-router';
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom';

const REVIEW_DETAILS = gql`
 query getReviewDetails($id: ID!){
    review(id: $id){
        title,
        body,
        rating,
        id
    }
}
`

export default function ReviewDetails() {

    const { id } = useParams();
    const { data, loading, error } = useQuery(REVIEW_DETAILS, {
        variables: { id }
    });

    let review = {};
    if (!loading) {
        Object.assign(review, data.review);
    }
    return (
        <div>
            {loading && <h2>Loading...</h2>}
            {review && (<div key={review.id} className="review-card">
                <div className="rating">{review.rating} </div>
                <h2>{review.title}</h2>
                <small>console list</small>
                <p>{review.body}</p>
                <Link to="/" >Return</Link>
            </div>
            )}
        </div>
    )
}
