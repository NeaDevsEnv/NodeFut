import { request } from 'express';
import {getConnection, sql} from '../database/conexion';
import querys from '../database/querys';


export const getPersonas = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getPersonas);
       // console.log(result);
    
    
     res.json(result.recordset);
    
    
    }catch(err) {
        res.status(500);
        res.send(error.message);
    }
 
};

export const createPersonas = async (req, res) => {

    const { nombre,apellido, fecha_alta_club, club_actual,dni,descripcion, estado,edad} = req.body

    if(nombre == null || apellido == null || fecha_alta_club == null ||
         club_actual == null || dni == null || descripcion == null || estado == null || edad == null  ){
            return res.status(404).json({ msg: 'Por favor rellena los campos'})
         }

     try {
        const pool= await getConnection()
        await pool
        .request()
        .input("nombre",sql.VarChar, nombre)
        .input("apellido",sql.VarChar,apellido)
        .input("fecha_alta_club",sql.VarChar,fecha_alta_club)
        .input("club_actual",sql.VarChar,club_actual)
        .input("dni",sql.Int, dni)
        .input("descripcion",sql.VarChar, descripcion)
          .input("estado",sql.VarChar,estado)
          .input("edad",sql.Int, edad)
        .query(querys.createPersonas)
 
     console.log(nombre, apellido, fecha_alta_club, club_actual, dni,descripcion, estado, edad);
     res.json({nombre, apellido, fecha_alta_club, club_actual, dni,descripcion, estado, edad});
 

     }
     catch(error) {
     res.status(500)
     res.send(error.message);
    }
};

export const getPersonasById = async (req, res) => {

    const { id } = req.params;

    const pool = await  getConnection()
   const result = await pool
    .request()
    .input('id', id)
    .query(querys.getPersonasByid);
   
    res.send(result.recordset[0]);

    
}
export const deletePersonasById = async (req, res) => {

    const { id } = req.params;

    const pool = await  getConnection()
   const result = await pool
    .request()
    .input('id', id)
    .query(querys.deletePersonas);
   
    res.send(result);
}
export const getTotalPersonas = async (req, res) => {


    const pool = await  getConnection()
   const result = await pool
    .request()
    
    .query(querys.getTotalPersonas);
  res.json(result.recordset[0]['']);
}

export const putPersonasById = async (req, res) => {

    const { nombre,apellido, fecha_alta_club, club_actual,dni,descripcion, estado,edad} = req.body

    const { id} = req.params;

    if(nombre == null || apellido == null || fecha_alta_club == null ||
         club_actual == null || dni == null || descripcion == null || estado == null || edad == null  ){
            return res.status(404).json({ msg: 'No se encontraron los campos'})
         }

         const pool = await getConnection()
        await pool
        .request()
        .input("nombre",sql.VarChar, nombre)
        .input("apellido",sql.VarChar,apellido)
        .input("fecha_alta_club",sql.VarChar,fecha_alta_club)
        .input("club_actual",sql.VarChar,club_actual)
        .input("dni",sql.Int, dni)
        .input("descripcion",sql.VarChar, descripcion)
          .input("estado",sql.VarChar,estado)
          .input("edad",sql.Int, edad)
          .input('id', sql.Int, id)
         .query(querys.updatePersonasById); 
         
         request.json({ nombre,apellido, fecha_alta_club, club_actual,dni,descripcion, estado,edad});
}

