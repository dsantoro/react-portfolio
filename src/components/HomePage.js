import React, { Component } from 'react';

import Hero from './Hero';

class HomePage extends Component {

    render() {

        return(

            <div>
                <Hero />

                <div className="row expanded is-home">

                    <div className="small-12 columns">

                        <section className="page-content">

                            <h1>Hello World</h1>
                            <p>Seja muito bem-vindo ao meu site.</p>
                            <p>Meu nome é Danylo Santoro, tenho 35 anos e sou Frontend Developer a pelo menos 5 anos.</p>
                            <p>Atualmente preecho o cargo de Desenvolvedor Frontend II Pleno na empresa Huia em Porto Alegre, criando "aquilo que não existe", segundo filosofia da empresa.</p>
                            <p>Neste site quero apresentar um pouquinho do meu trabalho e das minhas paixões.</p>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;