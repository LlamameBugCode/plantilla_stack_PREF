// Tipo para los datos enviados al backend
export type seendGreetingProps = {
  name: string;
};

export type usuarioBaseProps = {
  nombre : string,
  edad : string
}

// Tipo para el estado del formulario
export type GreetingFormState = {
  userName: string; // Propiedad del estado del formulario
};