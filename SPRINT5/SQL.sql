-- Criação do banco de dados
CREATE DATABASE ResidencialVarandasDoGama;

-- Seleciona o banco de dados
USE ResidencialVarandasDoGama;

-- Criação da tabela Moradores
CREATE TABLE Moradores (
    id_morador INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(15),
    apartamento VARCHAR(10) NOT NULL
);

-- Criação da tabela Iniciativas Sustentáveis
CREATE TABLE Iniciativas_Sustentaveis (
    id_iniciativa INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    data_inicio DATE,
    data_fim DATE
);

-- Criação da tabela Comunicações
CREATE TABLE Comunicacoes (
    id_comunicacao INT PRIMARY KEY AUTO_INCREMENT,
    id_morador INT,
    data DATETIME DEFAULT CURRENT_TIMESTAMP,
    mensagem TEXT NOT NULL,
    FOREIGN KEY (id_morador) REFERENCES Moradores(id_morador)
);

-- Inserção de dados de teste na tabela Moradores
INSERT INTO Moradores (nome, email, telefone, apartamento) VALUES
('Nívia Maria', 'niviamcosta@yahoo.com.br', '99999-9999', '604'),
('Ramon Valverde', 'ramon.valverde@email.com', '88888-8888', '802'),
('Marcos', 'marcos@email.com', '77777-7777', '103');

-- Inserção de dados de teste na tabela Iniciativas Sustentáveis
INSERT INTO Iniciativas_Sustentaveis (titulo, descricao, data_inicio, data_fim) VALUES
('Coleta Seletiva', 'Iniciativa para promover a coleta seletiva de lixo no condomínio.', '2023-01-01', '2023-12-31'),
('Horta Comunitária', 'Criação de uma horta comunitária para cultivo de alimentos.', '2023-02-01', '2023-12-31');

-- Inserção de dados de teste na tabela Comunicações
INSERT INTO Comunicacoes (id_morador, mensagem) VALUES
(1, 'Gostaria de sugerir mais informações sobre a coleta seletiva.'),
(2, 'Estou interessada em participar da horta comunitária.'),
(3, 'Houve um problema com a iluminação na área comum.');