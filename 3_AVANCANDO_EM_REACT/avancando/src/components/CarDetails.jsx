//esse componente imprime na tela uma lista

const CarDetails = ({brand, km, newCar})=>{
    return( 
      <>
      
      <div>
           
            <ul>
                <li>{brand}</li>    
                <li>{km}</li>
                <li>{newCar == true? 'new car':'used'}</li>
            </ul>   
        </div>
      </>
    );
};

export default CarDetails;