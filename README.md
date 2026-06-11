# 🛍️ Nexa - Catálogo de Produtos

Um catálogo de produtos moderno desenvolvido com React, Vite e Bootstrap, consumindo dados da API DummyJSON.

O sistema permite visualizar produtos, pesquisar, filtrar por categoria, ordenar resultados, adicionar itens aos favoritos, gerenciar um carrinho de compras e visualizar detalhes dos produtos através de um modal interativo.

---

## 📸 Demonstração

O projeto apresenta:

- Catálogo de produtos dinâmico
- Busca em tempo real
- Filtro por categorias
- Ordenação de produtos
- Sistema de favoritos
- Carrinho de compras
- Modal com detalhes do produto
- Persistência de dados com LocalStorage
- Layout responsivo

---

## 🚀 Tecnologias Utilizadas

### Front-end

- React
- Vite
- JavaScript (ES6+)
- Bootstrap 5
- CSS3

### Gerenciamento de Estado

- Context API
- React Hooks

### Requisições HTTP

- Axios

### Persistência Local

- LocalStorage

### API

- DummyJSON

https://dummyjson.com/products

---

## 📂 Estrutura do Projeto

```bash
src/
│
├── components/
│   ├── Banner/
│   ├── BuscarProdutos/
│   ├── CardProduto/
│   ├── Header/
│   ├── ModalProdutos/
│   ├── OffCanvaCarrinho/
│   └── Produtos/
│
├── context/
│   ├── CartContext.jsx
│   └── FavoriteContext.jsx
│
├── App.jsx
├── main.jsx
│
└── assets/
```

---

## ⚙️ Funcionalidades

### 🔍 Busca de Produtos

Permite pesquisar produtos pelo nome em tempo real.

Exemplo:

```txt
perfume
smartphone
laptop
```

---

### 📁 Filtro por Categoria

As categorias são carregadas dinamicamente a partir da API.

Exemplos:

- Beauty
- Fragrances
- Furniture
- Groceries

---

### 📊 Ordenação

Os produtos podem ser organizados por:

- Menor preço
- Maior preço
- Melhor avaliação

---

### ❤️ Sistema de Favoritos

Permite marcar produtos como favoritos.

Funcionalidades:

- Adicionar favorito
- Remover favorito
- Persistência via LocalStorage
- Visualização apenas dos favoritos

---

### 🛒 Carrinho de Compras

Permite:

- Adicionar produtos
- Remover produtos
- Aumentar quantidade
- Diminuir quantidade
- Cálculo automático do total

---

### 💾 Persistência de Dados

O sistema utiliza LocalStorage para armazenar:

#### Favoritos

```javascript
localStorage.setItem("favorites", ...)
```

#### Carrinho

```javascript
localStorage.setItem("cart", ...)
```

Assim os dados permanecem disponíveis mesmo após atualizar a página.

---

## 🧠 Conceitos Aplicados

Durante o desenvolvimento foram utilizados diversos conceitos importantes do React:

### Hooks

- useState
- useEffect
- useContext

### Context API

Foi utilizada para compartilhar estados globais entre componentes:

#### CartContext

Responsável por:

- Adicionar itens
- Remover itens
- Atualizar quantidades
- Calcular valor total

#### FavoriteContext

Responsável por:

- Adicionar favoritos
- Remover favoritos
- Verificar favoritos

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/catalogo-de-produtos.git
```

Entre na pasta:

```bash
cd catalogo-de-produtos
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando o Projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto ficará disponível em:

```txt
http://localhost:5173
```

---

## 🏗️ Build de Produção

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar a build:

```bash
npm run preview
```

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com fins acadêmicos para aplicar conceitos de:

- Desenvolvimento Front-End
- React
- Componentização
- Consumo de APIs REST
- Gerenciamento de Estado
- Persistência de Dados
- Responsividade
- Experiência do Usuário (UX)

---

## 👨‍💻 Autor

Nome e RA: 

Leonardo Antolini de Oliveira             RA: 824125434  

Matheus Rodrigues de Souza                RA: 824140934


Curso: Ciência da Computação

Universidade São Judas Tadeu

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.
