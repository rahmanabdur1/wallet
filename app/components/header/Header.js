import Image from 'next/image';
import React from 'react';
import nav from '../../../public/logo 1.png';
import backgroundimg from '../../../public/Background Render.png';

const Header = () => {
  return (
    <div className='relative'>
      <Image className='bg-custom-blue h-[90px]' src={backgroundimg} alt='/' />
      <header className="bg-cover absolute bg-center bg-no-repeat p-4 flex  justify-between items-center w-full top-0 z-10  "  >
        <div className='flex items-center '>

          <Image className='w-[50px]' src={nav} alt='nav' />
          <h1 className="text-xl font-bold text-white ml-2">Airdrop Farming</h1>
        </div>


        <div className='flex'>
          <div className='flex items-center gap-2'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.9791 19.8457C18.1639 18.7664 17.1092 17.8911 15.8981 17.2888C14.6871 16.6865 13.3527 16.3737 12.0001 16.3749C10.6475 16.3737 9.31313 16.6865 8.10205 17.2888C6.89097 17.8911 5.83629 18.7664 5.0211 19.8457M18.9791 19.8457C20.5698 18.4308 21.6917 16.5657 22.1981 14.4978C22.7046 12.43 22.5704 10.257 21.8135 8.26713C21.0565 6.27725 19.7126 4.56447 17.9599 3.35595C16.2072 2.14742 14.1285 1.50024 11.9995 1.50024C9.87053 1.50024 7.79185 2.14742 6.03913 3.35595C4.28642 4.56447 2.94248 6.27725 2.18555 8.26713C1.42863 10.257 1.29447 12.43 1.80089 14.4978C2.3073 16.5657 3.43035 18.4308 5.0211 19.8457M18.9791 19.8457C17.0588 21.5586 14.5733 22.5036 12.0001 22.4999C9.42646 22.5039 6.94171 21.5589 5.0211 19.8457M15.5001 9.3749C15.5001 10.3032 15.1313 11.1934 14.475 11.8498C13.8186 12.5062 12.9284 12.8749 12.0001 12.8749C11.0718 12.8749 10.1816 12.5062 9.52522 11.8498C8.86885 11.1934 8.5001 10.3032 8.5001 9.3749C8.5001 8.44664 8.86885 7.5564 9.52522 6.90003C10.1816 6.24365 11.0718 5.8749 12.0001 5.8749C12.9284 5.8749 13.8186 6.24365 14.475 6.90003C15.1313 7.5564 15.5001 8.44664 15.5001 9.3749Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span className="mr-4 text-white">Meruzu_nft</span>

          </div>
          <svg className='mr-4' width="1" height="43" viewBox="0 0 1 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="-2.18557e-08" x2="0.500002" y2="43" stroke="white" stroke-opacity="0.75" />
          </svg>

          <div className='flex items-center gap-2 bg-custom-nav rounded-md p-1'>
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.25 7V3.25C7.25 2.65326 7.48705 2.08097 7.90901 1.65901C8.33097 1.23705 8.90326 1 9.5 1H15.5C16.0967 1 16.669 1.23705 17.091 1.65901C17.5129 2.08097 17.75 2.65326 17.75 3.25V16.75C17.75 17.3467 17.5129 17.919 17.091 18.341C16.669 18.7629 16.0967 19 15.5 19H9.5C8.90326 19 8.33097 18.7629 7.90901 18.341C7.48705 17.919 7.25 17.3467 7.25 16.75V13M4.25 13L1.25 10M1.25 10L4.25 7M1.25 10H14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <span className="mr-4 text-white">Disconnect</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
