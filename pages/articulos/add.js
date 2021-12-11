import { useEffect } from "react";
import { addUser } from "../../utils/users";
const array = {
    title: "¿Cómo solicitar la consulta de un socio en las listas bloqueadas?",
    image: "imagen2.jpg",
    articles: [
      {
        title: "😍 Parrafo 1",
        txt: "Sit minim nulla dolore ad occaecat labore id minim pariatur ea aliqua cillum. Voluptate ullamco fugiat ad esse. Excepteur consectetur dolor nulla quis do est nisi culpa laboris sit. Magna elit eu consequat pariatur adipisicing deserunt aliquip do reprehenderit.",
        image: "imagen1.jpg",
      },
      {
        title: "parrafo 2",
        txt: "Sit minim nulla dolore ad occaecat labore id minim pariatur ea aliqua cillum. Voluptate ullamco fugiat ad esse. Excepteur consectetur dolor nulla quis do est nisi culpa laboris sit. Magna elit eu consequat pariatur adipisicing deserunt aliquip do reprehenderit.",
        image: "imagen2.jpg",
      },
      {
        title: "parrafo 3",
        txt: "Sit minim nulla dolore ad occaecat labore id minim pariatur ea aliqua cillum. Voluptate ullamco fugiat ad esse. Excepteur consectetur dolor nulla quis do est nisi culpa laboris sit. Magna elit eu consequat pariatur adipisicing deserunt aliquip do reprehenderit.",
        image: "Imagen3.png",
      },
      {
        txt: "Sit minim nulla dolore ad occaecat labore id minim pariatur ea aliqua cillum. Voluptate ullamco fugiat ad esse. Excepteur consectetur dolor nulla quis do est nisi culpa laboris sit. Magna elit eu consequat pariatur adipisicing deserunt aliquip do reprehenderit.",
        image: "imagen4.png",
      },
      {
        txt: "Sit minim nulla dolore ad occaecat labore id minim pariatur ea aliqua cillum. Voluptate ullamco fugiat ad esse. Excepteur consectetur dolor nulla quis do est nisi culpa laboris sit. Magna elit eu consequat pariatur adipisicing deserunt aliquip do reprehenderit.",
      },
      {
        txt: "Sit minim nulla dolore ad occaecat labore id minim pariatur ea aliqua cillum. Voluptate ullamco fugiat ad esse. Excepteur consectetur dolor nulla quis do est nisi culpa laboris sit. Magna elit eu consequat pariatur adipisicing deserunt aliquip do reprehenderit.",
      },
    ],
  };
  export default function Home() {
    useEffect(() => {
      addUser(array);
      console.log('awa')
    }, []);
    return (  
        
        <div>{console.log('awa')}adsasd</div>
    );
}