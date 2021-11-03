import logo from './logo.svg';
import './App.css';

function App() {

 const products = ['Kit S de Girgolas', 'Kit M de Girgolas', 'Kit L de Girgolas']

  return (
    <div>

	   
     <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Tienda</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Mi perfil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contactanos</a>
      </li>
     </ul>

       <div>
         {
           products.map((product) => {
             return(
                <div className="card">
                  <img src="..." className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{product}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                  </ul>
                  <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div>

              )
           })
         }

       </div>
	
    </div>
    
    
  );

  
}

export default App;
