# NodeJS GEOLOCALIZACION

By: Juan Pablo Calad - jcaladh@eafit.educo

# Descripción de aplicación

Aplicación web que permite ver mi locación brindada desde un dispositivo móvil accediendo por medio del navegador o usando un portátil que permita compartir la ubicación.

# 1. Análisis

## 1.1 Requisitos funcionales:

1. Crear Articulo.
2. Buscar articulo por parte del titulo
3. Borrar articulo por Id de articulo
4. Listar todos los artículos de la base de datos en la página home o índex

## 1.2 Definición de tecnología de desarrollo y despliegue para la aplicación:

* Lenguaje de Programación: Javascript
* Framework web backend: NodeJS - Express
* Framework web frontend: no se usa - se utilizará Templates HTML para Vista (V) EJS
* Base de datos: MongoDB
* Web App Server: NodeJS
* Web Server: NGINX y Apache Web Server

# 2. Desarrollo

se desarrolló todo desde cero, diseñando la estructura de modelos, controles y vistas.

# 3. Diseño:

## 3.1 Modelo de datos:

user:

{
    local:
    {
        email : String,
        password: String
    }
}

location:

{
    user : String,
    date : { type: Date, default: Date.now },
    latitud: String,
    longitud: String
}

## 3.2 Servicios Web

/* Servicio Web: Crear cuenta de autentificación.
  Método: GET
  URI: /newarticle
*/

/* Servicio Web: autentificación de usuario.
  Método: GET
  URI: /findbytitle?title=val
*/

/* Servicio Web: Guardar localización actual del dispositivo.
  Método: POST
  URI: /articles
*/

/* Servicio Web: Mostrar ubicación en mapa.
  Método: GET
  URI: /delarticle?id=val
 */

 /* Servicio Web: Borra un Articulo de la Base de datos.
   Método: DELETE
   URI: /delarticle/id
  */




# 5. Despliege en Heroku

1. referencia: https://pag-geolocation.herokuapp.com/
2. crear una cuenta en heroku.com
3. crear una cuenta y base de datos en mlab.com

## 5.1 Crear base de datos

primero es crear una base de datos, usuario y clave en un proveedor de Mongo como mlab.com

ofrece un plan gratis con limitaciones, pero para efectos de esta prueba va bien.

en este caso, se creo una base de datos: "geolo", user: "admin", password: "*****".

para comprobar funcionalidad puede probar:

        user1$ mongo ds139138.mlab.com:39138/geolo -u <dbuser> -p <dbpassword>

debe cambiar el string de conexión a la base de datos en producción en config.js:

        // config/database.js
        .
        .
        module.exports = {
        'url' : 'mongodb://admin:*****@ds139138.mlab.com:39138/geolo'  
        };
        .
        .

## 5.2 deploy en heroku

* ya tiene una cuenta en heroku
* se sincroniza automaticamente con GitHub

/////

@20172            
