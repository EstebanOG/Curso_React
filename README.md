# Curso_React

#### Habilitar ejecución de scripts para PowerShell
Abrimos el Windows PowerShell como administrador y ejecutamos el comando

```
~$ Get-ExecutionPolicy
```

Nos tendría que devolver **Unrestricted**.

Para cambiar la configuración debemos ejecutar el comando

```
~$ Set-ExecutionPolicy Unrestricted
```
#### Crear un API REST en local

1. Debemos tener instalado NodeJS.
2. Después, a través de npm, nos instalamos el paquete json-server, que será el servidor que ponga a nuestra disposición los datos:
```
~$ npm install -g json-server
```
3. Desde consola vamos al directorio donde tenemos el fichero data.json y arrancamos el servidor:
```
~$ json-server --watch data.json
```

#### Ejecutar nuestro proyecto

Vamos al directorio donde se encuentra nuestro proyecto en este caso en la carpeta **first_proyect/first_proyect/** y escribimos el siguiente comando:
```
~$ npm start
```
