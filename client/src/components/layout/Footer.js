import React from 'react';

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Made with <span className='hearts'>&hearts;</span> <a href='http://the.ethelcofresi.com/'>E.Cofresi</a> {new Date().getFullYear()}
    </footer>
  );
};
