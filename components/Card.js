import Image from "next/image"
const Card = (props) => {
    return (
        <div className="card mx-2 comp_card bg-dark  ">
        <Image
                    src={"/images/" + props.image}
                    width='500'
                    height='400'
                    fill='respnsive'
                    className="card-img-top "
                    objectFit={"contain"}
                    alt={props.title}
                  />
        
        <div className="card-body">
          <h5 className="card-title text-info">{props.title}</h5>
          <p className="card-text ">{props.text}</p>
          <p className="card-text text-secundary"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    )
}
export default Card