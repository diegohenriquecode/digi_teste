# 🛒 Teste DIGI Carrinho de Compras

Este projeto é um exemplo de um carrinho de compras desenvolvido em React com suporte a múltiplos idiomas (inglês, espanhol e português). Ele utiliza Material-UI (MUI) para a interface do usuário e `i18next` para gerenciar as traduções. O estado do carrinho é gerenciado com `zustand`, e a linguagem selecionada pelo usuário é persistida no `localStorage`.

## ✨ Funcionalidades

- **Adicionar e Remover Produtos**: Os usuários podem adicionar produtos ao carrinho e removê-los.
- **Internacionalização**: Suporte a três idiomas: inglês, espanhol e português.
- **Persistência de Idioma**: A linguagem escolhida pelo usuário é salva no `localStorage` e mantida após recarregar a página.
- **Interface Responsiva**: Design moderno e responsivo com Material-UI.
- **Carrinho Vazio**: Mensagem amigável exibida quando o carrinho está vazio.

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente.

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para Configuração

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/diegohenriquecode/digi_teste.git
   cd digi_teste
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto**:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse o projeto**:
   Abra o navegador e acesse:
   ```
   http://localhost:5173
   ```

### Estrutura do Projeto

- **`src/`**: Contém o código-fonte do projeto.
  - **`components/`**: Componentes reutilizáveis, como o carrinho.
  - **`hooks/`**: Hooks personalizados, como o `useLanguage` para gerenciar traduções.
  - **`store/`**: Configuração do estado global com `zustand`.
  - **`locales/`**: Arquivos de tradução para inglês, espanhol e português.
  - **`types/`**: Tipos TypeScript usados no projeto.
  - **`App.tsx`**: Componente principal da aplicação.

### Tecnologias Utilizadas

- **[React](https://reactjs.org/)**: Biblioteca JavaScript para construção de interfaces.
- **[Material-UI (MUI)](https://mui.com/)**: Biblioteca de componentes UI para React.
- **[i18next](https://www.i18next.com/)**: Biblioteca para internacionalização.
- **[zustand](https://zustand-demo.pmnd.rs/)**: Biblioteca para gerenciamento de estado.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida para desenvolvimento moderno.

## 🛠️ Configuração de Desenvolvimento

### Pré-commit com Husky e ESLint

O projeto utiliza **Husky** e **ESLint** para garantir a qualidade do código. Antes de cada commit, o ESLint é executado automaticamente para verificar e corrigir problemas no código.

#### Como Funciona:
- **Husky**: Gerencia hooks do Git.
- **lint-staged**: Executa o ESLint apenas nos arquivos que serão commitados.

#### Configuração:
1. Instale as dependências:
   ```bash
   npm install husky lint-staged --save-dev

## 🌐 Internacionalização

O projeto suporta três idiomas:
- **Inglês** (`en`)
- **Espanhol** (`es`)
- **Português** (`pt`)

A linguagem selecionada pelo usuário é salva no `localStorage`, garantindo que a escolha seja mantida após recarregar a página.

### Como Adicionar um Novo Idioma

1. Crie um novo arquivo JSON na pasta `locales/` com o código do idioma (por exemplo, `fr` para francês).
2. Adicione as traduções no arquivo JSON.
3. Atualize o arquivo `i18n.js` para incluir o novo idioma.

Exemplo:
```json
// locales/fr/translation.json
{
  "modal": {
    "title": "Panier d'Achat",
    "remove": "Supprimer",
    "emptyCart": "Aucun article ajouté pour le moment."
  }
}
```

🧪 Testes End-to-End (E2E) com Cypress

O projeto inclui testes end-to-end (E2E) usando Cypress para garantir que a aplicação funcione corretamente. Os testes cobrem funcionalidades como adicionar produtos ao carrinho e verificar a mensagem de carrinho vazio.

## 📝 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adicionando nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

---

## 📧 Contato

- **Nome**: [Diego Henrique]
- **Email**: [diegohenriquecode@outlook.com]
- **GitHub**: [https://github.com/diegohenriquecode]
- **Portifólio**: [diegohenriquecode.github.io]
- **Instagram**: [https://www.instagram.com/diegohenriquecode]
- **Linkedin**: [https://www.linkedin.com/in/diegohenriquecode]