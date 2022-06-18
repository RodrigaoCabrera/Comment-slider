# SLIDER COMMENT

Un Slider que permite contener una serie de cards para visualizar una serie de contenidos. 
Sus principales características son: el slider infinito y el slider automático.


## Background 

Dicho proyecto tiene como finalidad poner en práctica algunos aspecto de la librería ReactJs, cómo ser los hooks, manejos de evnetos y manipulación del DOM.

## Usage

La flecha de la derecha mueve las card hacia la izquierda.
La flecha de la derecha mueve las card hacia la derecha.
Colocar el cursor encima de la card, detiene el slider automático.


## API/Component
El component cuenta con tres funcionalidades bien definidas:

nextSlide: que traslada el primer slide a la izquierda y luego lo envía al final de los slides.

prevSlide: que coloca al último slide a la primera posición y luego meidante una translate, lo coloca a la vista del usuario con un efecto de izquierda a derecha.

AutomaticSlide: Ejecuta el deslizamiento cuando el componente carga por primera vez.

removeAutomaticSlide: que detiene el slider automático al colocar el puntero sobre las cards.


## Installation

Se debe contar con nodejs, git y yarn previamente instalados.

```shell
    # Clone the repository
    git clone https://github.com/rodrigocabrera19/Comment-slider.git
```

```shell
    # install dependencies
    yarn install
```
```shell
    # run the project
    yarn start
```

## Stack

ReactJs
Styled Component

git
github
yarn

## Roadmap and visuals

![Imagen del slider](./src/assets/slider-infinito.png)


## Contact info

Email: rodrigod33d@gmail.com
Linkedin: https://www.linkedin.com/in/rodrigocabrera19/

## Reconocimientos

ReactJs: https://es.reactjs.org/
Styled Component: https://styled-components.com/docs

## License 

Inlcuir la licéncia y el link a esta
[MIT](https://opensource.org/licenses/MIT)
