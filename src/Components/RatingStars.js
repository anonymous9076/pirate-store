
import Rating from '@mui/material/Rating';

export default function BasicRating({star}) {
    return (
            <Rating name="read-only" value={star} readOnly />
    )
}