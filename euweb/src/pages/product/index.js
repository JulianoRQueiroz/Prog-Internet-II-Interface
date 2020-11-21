import React, { Component } from 'react';
import api from '../../services/api';

import '../product/styles.css';

export default class Product extends Component{
    state = {
        produtos: {},
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/api/produtos/${id}`);

        this.setState({ produtos: response.data })
    }

    render() {
        const {produtos} = this.state;

        return (
            <div className="product-info">
                <h1>{produtos.titulo}</h1>
                <p>{produtos.descriçao}</p>

                <p>
                    URL: <a href={produtos.url}>{produtos.url}</a>
                </p>
            </div>
        )
    }
}