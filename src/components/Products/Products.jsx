import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name : 'Shoes', description: 'Running shoes.', price: 'Rp2.279.000', image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a4c3cf11-7f1a-43af-8373-856ee709ce59/air-zoom-vomero-15-running-shoe-wqDgSG.png' },
    { id: 2, name : 'Macbook', description: 'Apple macbook.', price: 'Rp29.350.775', image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-7299263/apple_macbook_air_2020_512gb_full10_f3lxb660.jpg' },
]

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    );
}

export default Products;