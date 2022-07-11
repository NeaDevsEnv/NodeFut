import { getPersonas } from "../controllers/product.controllers";


export default{
    getPersonas: 'SELECT * FROM PersonasFut',
    createPersonas: 'INSERT INTO PersonasFut (nombre, apellido, fecha_alta_club, club_actual, dni, descripcion, estado, edad) VALUES(@nombre, @apellido, @fecha_alta_club, @club_actual, @dni, @descripcion, @estado, @edad)',

    getPersonasByid: 'SELECT * FROM PersonasFut WHERE id = @id',

    deletePersonas: 'DELETE FROM PersonasFut WHERE id = @id',

    getTotalPersonas: 'SELECT COUNT(*) FROM PersonasFut ',

    updatePersonasById: 'UPDATE PersonasFut SET nombre = @nombre, apellido = @apellido, fecha_alta_club = @fecha_alta_club, club_actual = @club_actual, dni = @dni, descripcion = @descripcion, estado = @estado, edad = @edad WHERE id = @id'

}