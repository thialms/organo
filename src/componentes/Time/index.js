import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        //renderização condicional, se o primeiro parametro for verdadeiro, retorna o segundo, outra maneira de fazer é utilizando o operador ternario
        props.colaboradores.length > 0 && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
    )
}

export default Time