-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 31/10/2025 às 23:50
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `projetoadvocacia`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `servicos`
--

CREATE TABLE `servicos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `descricao` text NOT NULL,
  `imagem` varchar(255) NOT NULL,
  `preco` decimal(10,2) DEFAULT NULL,
  `prazo` varchar(100) DEFAULT NULL,
  `tipoAtendimento` enum('Presencial','Online','Híbrido') DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `servicos`
--

INSERT INTO `servicos` (`id`, `nome`, `descricao`, `imagem`, `preco`, `prazo`, `tipoAtendimento`, `endereco`, `ativo`, `createdAt`, `updatedAt`) VALUES
(1, 'Direito Civil e Familiar', 'Questões como divórcio, inventários, heranças, contratos e relações de consumo.', 'direito-civil-familiar.png', 250.00, '3 dias úteis', 'Presencial', 'Rua A, 123, Maringá/PR', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Direito do Consumidor', 'Defesa de consumidores em casos envolvendo bancos, planos de saúde, telefonia, entre outros.', 'direito-consumidor.png', 200.00, '2 dias úteis', 'Online', 'Rua B, 456, Maringá/PR', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Direito Empresarial', 'Assessoria jurídica para empresas, incluindo direito tributário e contratual.', 'direito-empresarial.png', 350.00, '5 dias úteis', 'Híbrido', 'Av. Central, 789, Maringá/PR', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Direito Trabalhista', 'Atuação em casos de demissões, horas extras, vínculos empregatícios e verbas rescisórias.', 'direito-trabalhista.png', 300.00, '4 dias úteis', 'Presencial', 'Rua C, 101, Maringá/PR', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Direito Penal', 'Defesa de pessoas em processos criminais.', 'direito-penal.png', 400.00, '7 dias úteis', 'Online', 'Av. Justiça, 202, Maringá/PR', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Direito Imobiliário', 'Questões relacionadas a imóveis, como compra, venda, locação e disputas.', 'direito-imobiliario.png', 280.00, '3 dias úteis', 'Presencial', 'Rua D, 303, Maringá/PR', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'Direito Previdenciário', 'Casos relacionados a aposentadoria, pensões e benefícios do INSS.', 'direito-previdenciario.png', 220.00, '2 dias úteis', 'Híbrido', 'Av. Benefícios, 404, Maringá/PR', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'Direito Digital/Tecnologia', 'Questões jurídicas relacionadas à tecnologia e internet.', 'direito-digital-tecnologia.png', 300.00, '3 dias úteis', 'Online', 'Rua E, 505, Maringá/PR', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `servicos`
--
ALTER TABLE `servicos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `servicos`
--
ALTER TABLE `servicos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
