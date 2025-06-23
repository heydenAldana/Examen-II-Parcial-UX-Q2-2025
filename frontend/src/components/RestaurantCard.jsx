import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const RestaurantCard = () => {
    return (
        <div>
            <Badge bg="primary" as={Button}>
                Reservar
            </Badge>
        </div>
    )
}

export default RestaurantCard;