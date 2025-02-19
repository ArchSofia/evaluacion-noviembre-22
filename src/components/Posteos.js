import React from "react";
import productos from "./data.json";
import Post from "./Post";
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Posteos es el padre de:
// - Post (multiplicados por lo que haya en el listado JSON)
// ESTADO: Posteos no necesita manejar un estado.
// MÉTODOS: Posteos no requiere de métodos.
// PROPS: Posteos recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos junto con el resto de las props que necesitan.

export default function Posteos({ aumentar }) {
	return (
		<div className="container">
			{productos.map((elemento) => (
				<Post key={elemento.id} producto={elemento} aumentar={aumentar} />
			))}
		</div>
	);
}
