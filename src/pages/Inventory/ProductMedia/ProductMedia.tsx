import React from 'react';
// import logo from '../../../assets/logo.png'
import Textarea from '../../../components/textarea/Textarea';
import style from './ProductMedia.module.scss';

function ProductMedia() {
  return (
    <div className={style['product-media']}>
      <label>
        <label className={style['add-img']}>+ Add Image</label>
      </label>
      <div className={style['image-list']}>
        <div className={style['image-info']}>
          {/* <img src={logo} alt="imagev"/> */}
        </div>
      </div>
      <div className={style['textarea-contain']}>
        <Textarea />
      </div>
    </div>
  );
}

export default ProductMedia;
