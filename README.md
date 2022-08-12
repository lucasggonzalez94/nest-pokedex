<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar desarrollo

1. Clonar el repositorio
2. Ejecutar
```
npm i
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Descargar [Docker desktop](https://www.docker.com/get-started/)

5. Descargar imagen de Mongo 5.0.0
```
docker pull mongo:5.0.0
```

6. Levantar la base de datos
```
docker-compose up -d
```

7. Reconstruir la base de datos de desarrollo con la semilla (Postman)
```
http://localhost:3000/api/v1/seed
```

## Stack usado
* Nest.js
* MongoDB
