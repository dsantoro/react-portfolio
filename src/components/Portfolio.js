import React, { Component } from 'react';
import axios from 'axios';

class Portfolio extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [],
            isLoaded: false
        }
    }

    componentDidMount(){
        const results = axios.get('http://localhost/api/wp-json/wp/v2/media?per_page=100').then(function (res) {
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data;
            }
        }, function (res){
            throw new Error(res.data.message);
        });
    
        results.then(data => {
          this.setState({
            data: data,
            isLoaded: true
          })
        })
    }

    render(){

        console.log(this.state.data);

        return(
            <div className="row expanded">

                <div className="small-12 columns">

                    <section className="page-content">

                        <h1>Portfolio</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis arcu sed leo interdum tempor. Vivamus quis rutrum sapien. Vestibulum fringilla dictum neque eu facilisis. Donec vel cursus est, a sollicitudin neque. Ut quis augue lobortis dui mattis egestas. Donec rutrum nisi at metus pulvinar vulputate eget sit amet turpis. Fusce malesuada tristique massa, eget consequat est aliquet eget. Morbi convallis lectus id fringilla scelerisque.</p>

                        { this.state.isLoaded ?

                            <div className="masonry-layout">
                                { this.state.data.map((data, i) => {
                                    return(
                                        <a href="#" className="masonry-layout__panel" key={i}>
                                            <div className="masonry-layout__panel-content">
                                            <img src={ data.media_details.sizes.full.source_url } />
                                            </div>
                                        </a>
                                    )
                                }) }
                            </div>
                        : 
                            <div>
                                <p>Carregando...</p>
                            </div>
                        }
                        
                    </section>
                </div>
            </div>
        )
    }
}

export default Portfolio;