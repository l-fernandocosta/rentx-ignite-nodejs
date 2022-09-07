**RF** => Requisitos functionais

**RNF** => Requisitos não funcionais

**RN** => Regras de negócio

##

# Cadastro de carro

**RF**
Deve ser possível listar todas as categorias; Deve ser possível cadastrar um novo carro;
**RN**
Não deve ser possível o cadastro de carros de usuários não autenticados e adminsitrador; Não deve ser possível cadastrar um carro com placas existentes; Não deve ser possível alterar a placa de um carro para um já existente/cadastrado; Carro deve ser cadastrado com disponibilidade ativa para locação;

# Listagem de carros

**RF**
Deve ser possível listar os carros disponíveis; Deve ser possível listar os carros disponíveis pelo nome da categoria; Deve ser possível listar os carros disponíveis pelo nome da marca; Deve ser possível listar os carros disponíveis pelo nome do carro;
**RN**
O usuário não precisa estar logado;

# Cadastro de especificação no carro

**RF**
O usuário deve estar logado e ter permissões para realizar o cadastro de especificação; Deve ser possível cadastrar uma especificação para um carro; Deve ser possível listar todas as especificações; Deve ser possível listar todos os carros;
**RN**
Não deve ser possível cadastar uma especificação para um carro não cadastrado; Não deve ser possível cadastrar uma especificação já existente para o mesmo carro;

# Cadastro de imagens do carro

**RF**
Deve ser possível listar todos os carros; Deve ser possível cadastrar a imagem do carro;
**RNF**
Utilizar o multer para upload dos arquivos;
**RN**
O usuário deve estar logado e ter permissões para cadastrar uma imagem; Deve ser possível cadastrar mais de uma imagem par um mesmo carro; Deve ser possível atualizar a imagem do carro;

# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel;
**RN**
O aluguel deve ter duração mínima de 24 horas; Não deve ser possível cadastrar um novo aluguel caso já exista um pedido aberto para o mesmo usuário; Não deve ser possível cadastrar um novo aluguel caso já exista um pedido aberto para o mesmo carro;
