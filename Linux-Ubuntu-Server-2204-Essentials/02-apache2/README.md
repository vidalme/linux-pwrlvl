# Configuração do Apache2 Server no Ubuntu Server 22.04.x LTS Projeto Bora para Prática

<h3>Conteúdo estudado nesse desafio:</h3>
<li>01_ Instalado o Apache2 e PHP8 no Ubuntu Server;
<li>02_ Verificando os Status do Serviço do Apache2;
<li>03_ Verificando as Versões do Apache2 e PHP8;
<li>04_ Verificando a Porta de Conexão do Apache2;
<li>05_ Diretórios e Arquivos de Configuração do Apache2 e PHP8;
<li>06_ Adicionando o Usuário Local no Grupo do Apache2;
<li>07_ Criando um Projeto de Teste de Site no Apache2;
<li>08_ Alterando as Permissões de Arquivos e Diretórios;
<li>09_ Criando Páginas em HTML e PHP para testar o Apache2;
<li>10_ Utilizando o VSCode para editar páginas HTML e PHP;
<li>11_ Testando o acesso as Páginas no Navegador do Apache2;
<li>12_ Desafio do Novo Projeto de Site e Usuários do Apache2.



<h3>#04_ Localização dos Arquivos de Configuração do Apache2 Server e do PHP 8.x</h3>

```
/etc/apache2/                  <-- Diretório de configuração do Apache 2 Server
/etc/apache2/apache2.conf      <-- Arquivo de configuração do Apache 2 Server
/etc/apache2/sites-available/  <-- Diretório padrão dos Sites Acessíveis do Apache 2 Server
/etc/apache2/conf-available/   <-- Diretório padrão das Configurações Acessíveis do Apache 2 Server
/etc/php/                      <-- Diretório de configuração do PHP 7.x ou 8.x
/etc/php/8.1/apache2/php.ini   <-- Arquivo de configuração do PHP 8.x do Apache 2 Server
/var/www/html/                 <-- Diretório padrão das Hospedagem de Site do Apache 2 Server
/var/log/apache2/              <-- Diretório padrão dos Logs do Apache 2 Server
```


<p>#OBSERVAÇÃO IMPORTANTE:<br> caso a conexão SSH trave, utilize os caracteres de escape para <br>
#finalizar conexões SSH.<br>
#caracteres: ~ (til) e . (ponto)<br>
~. 
