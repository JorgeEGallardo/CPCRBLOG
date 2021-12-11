import Card from "./Card"
const GroupCard = (props) => {
    
    return (
        <div className="card-group">
      {props.cards.map((card, index) => (
          <Card image={card.image} title={card.title} txt={card.txt} key={index}> card.title  </Card>
      ))}
      </div>
    )
}
export default GroupCard