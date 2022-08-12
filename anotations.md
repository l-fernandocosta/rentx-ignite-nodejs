S => SRP - Single Responsability Principle ( Princípio da Responsabilidade Única)
O => Open-Closed Principle ( Princípio Aberto/Fechado)
L => LSP - Liskov Substitution Principle ( Princípio de Substituição de Liskov)
I => ISP - Interface Segregation Principle ( Princípio da Segregação de Interface)
D => DIP - Dependecy Inversion Principle ( Princípio de Inversão de Dependência)

## Singleton

Tem como definição a criação de apenas uma instância
de uma classe, que será a instância global para a nossa aplicação

## O que é o docker ?

- Ferramenta para a criação de containers

- Container: Ambiente isolado

- Imagens: Instruções para criação de um container

- O que "roda" localmente "roda" em produção

- Mesmo SO, compatilhando recursos da máquina host

## Docker compose

- Orquestrador de containers

## Docker comandos

- docker ps ( Utilizamos sempre que quisermos listar os containers que estão rodando )
- docker ps -a (Lista todos os containers, rodando ou não )
- docker rm #id do container (Remover o container, passando o id - É necessário pausá-lo antes de excluí-lo)
- docker start #id ( Para iniciar o container )
- docker stop #id ( Para pausar o container )

- docker-compose up -d ( Subir o container em background )
- docker-compose down (Remover o container e tudo que tem dentro do serviço)
- docker-compose stop ( Apenas pausa o container )

## As possibilidades de utilizar banco de dados

- Driver nativo do banco de dados;
- Query builders ( e.g Knex.js );
- ORM - Object Relational Map (TypeORM, Prisma, etc);

Pega nosso código JS e transforma de uma forma que o nosso DB entenda.
---------------- MODEL <-> ORM <-> DB --------------------------------

## Aprendendo o conceito de migrations

- Basicamente e de forma simplista, é uma forma de versionamento do nosso banco de dados
- Criam um timestamp e o nome da migration criada

# Método Up e método Down - Migrations

- Toda vez que quisermos subir a migration - up
- Toda vez que quisermos desfazer o migration - down
