/*
 * *Componente que muestra un conjunto de cards ordenadas de tal manera que el alto y anchp de
 * *componentes hijos es el mismo. Recibe como parametro un conjunto de articles, divide el array,
 *  entre 4 y los muestra en filas de 4 elementos cada una.
 */
import Card from "./Card";

const GroupCard = (props) => {
  const items = 4; // ** Constante que define cuantas cards se veran por linea
  var cardsArray = props.cards;
  var result = cardsArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / items);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // ** Comenzar una nueva fila
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
  return (
    <div>
      {result.map((group, index) => {
        return (
          <div key={index} className="card-group my-4 mx-auto">
            {group.map((card) => {
              return (
                <Card
                  image={card.image}
                  title={card.title}
                  txt={card.txt}
                  cardID={card.id}
                  key={card.id}
                  >
                </Card>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default GroupCard;
