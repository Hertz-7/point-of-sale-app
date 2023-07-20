
import './card.css';
import {addtocart} from "../../redux/slices/cartSlice.js";
import {useDispatch} from "react-redux";
// import { toast } from 'react-toastify';
function OptionCard(props) {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addtocart({name:props.title, price:props.price, quantity:1 } ) ) ;
        // toast.success('Added to cart', {
        //     position: "top-left",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        //     });
    }
  return (
    <div className="OptionCard">
        <div class="card" onClick={handleAddToCart}>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.info}</p>
                <p class="price">Rs.{props.price}</p>
            </div>
        </div>
    </div>
  );
}

export default OptionCard;
