import React, { Component } from 'react';
import api from '../../services/api';
// import { useHistory } from 'react-router-dom';



import '../productCrud/styles.css';

export default class ProductCrud extends Component{

    constructor(props){
        super(props);

        this.state = {
            titulo: '',
            descricao: '',
            url: '',
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.loadProducts();
    }
    loadProducts = async(page = 1) => {
        const response = await api.get(`/api/produtos?page=${page}`);

        const { docs, ...produtoInfo } = response.data;

        this.setState({ produtos: docs, produtoInfo, page });

    }

    
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        alert("Solictação enviada");
        e.preventDefault();
        console.log(this.state)

        // const { id } = this.props.match.params;

        api.get(`/api/produtos`, this.state)
            .then(response => {
                // const list = this.getUpdatedList(response.data);
                // this.setState({ state: this.state, list});
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // getUpdatedList(id, add = true){
    //     const list = this.state.list.filter(p => p._id !== id._id)
    //     if(add) list.unshift(id)
    //     return list
    // }


    clear(){
        this.setState({state: this.state})
    }
    

    
    render() {
        const { titulo, descricao, url } = this.state

        return (
            <form className="container" >
            <h4>Formulário</h4>
            <article>
                <label>
                Titulo:
                <input name="titulo"type="text" value={titulo} onChange={this.handleInputChange} />
                </label>
                <label>
                Descrição:
                <textarea name="descricao" type="text" value={descricao} onChange={this.handleInputChange} />
                </label>
                <label>
                Url:
                <input name="url"type="text" value={url} onChange={this.handleInputChange} />
                </label>
                <div className="actions">
                    <button className="btn" type="submit" onClick={e => this.handleSubmit(e)} value="Enviar">Salvar</button>
                    <button className="btnCancelar" type="submit" onClick={e => this.clear(e)} value="Enviar">Cancelar</button>
                </div>
            </article>
            </form>
        );
    }
}


