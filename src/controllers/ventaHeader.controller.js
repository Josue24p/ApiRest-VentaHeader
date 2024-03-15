//Primero llamamos o importamos a la conexión de la BD, también la librería Sql 
//para poder realizar  consultas y manipular el lenguaje SQL
import { getConnection, queries, sql } from "../database";

//Primero creamos la función para poder conseguir los datos de la tabla VENTAHEADER
export const getVentasHeader = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllVentasH);
        res.json(result.recordset);
        console.log(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

//Ahora creamos los datos para poder conseguir  una venta en específico por su ID
export const getVentasHeaderById = async (req,res) =>{
    const {id} = req.params;

    const pool = await getConnection();
    
    const result = await pool
    .request()
    .input('Id',id)
    .query(queries.getVentaHById)
    console.log(result)
    res.send(result.recordset[0])
}

export const createNewVentaH = async (req,res) => {
    //variables que serán ingresadas por el cliente el body.
    const {SerieNumero,FechaHora,IdCliente,Subtotal,IGV,Total} = req.body;

    if (SerieNumero == null || FechaHora == null 
        || IdCliente == null || Subtotal == null
        || IGV == null || Total == null) {
        return res.status(400).json({msg: 'Petición fallida. Por favor llena todos los campos'})
    }
    try {
        const pool = await getConnection();
        //Se inserta el registro
        await pool
        .request()
        .input("SerieNumero",sql.VarChar,SerieNumero)
        .input("FechaHora",sql.DateTime,FechaHora)
        .input("IdCliente",sql.Int,IdCliente)
        .input("Subtotal",sql.Decimal,Subtotal)
        .input("IGV",sql.Decimal,IGV)
        .input("Total",sql.Decimal,Total)
        .query(queries.newVentasH)
        //Para poder probar y ver los datos en consola que se enviaran a la base de datos
        console.log(SerieNumero,FechaHora,IdCliente,Subtotal,IGV,Total)
        res.json({SerieNumero,FechaHora,IdCliente,Subtotal,IGV,Total}); //lo que quiero mostrar de json de respuesta en postman
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

export const getTotalVentasH = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool.request().query(queries.getTotalVentaH);
        console.log(result)
        res.sendStatus(204);
    } catch (error) {
        console.error(error)
        res.status(500).send(error.message);
    }
    
}

export const deleteVentaHeaderById = async  (req,res) =>{

    const {id} = req.params;

    const pool = await getConnection();

    const result = await pool
    .request()
    .input("Id",id)
    .query(queries.deleteVentaHById)
    //console.log(result)
    res.sendStatus(204);
}

export const updateVentaHeaderById = async  (req,res)=>{
    const {id} = req.params;
    const {SerieNumero,FechaHora,IdCliente,Subtotal,IGV,Total} = req.body;
    if (SerieNumero == null || FechaHora == null 
        || IdCliente == null || Subtotal == null
        || IGV == null || Total == null) {
        return res.status(400).json({msg: 'Petición fallida. Por favor llena todos los campos'})
    }
    try {
        const pool = await getConnection();
        await pool
        .request()
        .input('id',sql.Int,id)
        .input('SerieNumero',sql.VarChar,SerieNumero)
        .input('FechaHora',sql.DateTime,FechaHora)
        .input('IdCliente',sql.Int,IdCliente)
        .input('Subtotal', sql.Decimal,Subtotal)
        .input('IGV',sql.Decimal,IGV)
        .input( 'Total',sql.Decimal,Total)
        .query(queries.updateVentaH)

        res.json({SerieNumero,FechaHora,IdCliente,Subtotal,IGV,Total})
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}