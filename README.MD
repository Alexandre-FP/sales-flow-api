# Funcionalidades

- [x] Deve ser possívvel fazer cadastro de produtos.
- [x] Deve ser possívvel fazer edição de produtos.
- [x] Deve ser possívvel fazer listagem de produtos.
- [x] Deve ser possívvel fazer exclusão de produtos.
- [x] Deve ser possívvel fazer realização de vendas.
- [x] Deve ser possívvel fazer listagem de vendas.
- [x] Deve ser possívvel fazer exclusão de vendas.
- [x] Deve ser possívvel fazer cadastro de novos usuários.
- [x] Deve ser possívvel fazer edição de usuários.
- [x] Deve ser possívvel fazer listagem de usuários.
- [x] Deve ser possívvel fazer exclusão de usuários.
- [x] Deve ser possívvel fazer geração de relatórios.

# Requisitos Funcionais

- [x] O sistema deve permitir o cadastro, edição, listagem e exclusão de produtos.
- [x] O sistema deve permitir a realização, listagem e exclusão de vendas.
- [x] O sistema deve permitir o cadastro, edição, listagem e exclusão de novos usuários.
- [ ] O sistema deve gerar relatórios (quantidade por produto -> X / valor de vendas -> Y, quantidade por produto -> X / valor de vendas de usuário -> Y, quantidade por produto -> X / valor de vendas por um intervalo de horas -> Y).

# Banco
- [x] products (product_id, nome, descricao, valor) -> Vai listar os produtos
- [x] sales (sale_id, data_hora, user_id) -> Vai listar as vendas
- [x] sales_products (sale_product_id, sale_id, product_id, quantidade) -> Vai listar os produtos da venda
- [x] users (user_id, nome, numero, idade, valor_reservado) -> Vai listar os usuários que compraram


# Tarefas Backend

- [x] Desenvolver APIs para cadastro, edição, listagem e exclusão de produtos.
- [x] Criar APIs para realização, listagem e exclusão de vendas.
- [x] Implementar APIs para cadastro, edição, listagem e exclusão de usuários.
- [ ] Desenvolver lógica para geração de relatórios com base nos dados fornecidos pelos filtros.