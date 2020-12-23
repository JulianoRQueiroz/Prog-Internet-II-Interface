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

// state = {
//         produto: [],
//         titulo: {},
//         descricao: {},
//         url: {},
//         page: 1,
//     }

//     componentDidMount() {
//         this.loadProducts();
//     }
//     loadProducts = async() => {
//         const response = await api.post(`/api/produtos`);

//         const { docs, ...produtoInfo } = response.data;

//         this.setState({ produtos: docs, produtoInfo, page });

//     }
    
//     clear(){
//         this.setState({produto: this.state.produto})
//     }

//     save(){
//         const produto = this.state.produto;
//         const method = produto._id ? 'put' : 'post';
//         const url = produto._id ? `${api}/${produto._id}` : api;
//         api[method](url.produto).then(response =>{
//             const list = this.getUpdatedList(response.data);
//             this.setState({ produto: this.state.produto, list});
//         })
//     }
    
//     getUpdatedList(produto, add = true){
//         const list = this.state.list.filter(p => p._id !== produto._id)
//         if(add) list.unshift(produto)
//         return list
//     }

//     updateField(event){
//         const produto = {...this.state.produto }
//         produto[event.target.name] = event.target.value
//         this.setState({ produto })
//     }

//     render() {
//         return (
//             <div className="container">
//                 <h4>Formulário</h4>
//                 <article onSubmit={this.handleSubmit}>
//                     <label>Título da empresa:</label>
//                     <input 
//                         name="titulo"
//                         type="text" 
//                         placeholder="Digite o titulo da empresa..."
//                         value={this.state.produto.titulo}
//                         onChange={e => this.updateField(e)}>
//                     </input>

//                     <label>Descrição do produto:</label>
//                     <textarea
//                         name="descricao"
//                         placeholder="Ex: Produtos de artesanato..."
//                         value={this.state.produto.descricao}
//                         onChange={e => this.updateField(e)}>  
//                     </textarea>

//                     <label>Facebook:</label>
//                     <input 
//                         name= "url"
//                         type="text" 
//                         placeholder="http://www.facebook.com"
//                         value={this.state.produto.url}
//                         onChange={e => this.updateField(e)}>
//                     </input>
//                 </article>
//                 <div className="actions">
//                     <button 
//                         type="submit" 
//                         className="btn" 
//                         onClick={e => this.save(e)}>    
//                         Salvar
//                     </button>
//                     <button 
//                         type="submit" 
//                         className="btnCancelar"  
//                         onClick={e => this.clear(e)}>
//                         Cancelar
//                     </button>
//                 </div>
//             </div>
//         ); 
//     }