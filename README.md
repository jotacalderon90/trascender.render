# TRASCENDER.RENDER

[![N|Solid](https://www.jotace.cl/media/img/logo.png)](https://www.jotace.cl)

Motor de plantillas para ExpressJS usando html puro

### OPINION DEL AUTOR

El uso de un motor de plantillas hoy en día no es tan popular como hace algunos años. El uso de ajax y otros motores de plantilla desplazaron el HTML a segundo plano. Aún así, siempre es necesario contar con algo simple y robusto sin aprender más de lo que ya sabemos. HTML sigue siendo lo que ves en el front, por ende, que mejor que usar un motor de plantillas basado en este arcaico lenguaje.

### INSTALAR

```sh
$ npm install trascender.render
```

### IMPORTAR
```js
const render = require("trascender.render");
```

### INSTANCIAR
```js
this.express = express(); //tipico en app express
new render(this, __dirname + "/frontend/");//carpeta con vistas html
```

###  EJEMPLO DE USO
```js
this.express.get("/",function(req,res){
	res.render("index",{
		title: "Hola mundo",
		p: "El motor de plantillas trascender.render esta funcionando perfectamente",
		a: "https://www.jotace.cl",
		if: true,
		repeat: [1,2,3,4,5]
	});
});
```

### CONTROL USE
Para utilizar una plantilla maestra deberá seguir el siguiente formato:

index.html
```html
<!--use:main-->
```
### CONTROL DEFINE
Dentro del html maestro existirán las definiciones, secciones que podrán ser reemplazadas por quienes utilicen dicha plantilla:

main.html
```html
<!--define:title-->
<!--define:nav-->
<!--define:main-->
<!--define:footer-->
```
Para que una vista reemplace su contenido deberá seguir el siguiente formato

index.html
```html
<!--define:title-->
Hello, world!
<!--/define:title-->

<!--define:main-->
<h1>Hello, world!</h1>
<!--/define:main-->
```

### CONTROL INCLUDE
Para incluir secciones externas y segregar aún más nuestras vistas, puedes utilizar el control include de la siguiente manera:

main.html
```html
<!--include:nav-->
<!--include:footer-->
```

### CONTROL DATA
Para renderizar un dato como un texto deberás seguir el siguiente formato:

index.html
```html
<h1>{{data:doc.title}}</h1>
<!--
entre {{}} debe ir data: 
seguido del objeto al cual quieres acceder, en este caso, doc.title
-->
```

### CONTROL IF
Para renderizar contenido de manera condicional, es decir, si cumple o no una función x, deberás seguir el siguiente formato:

index.html
```html
<!--if:doc.if===true-->
	<h2>Este parrafo se muestra solo si el campo if del objeto es verdadero</h2>
<!--/if-->
```

### CONTROL REPEAT
Por último tenemos el control repeat el cual se repetirá en base a un arreglo de información. Debes seguir el siguiente formato:

index.html
```html
<!--repeat:doc.fieldarray-->
	<p>{{data:doc.fieldarray[index]}}</p>
<!--/repeat:doc.fieldarray-->
```

----------------------

Si todo va bien, el sistema se levantará utilizando el motor de vistas. Si agregas nodemon, agilizarás aún más el proceso de desarrollo. Suerte y buenos códigos ;)

Cualquier comentario favor informar

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
