import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import { Link } from 'react-router-dom';



const CampsiteCard = ({campsite}) => {
    const {id,image,name} = campsite;

    return (

        <Card>
         <Link to={`${id}`}>
         <CardImg top src={image} alt={name} />
       
        </Link>

 
        </Card>
    );

}
export default CampsiteCard;
