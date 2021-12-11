import Card from "./Card"
const GroupCard = (props) => {
    
    return (
        <div className="card-group">
      {props.cards.map((card) => (
          <Card image={card.image} title={card.title} txt={card.txt} cardID={card.id} key={card.id}> card.title  </Card>
      ))}
      </div>
    )
}
export default GroupCard