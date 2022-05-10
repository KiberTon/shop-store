import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '..';

const BrandBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <Row xs='auto'>
            {device.brands.map(brand =>
                <Card
                    className='p-3'
                    key={brand.id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'dark' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;