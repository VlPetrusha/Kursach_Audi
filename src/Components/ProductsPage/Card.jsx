import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setFullCar } from "../../redux/slices/fullCarSlice";

import Style from "../MainStyle.module.scss";

export default function Card({ props }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className={Style.car_introdusion}>
      <img src={`http://localhost:5173/src/assets/${props?.imgUrl}`} />

      <section className={Style.card_info}>
        <p className={Style.to_hide}>Power: {props.power}hp</p>
        <p className={Style.to_hide}>Engin capacity: {props.energyCapacity}</p>
        <p className={Style.to_hide}>{props.wheelType} drive</p>
        <p className={Style.to_hide}>
          First price: <span>{props.price}</span>
        </p>
        <p>{props.name}</p>

        <button
          onClick={() => {
            dispatch(setFullCar(props));
            navigate("/car");
          }}
        >
          <svg
            width="29"
            height="24"
            viewBox="0 0 29 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.0607 13.0607C28.6464 12.4749 28.6464 11.5251 28.0607 10.9393L18.5147 1.3934C17.9289 0.807611 16.9792 0.807611 16.3934 1.3934C15.8076 1.97919 15.8076 2.92893 16.3934 3.51472L24.8787 12L16.3934 20.4853C15.8076 21.0711 15.8076 22.0208 16.3934 22.6066C16.9792 23.1924 17.9289 23.1924 18.5147 22.6066L28.0607 13.0607ZM0 13.5H27V10.5H0V13.5Z"
              fill="white"
            />
          </svg>
        </button>
      </section>
    </section>
  );
}
