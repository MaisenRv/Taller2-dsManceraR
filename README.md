# Taller 2

## Descripción

En este proyecto se realizo un CRUD haciendo uso de una API.

## Acceso al proyecto

Vamos a la consola y clonamos el proyecto.

    git clone https://github.com/MaisenRv/Taller2-dsManceraR.git

Entramos en la carperta e instalamos las dependencias.

    cd Taller2-dsManceraR
    npm install 

**Antes de compilar el proyecto debemos hacer lo siguiente:**

1. Entramos a la carpeta src/ y creamos una carpeta con el nombre connection/
2. Entramos a la carpeta connection/ y creamos el archivo con el nombre accessToken.ts
3. Agregamos la siguientes lineas de codigo.

        const token:string = "mi token";
        export default token;

    Donde "mi token" es el token de la API.

Compilamos el proyecto con el siguiente comando.

    tsc

Posteriormente ejecutamos nuestro servidor y abrimos el archivo index.html

    // Rutal del archivo 😁
    Taller2-dsManceraR/pages/index.html

> Realizado por: David Santiago Mancera Robles
