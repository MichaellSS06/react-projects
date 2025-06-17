import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled]=useState(false)
  const [position, setPosition]=useState({x:0, y:0})

  useEffect(()=>{
    console.log("efecto")
    const handleMove= (event)=>{
      const {clientX,clientY}=event
      console.log('handleMove', {clientX,clientY})
      setPosition({x: clientX, y:clientY})
    }
    if (enabled){
    window.addEventListener('pointermove', handleMove)
    }
    return ()=>{
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled]
  )

  useEffect(()=>{
    document.body.classList.toggle('no-cursor', enabled)

    return () => {document.body.classList.remove('no-cursor')}
  }, [enabled]
  )


  return (
    <main>
      <div style={{
          position: 'absolute',
          backgroundColor: 'rgba(255, 0, 0)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity:0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px,${position.y}px)`
      }
      }>

      </div>
        <h3>Project 3</h3>
        <button onClick={()=>setEnabled(!enabled)}>
          {enabled? "Desactivar":"Activar"} seguir puntero
        </button>
    </main>
   
  )
}

export default App
