
import '../App.css';
import axios from 'axios';

const Catalogo = () => {
    const url = `https://fakestoreapi.com/products`;
    
    axios.get(url)
    .then(resp => {resp})
    .catch(err => {
        
        console.error(err);
    });
    return(
        <div>
            <div>
            Catalogo
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Catalogo