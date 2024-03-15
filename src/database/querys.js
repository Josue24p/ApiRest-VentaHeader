export const queries = {
    getAllVentasH: 'Select * from VentaHeader',
    newVentasH: 
    'Insert into VentaHeader (SerieNumero,FechaHora,IdCliente,Subtotal,IGV,Total) VALUES(@SerieNumero,@FechaHora,@IdCliente,@Subtotal,@IGV,@Total)',
    getVentaHById: 'SELECT * FROM VENTAHEADER WHERE IdVentaH = @Id',
    deleteVentaHById: 'Delete from VentaHeader where IdVentaH = @Id',
    getTotalVentaH: 'Select count(*) from VentaHeader',
    updateVentaH: 
    'UPDATE VENTAHEADER SET SerieNumero=@SerieNumero,FechaHora=@FechaHora,IdCliente=@IdCliente, Subtotal=@Subtotal, IGV=@IGV, Total=@Total WHERE IdVentaH=@Id',
}