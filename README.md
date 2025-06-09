# ☕ Café Express

Café Express é um site fictício de uma cafeteria urbana desenvolvido com **HTML**, **CSS** e **JavaScript** puro. O projeto oferece uma interface moderna, responsiva e funcional para apresentação institucional, visualização de cardápio e simulação de experiência de navegação do cliente.

---

## 📋 Funcionalidades

- Página principal com descrição da cafeteria e galeria de imagens (carrossel automático).
- Cardápio dinâmico com filtro de busca em tempo real.
- Design responsivo com menu mobile (hambúrguer).
- Rodapé com informações de contato e redes sociais.
- Destaques de produtos com imagens ilustrativas e descrições.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3** com variáveis e media queries
- **JavaScript (ES6)** puro
- **Font Awesome** para ícones
- **Google Fonts** (Poppins e Roboto)

---

## 📁 Estrutura de Arquivos

```
cafe-express/
├── index.html                  # Página principal (Home)
├── cardapio.html               # Página de cardápio com filtro de busca
├── style.css                   # Estilos globais do site
├── script.js                   # Lógica JS: menu, carrossel e busca
├── cardapio.json               # Dados dos itens do cardápio (imagens, nomes, preços)
└── imagens/                    # Logotipo, bebidas, fachada, funcionários, etc.
```

---

## ▶️ Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/gustavocanhan/cafe-express
   ```
2. Abra a pasta no seu editor.
3. Use **Live Server** ou um servidor local para evitar erros de CORS:
   - Com Python:
     ```bash
     python -m http.server
     ```
   - Com Node (http-server):
     ```bash
     npx http-server
     ```
4. Acesse `index.html` e `cardapio.html` no navegador.

---

## 📄 Exemplo de `cardapio.json`

```json
[
  {
    "id": 1,
    "nome": "Espresso",
    "descricao": "Café concentrado, servido em dose pequena.",
    "valor": "5,00",
    "img": "./imagens/espresso.png"
  },
  {
    "id": 2,
    "nome": "Cappuccino",
    "descricao": "Espresso com leite vaporizado e espuma de leite.",
    "valor": "7,00",
    "img": "./imagens/cappuccino.png"
  }
]
```

---

## 📱 Responsividade

- Comportamento adaptável em telas menores (mobile-first).
- Menu lateral para navegação em dispositivos móveis.
- Imagens e containers redimensionáveis com media queries.

---

## 👨‍💻 Autor

Desenvolvido por **[Gustavo Canhan]**  
📧 Email: [gustavocanhan@gmail.com]
📸 Instagram: [@gustavocanhan]
