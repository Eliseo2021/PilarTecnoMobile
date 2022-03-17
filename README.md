# PilarTecnoMobile
Pilar Tecno App 

# Desarrollo en React Native - Actividad 1:

## React Native:
El objetivo de React Native  es proporcionar un kit de interfaz de usuario todo en uno 
para crear aplicaciones. 

## -> configuracion del entorno:
las instalaciones son lo mas complicado!. en mi caso uso s.o w10. 
- react-native lo instale dos veces, 
- android studio como 3 o 4 veces hasta que funciono el emulador.


## -> componentes, layout y estilos:
React Native tiene pocos componentes básicos:
-> import { View, Text, Button, Presable, StyleSheet, TouchableOpacity } from "react-native";
combinar estos componentes principales para aprender cómo funciona React Native. 


## -> componentes de react native elements:
-> Libreria reactnativeelements para los iconos
React Native Elements ensamblar estos paquetes al brindarle un kit .
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';


##-> Libreria Native Basi para mejorar el diseño en los siguiente proyectos
 <NativeBaseProvider>
      <App />
  </NativeBaseProvider>



## -> extructura de un proyecto:

Estrucura de Desarrollo
Carpetas para crear el proyecto.
```bash
src
├── api
├── assets            
├── store    
└── components            
    ├── ruts             ----> Tabs & Stacks 
    │   ├── AppStack   ---> manejar login     
    │   ├── Tabs        ---> Botonera
    │   ├── HomeStack (pilas de cada pantalla)    
    │   ├── AppStack          
    │   ├── ListStack        
    │   ├── ProfileStack
    │   ├── MapStack           
    │   └── 
    └── screens        ----> Screens projects
        ├── Login
        ├── Home
        ├── List
        ├── Profile
        └── Map

```
