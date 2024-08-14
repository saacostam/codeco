import { Header, Navbar } from './modules/core'

function App() {
  return (
    <>
      <Navbar/>
      <div className='m-8 p-4 rounded-2xl max-w-7xl mx-auto bg-base-200'>
        <Header className='text-center'>Huffman</Header>
      </div>
    </>
  )
}

export default App
