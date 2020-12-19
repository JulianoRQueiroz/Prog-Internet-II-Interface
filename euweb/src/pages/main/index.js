/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';


import '../productCrud'
import '../main/styles.css';

export default class Main extends Component {
    state = {
        produtos: [],
        produtoInfo: {},
        page: 1,
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async(page = 1) => {
        const response = await api.get(`/api/produtos?page=${page}`);

        const { docs, ...produtoInfo } = response.data;

        this.setState({ produtos: docs, produtoInfo, page });

    };

    prevPage = () => {
        const { page, produtoInfo } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber)
    }
    nextPage = () => {
        const { page, produtoInfo } = this.state;

        if(page === produtoInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    render() {
        const { produtos, page, produtoInfo } = this.state;

        return (
            <div className="product-list">
                <h4>Seja localizado</h4>
                <article id="cadastro">
                    <Link to={'/cadastro'}>Cadastre-se Já</Link>
                </article>
                <h3>Nossos parceiros</h3>
                {produtos.map(produtos => (
                    <article key={produtos._id}>
                        <strong>{produtos.titulo}</strong>
                        <p>{produtos.descriçao}</p>

                        <Link to={`/produtos/${produtos._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button  disabled={page === 1 } onClick={this.prevPage}>Anterior</button>
                    <button disabled={ page === produtoInfo.pages } onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    }
}