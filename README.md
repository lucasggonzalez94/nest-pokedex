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

7. Clonar el archivo ```.env.template``` y renombrar la copia a ```.env```

8. Llenar las variables de entorno definidas en el ```.env```

9. Ejecutar la aplicación en dev:
```
npm run start:dev
```

10. Reconstruir la base de datos de desarrollo con la semilla (Postman)
```
http://localhost:3000/api/v1/seed
```

## Stack usado
* Nest.js
* MongoDB

# Production Build
1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno para producción
3. Construir la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

# Notas
Hacer redeploy en Heroku sin cambios:
```
git commit --allow-empty -m "Trigger Heroku deploy"
git push heroku main
```
