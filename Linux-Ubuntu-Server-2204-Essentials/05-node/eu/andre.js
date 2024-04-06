// Criando as variáveis do Express e do App do Node.JS
var express = require ('express'); 
var app = express();

app.use(express.static('public'));


// Porta padrão utilizada pela aplicação do Node.JS
app.listen(3030, () => {
	console.log('Aplicativo de exemplo ouvindo na porta 3030');
});

