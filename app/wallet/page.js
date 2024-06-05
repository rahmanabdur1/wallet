import Link from 'next/link';
import React from 'react';
import CardWallet from '../components/CardWallet/CardWallet';

const WalletPage = () => {
  return (
    <div className="min-h-screen   text-white p-5">
      <div className='flex justify-between '>
        <div className='bg-custom-black px-4 mb-3 rounded-md flex items-center'>
          <div className='flex justify-between rounded-md gap-36'>
            <span className='text-[13px]'>Connected Wallets</span>
            <div className='flex items-center gap-2'>
              <span className='text-[13px]'>Protocol: ALL</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.75 4.125L6 7.875L2.25 4.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-[13px]'>Status: ALL</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.75 4.125L6 7.875L2.25 4.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className='flex gap-2 items-center'>
              <span className='text-[13px]'>Balance: High to low</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.75 4.125L6 7.875L2.25 4.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
          </div>
        </div>

        <div className='flex gap-[52px] mb-3'>
          <div className='flex bg-custom-nav items-center py-[6px] px-[8px] gap-2 rounded-md'>
            <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 7.25H3.5C2.90326 7.25 2.33097 7.48705 1.90901 7.90901C1.48705 8.33097 1.25 8.90326 1.25 9.5V18.5C1.25 19.0967 1.48705 19.669 1.90901 20.091C2.33097 20.5129 2.90326 20.75 3.5 20.75H12.5C13.0967 20.75 13.669 20.5129 14.091 20.091C14.5129 19.669 14.75 19.0967 14.75 18.5V9.5C14.75 8.90326 14.5129 8.33097 14.091 7.90901C13.669 7.48705 13.0967 7.25 12.5 7.25H11M5 11L8 14M8 14L11 11M8 14V1.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <Link className='text-[14px]' href='/'>Import</Link>
          </div>

          <div className='flex bg-custom-nav items-center py-[6px] px-[8px] gap-2 rounded-md'>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 8.25H7.5C6.90326 8.25 6.33097 8.48705 5.90901 8.90901C5.48705 9.33097 5.25 9.90326 5.25 10.5V19.5C5.25 20.0967 5.48705 20.669 5.90901 21.091C6.33097 21.5129 6.90326 21.75 7.5 21.75H16.5C17.0967 21.75 17.669 21.5129 18.091 21.091C18.5129 20.669 18.75 20.0967 18.75 19.5V10.5C18.75 9.90326 18.5129 9.33097 18.091 8.90901C17.669 8.48705 17.0967 8.25 16.5 8.25H15M15 5.25L12 2.25M12 2.25L9 5.25M12 2.25V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <Link className='text-[14px]' href='/'>Export</Link>
          </div>

          <div className='flex bg-custom-nav items-center py-[6px] px-[8px] gap-2 rounded-md'>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.74 9.00003L14.394 18M9.606 18L9.26 9.00003M19.228 5.79003C19.57 5.84203 19.91 5.89703 20.25 5.95603M19.228 5.79003L18.16 19.673C18.1164 20.2383 17.8611 20.7662 17.445 21.1513C17.029 21.5364 16.4829 21.7502 15.916 21.75H8.084C7.5171 21.7502 6.97102 21.5364 6.55498 21.1513C6.13894 20.7662 5.88359 20.2383 5.84 19.673L4.772 5.79003M19.228 5.79003C18.0739 5.61555 16.9138 5.48313 15.75 5.39303M4.772 5.79003C4.43 5.84103 4.09 5.89603 3.75 5.95503M4.772 5.79003C5.92613 5.61555 7.08623 5.48313 8.25 5.39303M15.75 5.39303V4.47703C15.75 3.29703 14.84 2.31303 13.66 2.27603C12.5536 2.24067 11.4464 2.24067 10.34 2.27603C9.16 2.31303 8.25 3.29803 8.25 4.47703V5.39303M15.75 5.39303C13.2537 5.20011 10.7463 5.20011 8.25 5.39303" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <Link className='text-[14px]' href='/'>Detele</Link>
          </div>
        </div>

      </div>


      <main className="flex gap-7 ">
        {/* Wallet Properties Section */}
        <section className='w-[70%] flex justify-between  flex-col'>
          <div className='bg-custom-black flex justify-between p-2 rounded-md  mb-5'>
            <div className='flex items-center  pl-7 gap-1'>
              <svg width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.75 13.8125C22.75 13.1073 22.4932 12.4309 22.0361 11.9322C21.579 11.4336 20.959 11.1534 20.3125 11.1534H16.25C16.25 12.0937 15.9076 12.9955 15.2981 13.6604C14.6886 14.3253 13.862 14.6989 13 14.6989C12.138 14.6989 11.3114 14.3253 10.7019 13.6604C10.0924 12.9955 9.75 12.0937 9.75 11.1534H5.6875C5.04103 11.1534 4.42105 11.4336 3.96393 11.9322C3.50681 12.4309 3.25 13.1073 3.25 13.8125M22.75 13.8125V20.9034C22.75 21.6086 22.4932 22.285 22.0361 22.7837C21.579 23.2823 20.959 23.5625 20.3125 23.5625H5.6875C5.04103 23.5625 4.42105 23.2823 3.96393 22.7837C3.50681 22.285 3.25 21.6086 3.25 20.9034V13.8125M22.75 13.8125V10.267M3.25 13.8125V10.267M22.75 10.267C22.75 9.56181 22.4932 8.88546 22.0361 8.38678C21.579 7.88811 20.959 7.60795 20.3125 7.60795H5.6875C5.04103 7.60795 4.42105 7.88811 3.96393 8.38678C3.50681 8.88546 3.25 9.56181 3.25 10.267M22.75 10.267V6.72159C22.75 6.01636 22.4932 5.34001 22.0361 4.84133C21.579 4.34265 20.959 4.0625 20.3125 4.0625H5.6875C5.04103 4.0625 4.42105 4.34265 3.96393 4.84133C3.50681 5.34001 3.25 6.01636 3.25 6.72159V10.267" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span className='text-[13px]'>0x6695a8.....7AC60EA1065d0eF</span>
            </div>

            <div className='flex gap-1 items-center'>
              <svg width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.75 13.8125C22.75 13.1073 22.4932 12.4309 22.0361 11.9322C21.579 11.4336 20.959 11.1534 20.3125 11.1534H16.25C16.25 12.0937 15.9076 12.9955 15.2981 13.6604C14.6886 14.3253 13.862 14.6989 13 14.6989C12.138 14.6989 11.3114 14.3253 10.7019 13.6604C10.0924 12.9955 9.75 12.0937 9.75 11.1534H5.6875C5.04103 11.1534 4.42105 11.4336 3.96393 11.9322C3.50681 12.4309 3.25 13.1073 3.25 13.8125M22.75 13.8125V20.9034C22.75 21.6086 22.4932 22.285 22.0361 22.7837C21.579 23.2823 20.959 23.5625 20.3125 23.5625H5.6875C5.04103 23.5625 4.42105 23.2823 3.96393 22.7837C3.50681 22.285 3.25 21.6086 3.25 20.9034V13.8125M22.75 13.8125V10.267M3.25 13.8125V10.267M22.75 10.267C22.75 9.56181 22.4932 8.88546 22.0361 8.38678C21.579 7.88811 20.959 7.60795 20.3125 7.60795H5.6875C5.04103 7.60795 4.42105 7.88811 3.96393 8.38678C3.50681 8.88546 3.25 9.56181 3.25 10.267M22.75 10.267V6.72159C22.75 6.01636 22.4932 5.34001 22.0361 4.84133C21.579 4.34265 20.959 4.0625 20.3125 4.0625H5.6875C5.04103 4.0625 4.42105 4.34265 3.96393 4.84133C3.50681 5.34001 3.25 6.01636 3.25 6.72159V10.267" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <p className='text-[13px]'>Protocol: <span>ZKSync</span> </p>
            </div>

            <div className='flex items-center gap-2'>
              <div className='flex gap-2 text-[13px]'>
              <Link className='pl-[10px] pr-[10px] py-[5px] rounded-md bg-custom-nav' href='/'>Active</Link>
              <Link className='pl-[10px] pr-[10px] py-[5px] rounded-md bg-custom-nav' href='/'>Abort</Link>
              </div>
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_267_65" fill="white">
                  <path d="M0 5.7273C0 2.96588 2.23858 0.727295 5 0.727295H9.54545C12.3069 0.727295 14.5455 2.96587 14.5455 5.72729V10.2727C14.5455 13.0342 12.3069 15.2727 9.54545 15.2727H5.00001C2.23858 15.2727 0 13.0342 0 10.2727V5.7273Z" />
                </mask>
                <path d="M0 5.7273C0 2.96588 2.23858 0.727295 5 0.727295H9.54545C12.3069 0.727295 14.5455 2.96587 14.5455 5.72729V10.2727C14.5455 13.0342 12.3069 15.2727 9.54545 15.2727H5.00001C2.23858 15.2727 0 13.0342 0 10.2727V5.7273Z" fill="#131217" />
                <path d="M0 0.727295H14.5455H0ZM15.5455 10.2727C15.5455 13.5865 12.8592 16.2727 9.54545 16.2727H5C1.68629 16.2727 -1 13.5865 -1 10.2727H1C1 12.4819 2.79086 14.2727 5 14.2727H9.54545C11.7546 14.2727 13.5455 12.4819 13.5455 10.2727H15.5455ZM5 16.2727C1.68629 16.2727 -1 13.5865 -1 10.2727V6.72729C-1 3.41359 1.68629 0.727295 5 0.727295C2.79086 0.727295 1 2.96587 1 5.72729V10.2727C1 12.4819 2.79086 14.2727 5 14.2727V16.2727ZM9.54545 0.727295C12.8592 0.727295 15.5455 3.41359 15.5455 6.72729V10.2727C15.5455 13.5865 12.8592 16.2727 9.54545 16.2727V14.2727C11.7546 14.2727 13.5455 12.4819 13.5455 10.2727V5.72729C13.5455 2.96587 11.7546 0.727295 9.54545 0.727295Z" fill="white" fill-opacity="0.25" mask="url(#path-1-inside-1_267_65)" />
              </svg>

              <svg width="19" height="19" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.56812 6.875L10.8181 13.125L17.0681 6.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <svg width="19" height="19" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.45459 15L15.4546 5M5.45459 5L15.4546 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
          </div>
          <section className='bg-custom-black mb-5 p-8 pl-12 rounded-md'>
            <CardWallet />
          </section>
          <>
          <div className='bg-custom-black flex justify-between p-2 rounded-md mb-5'>
            <div className='flex items-center  pl-7 gap-1'>
              <svg width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.75 13.8125C22.75 13.1073 22.4932 12.4309 22.0361 11.9322C21.579 11.4336 20.959 11.1534 20.3125 11.1534H16.25C16.25 12.0937 15.9076 12.9955 15.2981 13.6604C14.6886 14.3253 13.862 14.6989 13 14.6989C12.138 14.6989 11.3114 14.3253 10.7019 13.6604C10.0924 12.9955 9.75 12.0937 9.75 11.1534H5.6875C5.04103 11.1534 4.42105 11.4336 3.96393 11.9322C3.50681 12.4309 3.25 13.1073 3.25 13.8125M22.75 13.8125V20.9034C22.75 21.6086 22.4932 22.285 22.0361 22.7837C21.579 23.2823 20.959 23.5625 20.3125 23.5625H5.6875C5.04103 23.5625 4.42105 23.2823 3.96393 22.7837C3.50681 22.285 3.25 21.6086 3.25 20.9034V13.8125M22.75 13.8125V10.267M3.25 13.8125V10.267M22.75 10.267C22.75 9.56181 22.4932 8.88546 22.0361 8.38678C21.579 7.88811 20.959 7.60795 20.3125 7.60795H5.6875C5.04103 7.60795 4.42105 7.88811 3.96393 8.38678C3.50681 8.88546 3.25 9.56181 3.25 10.267M22.75 10.267V6.72159C22.75 6.01636 22.4932 5.34001 22.0361 4.84133C21.579 4.34265 20.959 4.0625 20.3125 4.0625H5.6875C5.04103 4.0625 4.42105 4.34265 3.96393 4.84133C3.50681 5.34001 3.25 6.01636 3.25 6.72159V10.267" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span className='text-[13px]'>0x6695a8.....7AC60EA1065d0eF</span>
            </div>

            <div className='flex gap-1 items-center'>
              <svg width="22" height="22" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.75 13.8125C22.75 13.1073 22.4932 12.4309 22.0361 11.9322C21.579 11.4336 20.959 11.1534 20.3125 11.1534H16.25C16.25 12.0937 15.9076 12.9955 15.2981 13.6604C14.6886 14.3253 13.862 14.6989 13 14.6989C12.138 14.6989 11.3114 14.3253 10.7019 13.6604C10.0924 12.9955 9.75 12.0937 9.75 11.1534H5.6875C5.04103 11.1534 4.42105 11.4336 3.96393 11.9322C3.50681 12.4309 3.25 13.1073 3.25 13.8125M22.75 13.8125V20.9034C22.75 21.6086 22.4932 22.285 22.0361 22.7837C21.579 23.2823 20.959 23.5625 20.3125 23.5625H5.6875C5.04103 23.5625 4.42105 23.2823 3.96393 22.7837C3.50681 22.285 3.25 21.6086 3.25 20.9034V13.8125M22.75 13.8125V10.267M3.25 13.8125V10.267M22.75 10.267C22.75 9.56181 22.4932 8.88546 22.0361 8.38678C21.579 7.88811 20.959 7.60795 20.3125 7.60795H5.6875C5.04103 7.60795 4.42105 7.88811 3.96393 8.38678C3.50681 8.88546 3.25 9.56181 3.25 10.267M22.75 10.267V6.72159C22.75 6.01636 22.4932 5.34001 22.0361 4.84133C21.579 4.34265 20.959 4.0625 20.3125 4.0625H5.6875C5.04103 4.0625 4.42105 4.34265 3.96393 4.84133C3.50681 5.34001 3.25 6.01636 3.25 6.72159V10.267" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <p className='text-[13px]'>Protocol: <span>ZKSync</span> </p>
            </div>

            <div className='flex items-center gap-2'>
              <div className='flex gap-2 text-[13px]'>
                <Link className='pl-[10px] pr-[10px] py-[5px] rounded-md bg-custom-nav' href='/'>Active</Link>
                <Link className='pl-[10px] pr-[10px] py-[5px] rounded-md bg-custom-nav' href='/'>Abort</Link>
              </div>
              <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_267_65" fill="white">
                  <path d="M0 5.7273C0 2.96588 2.23858 0.727295 5 0.727295H9.54545C12.3069 0.727295 14.5455 2.96587 14.5455 5.72729V10.2727C14.5455 13.0342 12.3069 15.2727 9.54545 15.2727H5.00001C2.23858 15.2727 0 13.0342 0 10.2727V5.7273Z" />
                </mask>
                <path d="M0 5.7273C0 2.96588 2.23858 0.727295 5 0.727295H9.54545C12.3069 0.727295 14.5455 2.96587 14.5455 5.72729V10.2727C14.5455 13.0342 12.3069 15.2727 9.54545 15.2727H5.00001C2.23858 15.2727 0 13.0342 0 10.2727V5.7273Z" fill="#131217" />
                <path d="M0 0.727295H14.5455H0ZM15.5455 10.2727C15.5455 13.5865 12.8592 16.2727 9.54545 16.2727H5C1.68629 16.2727 -1 13.5865 -1 10.2727H1C1 12.4819 2.79086 14.2727 5 14.2727H9.54545C11.7546 14.2727 13.5455 12.4819 13.5455 10.2727H15.5455ZM5 16.2727C1.68629 16.2727 -1 13.5865 -1 10.2727V6.72729C-1 3.41359 1.68629 0.727295 5 0.727295C2.79086 0.727295 1 2.96587 1 5.72729V10.2727C1 12.4819 2.79086 14.2727 5 14.2727V16.2727ZM9.54545 0.727295C12.8592 0.727295 15.5455 3.41359 15.5455 6.72729V10.2727C15.5455 13.5865 12.8592 16.2727 9.54545 16.2727V14.2727C11.7546 14.2727 13.5455 12.4819 13.5455 10.2727V5.72729C13.5455 2.96587 11.7546 0.727295 9.54545 0.727295Z" fill="white" fill-opacity="0.25" mask="url(#path-1-inside-1_267_65)" />
              </svg>

              <svg width="19" height="19" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.56812 6.875L10.8181 13.125L17.0681 6.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <svg width="19" height="19" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.45459 15L15.4546 5M5.45459 5L15.4546 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
          </div>
          <section className='bg-custom-black mb-10 p-8 pl-12 rounded-md'>
            <CardWallet />
          </section>
          </>
        </section>

        {/* cardwallet2 */}


        <section className="bg-custom-black flex-1 h-max  p-6 rounded-lg ">
          <h2 className="text-[17px] font-semibold mb-4">Wallet Properties</h2>
          <div className="space-y-4">
            <div className='p-2 flex flex-col gap-2 rounded-md bg-custom-blue'>
              <div className='flex justify-between rounded-md  items-center'>
                <span className='text-[15px]'>Address:</span>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.34375 1.34375V4.15625M1.34375 1.34375H4.15625M1.34375 1.34375L4.625 4.625M1.34375 11.6562V8.84375M1.34375 11.6562H4.15625M1.34375 11.6562L4.625 8.375M11.6562 1.34375H8.84375M11.6562 1.34375V4.15625M11.6562 1.34375L8.375 4.625M11.6562 11.6562H8.84375M11.6562 11.6562V8.84375M11.6562 11.6562L8.375 8.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className='flex items-center rounded-md gap-1 p-2 bg-custom-black'>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.75 7.5625C14.75 7.07426 14.5722 6.60602 14.2557 6.26078C13.9393 5.91554 13.5101 5.72159 13.0625 5.72159H10.25C10.25 6.37258 10.0129 6.9969 9.59099 7.45722C9.16903 7.91753 8.59674 8.17614 8 8.17614C7.40326 8.17614 6.83097 7.91753 6.40901 7.45722C5.98705 6.9969 5.75 6.37258 5.75 5.72159H2.9375C2.48995 5.72159 2.06072 5.91554 1.74426 6.26078C1.42779 6.60602 1.25 7.07426 1.25 7.5625M14.75 7.5625V12.4716C14.75 12.9598 14.5722 13.4281 14.2557 13.7733C13.9393 14.1185 13.5101 14.3125 13.0625 14.3125H2.9375C2.48995 14.3125 2.06072 14.1185 1.74426 13.7733C1.42779 13.4281 1.25 12.9598 1.25 12.4716V7.5625M14.75 7.5625V5.10795M1.25 7.5625V5.10795M14.75 5.10795C14.75 4.61972 14.5722 4.15147 14.2557 3.80624C13.9393 3.461 13.5101 3.26705 13.0625 3.26705H2.9375C2.48995 3.26705 2.06072 3.461 1.74426 3.80624C1.42779 4.15147 1.25 4.61972 1.25 5.10795M14.75 5.10795V2.65341C14.75 2.16517 14.5722 1.69693 14.2557 1.35169C13.9393 1.00645 13.5101 0.8125 13.0625 0.8125H2.9375C2.48995 0.8125 2.06072 1.00645 1.74426 1.35169C1.42779 1.69693 1.25 2.16517 1.25 2.65341V5.10795" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className='text-[13px]'>0xbeb5f6...79f6c743a41f2edde4f106ed</p>
              </div>

            </div>

            <div className='p-2 flex flex-col gap-2 rounded-md bg-custom-blue'>
              <div className='flex justify-between items-center'>

                <span className='text-[15px]'>Select Protocol:</span>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.34375 1.34375V4.15625M1.34375 1.34375H4.15625M1.34375 1.34375L4.625 4.625M1.34375 11.6562V8.84375M1.34375 11.6562H4.15625M1.34375 11.6562L4.625 8.375M11.6562 1.34375H8.84375M11.6562 1.34375V4.15625M11.6562 1.34375L8.375 4.625M11.6562 11.6562H8.84375M11.6562 11.6562V8.84375M11.6562 11.6562L8.375 8.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>

              <div className='flex justify-between p-2 rounded-md bg-custom-black'>
                <div className='flex items-center gap-1'>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.34375 1.34375V4.15625M1.34375 1.34375H4.15625M1.34375 1.34375L4.625 4.625M1.34375 11.6562V8.84375M1.34375 11.6562H4.15625M1.34375 11.6562L4.625 8.375M11.6562 1.34375H8.84375M11.6562 1.34375V4.15625M11.6562 1.34375L8.375 4.625M11.6562 11.6562H8.84375M11.6562 11.6562V8.84375M11.6562 11.6562L8.375 8.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p className='text-[13px]'>Scroll</p>
                </div>
                <div className='flex gap-1'>
                  <span className='text-[13px]'>Native zkEVM Layer 2</span>
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.625 6.1875L9 11.8125L3.375 6.1875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>

            </div>

            <div className='p-2 flex flex-col rounded-md gap-2 bg-custom-blue'>
              <div className='flex justify-between items-center'>

                <span className='text-[15px]'>Specify Condition</span>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.34375 1.34375V4.15625M1.34375 1.34375H4.15625M1.34375 1.34375L4.625 4.625M1.34375 11.6562V8.84375M1.34375 11.6562H4.15625M1.34375 11.6562L4.625 8.375M11.6562 1.34375H8.84375M11.6562 1.34375V4.15625M11.6562 1.34375L8.375 4.625M11.6562 11.6562H8.84375M11.6562 11.6562V8.84375M11.6562 11.6562L8.375 8.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>

              <div className='flex justify-between rounded-md p-2 bg-custom-black'>
                <div className='flex items-center gap-1'>
                  <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.40909 10.5455V12.5909M7.13636 8.5V12.5909M9.86364 6.45455V12.5909M12.5909 4.40909V12.5909M3.04545 16H13.9545C14.497 16 15.0173 15.7845 15.4009 15.4009C15.7845 15.0173 16 14.497 16 13.9545V3.04545C16 2.50297 15.7845 1.9827 15.4009 1.5991C15.0173 1.2155 14.497 1 13.9545 1H3.04545C2.50297 1 1.9827 1.2155 1.5991 1.5991C1.2155 1.9827 1 2.50297 1 3.04545V13.9545C1 14.497 1.2155 15.0173 1.5991 15.4009C1.9827 15.7845 2.50297 16 3.04545 16Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span className='text-[13px]'>Active</span>
                </div>
                <div className='flex gap-1'>
                  <span className='text-[13px]'>Processing Transactions</span>
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.625 6.1875L9 11.8125L3.375 6.1875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>

              </div>

            </div>
            <div className='p-2 rounded-md flex flex-col gap-2 bg-custom-blue'>
              <div className='flex justify-between items-center'>
                <span className='text-[15px]'>Balance</span>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.34375 1.34375V4.15625M1.34375 1.34375H4.15625M1.34375 1.34375L4.625 4.625M1.34375 11.6562V8.84375M1.34375 11.6562H4.15625M1.34375 11.6562L4.625 8.375M11.6562 1.34375H8.84375M11.6562 1.34375V4.15625M11.6562 1.34375L8.375 4.625M11.6562 11.6562H8.84375M11.6562 11.6562V8.84375M11.6562 11.6562L8.375 8.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className='flex justify-between p-2 rounded-md bg-custom-black'>
                <div className='flex items-center gap-1'>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.34375 1.34375V4.15625M1.34375 1.34375H4.15625M1.34375 1.34375L4.625 4.625M1.34375 11.6562V8.84375M1.34375 11.6562H4.15625M1.34375 11.6562L4.625 8.375M11.6562 1.34375H8.84375M11.6562 1.34375V4.15625M11.6562 1.34375L8.375 4.625M11.6562 11.6562H8.84375M11.6562 11.6562V8.84375M11.6562 11.6562L8.375 8.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span className='text-[13px]'>18.43 Ethereum</span>
                </div>
                <span className='text-[13px]'>$53727.50</span>
              </div>

            </div>
            <div className='p-2 rounded-md flex flex-col gap-2 bg-custom-blue'>
              <div className='flex items-center justify-between'>
                <span className='text-[15px]'>Transactions</span>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.34375 1.34375V4.15625M1.34375 1.34375H4.15625M1.34375 1.34375L4.625 4.625M1.34375 11.6562V8.84375M1.34375 11.6562H4.15625M1.34375 11.6562L4.625 8.375M11.6562 1.34375H8.84375M11.6562 1.34375V4.15625M11.6562 1.34375L8.375 4.625M11.6562 11.6562H8.84375M11.6562 11.6562V8.84375M11.6562 11.6562L8.375 8.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className='flex justify-between rounded-md p-2 bg-custom-black'>
                <div className='flex items-center gap-1'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.625 14.75L1.25 11.375M1.25 11.375L4.625 8M1.25 11.375H11.375M11.375 1.25L14.75 4.625M14.75 4.625L11.375 8M14.75 4.625H4.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span className='text-[13px]'>1989</span>
                </div>
                <span className='text-[13px]'>Transactions Processed</span>
              </div>

            </div>
            <div className='p-2 rounded-md flex flex-col gap-2 bg-custom-blue'>
              <div className='flex justify-between items-center'>
                <span className='text-[15px]'>Transaction Rate</span>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.34375 1.34375V4.15625M1.34375 1.34375H4.15625M1.34375 1.34375L4.625 4.625M1.34375 11.6562V8.84375M1.34375 11.6562H4.15625M1.34375 11.6562L4.625 8.375M11.6562 1.34375H8.84375M11.6562 1.34375V4.15625M11.6562 1.34375L8.375 4.625M11.6562 11.6562H8.84375M11.6562 11.6562V8.84375M11.6562 11.6562L8.375 8.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className='flex p-2 rounded-md bg-custom-black'>
                <span className='text-[13px]'>27%</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WalletPage;
