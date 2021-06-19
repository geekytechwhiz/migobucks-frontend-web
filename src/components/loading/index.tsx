import React from 'react';
import './styles.css';

export interface ILoadingProps {
    isLoading?: boolean;
}

const Loading: React.FC<ILoadingProps> = (props) => {
  const { isLoading, children } = props;
  return (
    <>
      {
                isLoading
                 && (
                 <div className="loading-container">
                   <div className="loadingio-spinner-dual-ring-nh1b6yhkisn">
                     <div className="ldio-5afy57k1c8">
                       <div />
                       <div>
                         <div />
                       </div>
                     </div>
                   </div>
                 </div>
                 )
            }
      <div className={isLoading ? 'root-container' : ''}>
        { children }
      </div>

    </>
  );
};

export default Loading;
