import React, { Component } from 'react';
// import { useForm } from "react-hook-form";
import api from '../../services/api';


import '../productCrud/styles.css';

export default class ProductCrud extends Component{

    constructor(props){
        super(props);

        this.state = {
            produto: { titulo: '', descricao:'', url:'' }
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/api/produtos/${id}`);

        this.setState({ produto: response.data })
    }


    handleSubmit(produto, add = true) {
        const list = this.state.list.filter(p => p.id !== produto.id)
        if(add) list.unshift(produto)
        return list
    }
    
    handleChange(event) {
        const produto = {...this.state.produto }
        produto[event.target.name] = event.target.value
        this.setState({ produto })
    }

    
    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit} >
            <h4>Formulário</h4>
            <article>
                <label>
                Titulo:
                <input name="titulo"type="text" value={this.state.titulo} onChange={this.handleChange} />
                </label>
                <label>
                Descrição:
                <textarea name="descricao" type="text" value={this.state.descricao} onChange={this.handleChange} />
                </label>
                <label>
                Url:
                <input name="url"type="text" value={this.state.url} onChange={this.handleChange} />
                </label>
                <div className="actions">
                    <button className="btn" type="submit" value="Enviar">Salvar</button>
                </div>
            </article>
            </form>
        );
    }
}


