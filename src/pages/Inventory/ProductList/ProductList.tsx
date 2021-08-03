import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import { Link, useHistory } from 'react-router-dom';
import setting from '../../../assets/setting.png';
import style from './ProductList.module.scss';
import Button from '../../../components/button';

function ProductList() {
  const history = useHistory();
  const navigateNext = () => {
    history.push('/products/add');
  };
  return (
    <div className={style['product-list-layout']}>
      <div className={style['list-head']}>
        <div>
          <label className={style['prod-label']}>Active Products (4)</label>
          <img src={setting} />
          <Link to="/products/add">Go to product</Link>
          <Button className="product-add" label="Add New +" onClick={navigateNext} />
        </div>
        <div className={style['sub-menu']}>
          <ul>
            <li>Delete</li>
            <li>Activate</li>
            <li>Deactivate</li>
            <li>Make Campaign</li>
          </ul>
        </div>
        <div className={style['div-table']}>
          <div className={style['div-table-row']}>
            <div className={style['div-table-col']} style={{ width: '4%' }}> .</div>
            <div className={style['div-table-col']} style={{ width: '20%' }}>Product Name</div>
            <div className={style['div-table-col']} style={{ width: '20%' }}>Product Type</div>
            <div className={style['div-table-col']} style={{ width: '18%' }}>Category</div>
            <div className={style['div-table-col']} style={{ width: '14%' }}>Pricing</div>
            <div className={style['div-table-col']} style={{ width: '10%' }}>Version</div>
            <div className={style['div-table-col']} style={{ width: '14%' }}>Date Modified</div>
          </div>
        </div>
      </div>
      <div className={style['list-body']}>
        <div className={style['div-table']}>
          <div className={style['div-table-row']}>
            <div className={style['div-table-col']} style={{ width: '4%' }}>
              <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }} />
            </div>
            <div className={style['div-table-col']} style={{ width: '20%', padding: '9px 2px' }}>
              <label className={style['prod-name']}>Healthify</label>
            </div>
            <div className={style['div-table-col']} style={{ width: '20%', padding: '9px 2px' }}>
              <label className={style['prod-name']}>Mobile App</label>
            </div>
            <div className={style['div-table-col']} style={{ width: '18%', padding: '9px 2px' }}>
              <label className={style['prod-cat']}>Health & Fitness</label>
            </div>
            <div className={style['div-table-col']} style={{ width: '14%', padding: '9px 2px' }}>Pricing</div>
            <div className={style['div-table-col']} style={{ width: '10%', padding: '9px 2px' }}>Version</div>
            <div className={style['div-table-col']} style={{ width: '14%', padding: '9px 2px' }}>Date Modified</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
