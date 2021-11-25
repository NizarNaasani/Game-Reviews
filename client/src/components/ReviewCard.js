import React from 'react'
import { Link } from 'react-router-dom'

export default function ReviewCard({ review }) {
    return (
        <div key={review.id} className="review-card">
            <div className="rating">{review.rating} </div>
            <h2>{review.title}</h2>
            {review.categories.map(cat => (
                <small key={cat.id}>{cat.name}</small>
            ))}
            <p>{review.body.substring(0, 100)}...</p>
            <Link to={`/details/${review.id}`}>Read More</Link>
        </div>
    )
}
