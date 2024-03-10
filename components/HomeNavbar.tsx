function HomeNavbar() {
  return (
    <div className='flex bg-custom-background py-3 w-full justify-center align-center gap-5'>
      <a className='
        text-custom-main 
        p-1
        hover:text-bittersweet 
        hover:cursor-pointer
      '>About</a>
      <a className='
        text-custom-main 
        p-1
        hover:text-bittersweet 
        hover:cursor-pointer
      '>Trainers</a>
      <a className='
        text-custom-main 
        p-1
        hover:text-bittersweet 
        hover:cursor-pointer
      '>Shop</a>
      <a className='
        text-custom-main 
        p-1
        hover:text-bittersweet 
        hover:cursor-pointer
      '>Join</a>
    </div>
  )
}

export default HomeNavbar;