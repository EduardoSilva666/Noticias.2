import React from 'react'

const Categorias = ({setCategoria}) => {
    const botones = (eve) =>{
        setCategoria(eve.target.value);
    }
    return (
            <div className="btn-categorias">
                    <button  className="btntec btn-primary" value="technology" onClick={botones} >TECNOLOGÍA</button>
                    <button  className="btnneg btn-primary" value="business" onClick={botones}>NEGOCIOS</button>
                    <button  className="btnent btn-primary" value="entertainment" onClick={botones}>ENTRETENIMIENTO</button>
                    <button   className="btnge btn-primary" value="general" onClick={botones}>GENERAL</button>
                    <button className="btnsa btn-primary" value="health" onClick={botones}>SALUD</button>
                    <button className="btncs btn-primary" value="science" onClick={botones}>CIENCIA</button>
                    <button  className="btnde btn-primary" value="sports" onClick={botones}>DEPORTES</button>
            </div>
    )
    
}
export default Categorias;