  CREATE TABLE `edificio` (  
`id` int (11) AUTO_INCREMENT,  
`n_departamento` varchar (50) NULL,  
`precio` varchar (50) NULL,  
PRIMARY KEY (`id`)
);

  CREATE TABLE `pagos` (  
`id` int (11) AUTO_INCREMENT,  
`inquilino_id` varchar (50) NULL,  
`monto` varchar (50) NULL,
`gastos_comunes` varchar (50) NULL,
`fecha_creacion` varchar (50) NULL,
`fecha_creacion` varchar (50) NULL,  
PRIMARY KEY (`id`)
);

  CREATE TABLE `inquilinos` (  
`id` int (11) AUTO_INCREMENT,  
`nombre` varchar (50) NULL,  
`apellido` varchar (50) NULL,
`email` varchar (50) NULL,  
`telefono` varchar (50) NULL,  
`edificio_id` varchar (50) NULL,  
`fecha_creacion` varchar (50) NULL, 
PRIMARY KEY (`id`)
);
