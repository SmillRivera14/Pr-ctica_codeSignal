# Definir una función que recibe una lista de números
def sumar_pares(lista):
  # Inicializar una lista vacía para almacenar las sumas
  sumas = []
  # Inicializar una variable para llevar el conteo de la posición
  posicion = 1
  # Inicializar una variable para acumular la suma parcial
  suma_parcial = 0
  # Recorrer la lista de números
  for numero in lista:
    # Si la posición es par, agregar el número a la suma parcial
    if posicion % 2 == 0:
      suma_parcial += numero
    # Si la posición es impar, agregar la suma parcial a la lista de sumas y reiniciar la suma parcial
    else:
      sumas.append(suma_parcial)
      suma_parcial = 0
    # Incrementar la posición en uno
    posicion += 1
  # Agregar la última suma parcial a la lista de sumas
  sumas.append(suma_parcial)
  # Devolver la lista de sumas
  return sumas

# Probar la función con el ejemplo dado
ejemplo = [50, 60, 60, 45, 70]
resultado = sumar_pares(ejemplo)
print(resultado)
