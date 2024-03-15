//Se importa router de la librería express
import { Router } from "express";
//importamos las funciones que tiene ventaHeaderController
import { getVentasHeader, getVentasHeaderById, createNewVentaH, getTotalVentasH, deleteVentaHeaderById, updateVentaHeaderById} from "../controllers/ventaHeader.controller";
//declaramos una constante router que tendra todas las funcionalidades de router
const router =  Router();
//tengo que agregar a la app toda esta ruta 
router.get('/ventaHeader', getVentasHeader);

router.get('/ventaHeader/:id',getVentasHeaderById);

router.post('/ventaHeader',createNewVentaH);

router.get('/ventaHeader/count',getTotalVentasH);

router.delete('/ventaHeader/:id',deleteVentaHeaderById);

router.put('/ventaHeader/:id',updateVentaHeaderById)

export default router;