import { useState } from 'react'

import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import Logo from '../src/assets/Logo.png'
import Menu from './components/Menu'


function App() {
  
  return (
    <>
  <div className='py-6'>
    <Container className={"bg-white-200 max-w-headerContainer py-4"}>
    <Flex>
    <div className='w-[20%]'>
      <Image imgSrc={Logo}/>
    </div>
    <div className='w-[80%] pb-8 '>
      <Flex className={'justify-center gap-x-4 '}>
        <Menu menuName={'Home'}/>
        <Menu menuName={'shop'}/>
        <Menu menuName={'About'}/>
        <Menu menuName={'Contacts'}/>
        <Menu menuName={'Journal'}/>
      </Flex>
    </div>
    </Flex>
    </Container>
  </div>
    </>
  )
}

export default App
