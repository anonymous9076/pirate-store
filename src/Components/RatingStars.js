import Rating from '@mui/material/Rating';

export default function BasicRating({star,size}) {

    return (
            <Rating name="read-only" value={star} size={size} readOnly />
    )
}