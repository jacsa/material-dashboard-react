import React from 'react';

const loading = () => <div className="d-flex justify-content-center m-5">
  <div className="spinner-border spinner-border-lg text-danger" role="status">
    <span className="sr-only">Cargando...</span>
  </div>
</div>;

export default loading;