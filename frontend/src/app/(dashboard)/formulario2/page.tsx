"use client"; // Los hooks de React (useState, useEffect, etc.) solo funcionan en Client Components .
import { usuarioLog } from '@/services/greetService';
import { usuarioBaseProps } from '@/types';
import {ChangeEvent, useState} from 'react'

export default function Formulario2() {

const [usuario,setUsuario] = useState<usuarioBaseProps>({nombre:"",edad:""})
const [mensajeRespuesta,setMensajeRespuesta] = useState<string>('')




  const handleChange=(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>{

    setUsuario({
        ...usuario,
        [e.target.name] : e.target.value
        })

        console.log("este es el usuario: ",usuario.nombre)


  }

  const handleSubmit  = async (e: React.FormEvent)=>{
    e.preventDefault();
    //Valor que se envia a la api (objeto usuario)
    const requestData = usuario
    const message = await usuarioLog(requestData)
    setMensajeRespuesta(message)


    console.log(requestData)
  }

  return(
    <div className='flex flex-col mb-10 h-screen w-full justify-around items-center space-x-10 bg-gradient-to-t from-blue-700 to-white  '>
      <h1 className='text-3xl font-bold  bg- rounded w-50'>Formulario 2 </h1>
      <h2>{mensajeRespuesta==''?"no hay mensaje aun":mensajeRespuesta}</h2>

      <div className="flex justify-center items-center  bg-gray-100">
        <form onSubmit={handleSubmit} className="flex flex-col bg-white p-8 rounded shadow-md w-96">
          <legend className="text-2xl font-semibold mb-6">Te saludaremos</legend>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              value={usuario.nombre}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edad">Edad</label>
            <input
              id="edad"
              name="edad"
              value={usuario.edad}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            />
          </div>

          <button className="w-full bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Enviar
          </button>
        </form>
</div>



    </div>
  )
}