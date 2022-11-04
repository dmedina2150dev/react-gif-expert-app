
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    // TODO Custom Hooks
    const { images, isLoading } = useFetchGifs( category );

    // const [images, setImages] = useState([])

    // const getImages = async () => {
    //     const newImages = await getGifs( category );
    //     setImages(newImages);
    // }

    // TODO EL useEffect es un hook de react que sirve para disparar efectos segundarios
    // Procesos que queremos ejecutar cuando algo suceda
    // TODO Recibe dos parametros una funcion de callback y una lista de dependencias(Condiciones con las cuales queremos volver a ejecutar el callback) 
    // useEffect( () => {
    //     getImages();
    // }, [ ] );
    // TODO si dejamos el arreglo vacio significa que se dispara la primera vez cuando se crea y construye el componente


    return (
        <>
            <h3>{category}</h3>

            {
                isLoading
                ? ( <h2>Cargando...</h2> )
                : null
            }

            { /* con un and logico */
                /*isLoading && ( <h2>Cargando...</h2> )*/
            }

            <div className="card-grid" >
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
