import Link from 'next/link';
import React from 'react';

const CardWallet = () => {
    return (
        <div>
            <div className='flex justify-between'>

                <div>
                    <div className='flex flex-col gap-8'>

                        <div>

                            <span className='text-[13px]'>0x5B3Baea91442D6BcC31E57Ba8d59B83bb4FBfec6</span>
                        </div>

                        <div className='flex gap-5'>
                        <svg width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.125 15.4375V17.875M11.375 13V17.875M14.625 10.5625V17.875M17.875 8.125V17.875M6.5 21.9375H19.5C20.1465 21.9375 20.7665 21.6807 21.2236 21.2236C21.6807 20.7665 21.9375 20.1465 21.9375 19.5V6.5C21.9375 5.85353 21.6807 5.23355 21.2236 4.77643C20.7665 4.31931 20.1465 4.0625 19.5 4.0625H6.5C5.85353 4.0625 5.23355 4.31931 4.77643 4.77643C4.31931 5.23355 4.0625 5.85353 4.0625 6.5V19.5C4.0625 20.1465 4.31931 20.7665 4.77643 21.2236C5.23355 21.6807 5.85353 21.9375 6.5 21.9375Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span className='text-[13px]'>Protocol: Scroll</span>
                        </div>
                        <div className='flex text-[13px] items-center gap-4'>
                            <svg width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.125 15.4375V17.875M11.375 13V17.875M14.625 10.5625V17.875M17.875 8.125V17.875M6.5 21.9375H19.5C20.1465 21.9375 20.7665 21.6807 21.2236 21.2236C21.6807 20.7665 21.9375 20.1465 21.9375 19.5V6.5C21.9375 5.85353 21.6807 5.23355 21.2236 4.77643C20.7665 4.31931 20.1465 4.0625 19.5 4.0625H6.5C5.85353 4.0625 5.23355 4.31931 4.77643 4.77643C4.31931 5.23355 4.0625 5.85353 4.0625 6.5V19.5C4.0625 20.1465 4.31931 20.7665 4.77643 21.2236C5.23355 21.6807 5.85353 21.9375 6.5 21.9375Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span>Status: </span>
                            <Link className='pl-[10px] pr-[10px] py-[5px] rounded-md bg-custom-nav' href='/'>Active</Link>
                            <Link className='pl-[10px] pr-[10px] py-[5px] rounded-md bg-custom-nav' href='/'>Pause</Link>
                            <Link className='pl-[10px] pr-[10px] py-[5px] rounded-md bg-custom-nav' href='/'>Abort</Link>

                        </div>
                        <div className='text-[13px] flex gap-5'>
                            <svg width="17" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.7501 20.7501L15.12 15.12M15.12 15.12C16.6438 13.5962 17.4999 11.5295 17.4999 9.37457C17.4999 7.21961 16.6438 5.1529 15.12 3.62911C13.5962 2.10532 11.5295 1.24927 9.37457 1.24927C7.21961 1.24927 5.1529 2.10532 3.62911 3.62911C2.10532 5.1529 1.24927 7.21961 1.24927 9.37457C1.24927 11.5295 2.10532 13.5962 3.62911 15.12C5.1529 16.6438 7.21961 17.4999 9.37457 17.4999C11.5295 17.4999 13.5962 16.6438 15.12 15.12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                             <Link href='/'>Properties</Link>
                        </div>
                    </div>

                    <div>
       
                    </div>
                </div>

                <div className='flex  mt-[-175px] justify-between items-center gap-2'>
                    <svg width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.875 4.3125L3.375 6.8125L7.125 1.1875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.56812 7.125L7.81812 0.875L14.0681 7.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg width="19" height="19" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.45459 15L15.4546 5M5.45459 5L15.4546 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    
                 
                </div>
            </div>
        </div>
    );
};

export default CardWallet;