// Criando as variáveis do Express e do App do Node.JS
var express = require ('express'); 
var app = express();

// Mensagem que será mostrada no browser (navegador) 
app.get('/', function (req, res) {
	res.send('Andre Vidal #BoraParaPrática!!! <a href=\'http://192.168.100.8:3030/\'>ir para o node da atividade</a><br><a href=\'http://192.168.100.8/wp/\'>ir para o wordpress</a>');
});

// Porta padrão utilizada pela aplicação do Node.JS
app.listen(3000, function() {
	console.log('Aplicativo de exemplo ouvindo na porta 3000');
});