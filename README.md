# Challenge Amigo Secreto

## Descripción
Esta es una aplicación web sencilla que permite a los usuarios ingresar nombres de amigos en una lista y, posteriormente, realizar un sorteo aleatorio para determinar quién será el "amigo secreto". Es ideal para dinámicas de intercambio de regalos o simplemente como un juego divertido entre amigos y familiares.

Este challenge es parte de la ruta de formación **Oracle Next Education - Principiante en Programación G8 (ONE)** de alura.

## Funcionalidades

### 1. Agregar nombres
- Los usuarios pueden escribir el nombre de un amigo en un campo de texto.
- Al hacer clic en el botón **"Añadir"** o presionar la tecla **Enter**, el nombre se agrega a la lista visible.
- El programa validará que el campo de texto no esté vacío antes de agregar el nombre.

### 2. Validación de entrada
- Si el usuario intenta agregar un nombre vacío, se mostrará una alerta: _"Por favor, inserte un nombre."_

### 3. Visualización de la lista
- Cada nombre agregado se mostrará en una lista debajo del campo de entrada.
- La lista se actualiza dinámicamente cada vez que se añade un nuevo nombre.

### 4. Sorteo aleatorio
- Al hacer clic en el botón **"Sortear Amigo"**, la aplicación seleccionará un nombre al azar de la lista de amigos.
- Si la lista está vacía, se mostrará una alerta indicando que se deben agregar nombres antes de realizar el sorteo.
- El nombre del amigo seleccionado se mostrará en pantalla con un mensaje de celebración.

## Tecnologías utilizadas
- **HTML**: Estructura de la página.
- **CSS**: Diseño y estilos visuales.
- **JavaScript**: Lógica para la manipulación del DOM y el sorteo aleatorio.

## Cómo usar la aplicación
1. Escribe el nombre de un amigo en el campo de texto.
2. Presiona el botón **"Añadir"** o la tecla **Enter**.
3. Repite el proceso para agregar más amigos.
4. Cuando la lista esté completa, presiona **"Sortear Amigo"** para elegir un nombre al azar.

## Autor
Este proyecto fue desarrollado como parte de un desafío de programación en JavaScript.