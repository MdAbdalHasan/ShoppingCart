
import { toast } from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div >

      <div className="flex justify-between gap-9 max-w-md">

        <div className="">
          <img src={item.image} />
        </div>
        <br/>
        <div className="flex flex-col justify-between gap-3 ">
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div className="flex justify-between gap-3">
            <p>{item.price}</p>
            <div
            onClick={removeFromCart} className="w-20 h-20 text-red-500 cursor-pointer hover:text-red-700" >
              <FcDeleteDatabase />
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
