import erro404 from '../../assets/404.svg'
  

function PageNotFound() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <img className='w-[70%] h-[70%] tablet:h-[35%] tablet:w-[35%] laptop:h-[40%] laptop:w-[40%] 2xl:h-[35%] 2xl:w-[35%]' src={erro404} alt="" />
        <div className='flex flex-col items-center'>
            <h2 className='text-[#4B9093] text-[20px] tablet:text-[25px] laptop:text-[25px] 2xl:text-[35px]' >Página Não Encontrada</h2>
            <h3 className='text-gray-second text-[10px] items-center tablet:text-[15px] laptop:text-[15px] 2xl:text-[25px]'> Não foi possível carregar esta página, verifique se há um erro de digitação.</h3>
        </div>
    </div>
  )
}

export default PageNotFound