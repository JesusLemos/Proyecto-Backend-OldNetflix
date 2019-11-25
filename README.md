# Proyecto2Backend
Proyecto2 "Old Netflix" parte del Back-End

# Funcionalidad del Back-End

  1º Usuarios
  
    * Registrar usuarios
    
    * Conectarse con un usuario
    
    * Ver perfiles de los usuarios
  
  2º Peliculas 
    
    * Ver todas las peliculas
    
    * Filtrar por la ID de la pelicula

    * Filtrar por genero de la pelicula
    
    * Filtrar por estrenos de las peliculas
    
    * Filtrar por actores de las peliculas
    
    * Filtrar por titulo de la pelicula
    
  3º Pedidos
  
     * Pedir una pelicula por usuario desde cuando solicitas la pelicula hasta el dia de entrega 
     
    
    
  # Endpoint disponibles
  El puerto que se esta usando es el puerto 3000 
  
  Endpoint Usuario
  
    /usuario/registro

    /usuario/login

    /usuario/desconectar

    /usuario/perfil/:token/:usuario
   
 Endpoint Peliculas
    
    /peliculas/mostrartodo
    
    /peliculas/mostrarid/:idpelicula
    
    /peliculas/mostrargenero/:genre
    
    /peliculas/mostrartitulo/:titulo
    
    /peliculas/mostrarestrenos/:estreno
 
 Endpoint Pedidos
    /peliculas/entregarpelicula
 

    
  
