# Configuração do Apache2 Server no Ubuntu Server 22.04.x LTS Projeto Bora para Prática

<h3>Conteúdo estudado nesse desafio:</h3>
Conteúdo estudado nesse desafio:
<li>01_ Instalado o MySQL Server e Client no Ubuntu Server;
<li>02_ Verificando os Status do Serviço do MySQL Server;
<li>03_ Verificando a Versão do MySQL Server;
<li>04_ Verificando a Porta de Conexão do MySQL Server;
<li>05_ Diretórios e Arquivos de Configuração do MySQL Server;
<li>06_ Conectando no Console do MySQL Server;
<li>07_ Adicionando uma Senha no usuário Root do MySQL Server;
<li>08_ Criando Usuários e Permissões no MySQL Server;
<li>09_ Adicionando os Usuários Locais no Grupo do MySQL Server;
<li>10_ Permitindo o Acesso Remoto no MySQL Server;
<li>11_ Acessando Remotamente o MySQL Server pelo MySQL Workbench;
<li>12_ Acessando Remotamente o MySQL Server pelo VSCode;
<li>13_ Desafio do Banco de Dados MySQL Server.



<h3>#05_ Localização dos Arquivos de Configuração do MySQL Server</h3>

	/etc/mysql                          <-- Diretório de configuração do SGBD MySQL Server
	/etc/mysql/mysql.conf.d/mysqld.cnf  <-- Arquivo de configuração do Servidor SGBD do MySQL Server
	/etc/mysql/mysql.conf.d/mysql.cnf   <-- Arquivo de configuração do Cliente SGBD do MySQL Client
	/var/log/mysql                      <-- Diretório padrão dos Logs do SGBD Mysql Server
	/var/lib/mysql                      <-- Diretório da Base de Dados padrão do SGBD MySQL Server
