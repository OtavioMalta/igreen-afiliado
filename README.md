# Site do Parceiro iGreen Energy

Este é um site de cartão pessoal para afiliados da iGreen Energy, explicando como funciona o serviço de economia na conta de luz e direcionando visitantes para contato via WhatsApp.

## Conteúdo do Site

- Explicação sobre a Conexão Livre da iGreen
- Fluxo visual de como funciona o processo
- Informações sobre o aplicativo iGreenClub
- Botão de contato via WhatsApp
- Design responsivo para desktop e dispositivos móveis

## Arquivos do Projeto

- `index.html` - Estrutura e conteúdo do site
- `styles.css` - Estilos e responsividade
- `script.js` - Funcionalidades JavaScript

## Como Publicar no GitHub Pages

Siga estas etapas para publicar o site no GitHub Pages e configurar um domínio personalizado:

### 1. Criar um Repositório no GitHub

1. Acesse [GitHub](https://github.com/) e faça login na sua conta
2. Clique no botão "+" no canto superior direito e selecione "New repository"
3. Nomeie o repositório (sugestão: `igreen-afiliado` ou seu nome de usuário + `.github.io`)
4. Deixe o repositório como público
5. Clique em "Create repository"

### 2. Fazer Upload dos Arquivos

**Opção 1: Usando a Interface Web do GitHub**
1. No seu novo repositório, clique no botão "Add file" e selecione "Upload files"
2. Arraste todos os arquivos deste projeto ou use o seletor de arquivos
3. Adicione uma mensagem de commit como "Primeira versão do site"
4. Clique em "Commit changes"

**Opção 2: Usando Git (para usuários avançados)**
```bash
git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
cd NOME-DO-REPOSITORIO
# Copie os arquivos do site para esta pasta
git add .
git commit -m "Primeira versão do site"
git push origin main
```

### 3. Ativar o GitHub Pages

1. No seu repositório, vá para "Settings" (aba de configurações)
2. No menu lateral esquerdo, clique em "Pages"
3. Em "Source", selecione "Deploy from a branch"
4. Em "Branch", selecione "main" e "/root" e clique em "Save"
5. Aguarde alguns minutos para o site ser publicado
6. O GitHub fornecerá uma URL (geralmente `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO`)

### 4. Configurar um Domínio Personalizado (Opcional)

1. Compre um domínio em um serviço de registro (GoDaddy, Namecheap, Registro.br, etc.)
2. No GitHub, na mesma página "Pages", vá até a seção "Custom domain"
3. Digite seu domínio (ex: `meusite.com.br`) e clique em "Save"
4. O GitHub criará um arquivo CNAME no seu repositório

5. No seu provedor de domínio, configure os registros DNS:
   - Adicione um registro A apontando para os IPs do GitHub Pages:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Ou adicione um registro CNAME apontando seu subdomínio (www) para `SEU-USUARIO.github.io`

6. Aguarde a propagação do DNS (pode levar até 24 horas)

## Dicas de Manutenção

- Para atualizar o site, basta editar os arquivos e fazer upload novamente
- Você pode editar os arquivos diretamente no GitHub usando o editor online
- Para alterações mais complexas, considere clonar o repositório localmente, fazer as mudanças e depois enviar de volta

## Suporte

Se precisar de ajuda com o site ou tiver dúvidas sobre a publicação no GitHub Pages, entre em contato.
