import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";

export default function MediaCard({ item }) {
	const { deleteProduct } = useProducts();
	const navigate = useNavigate();

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				height="140"
				image={item.picture}
				alt="green iguana"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{item.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{item.description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" onClick={() => deleteProduct(item.id)}>
					DELETE
				</Button>
				<Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
					EDIT
				</Button>

				<span onClick={() => navigate(`/products/${item.id}`)}>more...</span>
			</CardActions>
		</Card>
	);
}
