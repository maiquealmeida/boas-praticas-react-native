# Boas Práticas com React Native

🚧🚧🚧 _Documentação em desenvolvimento._ 🚧🚧🚧
---

## Tecnologias utilizadas

- Bun (<https://bun.sh/>)
- Expo (<https://expo.dev/>)
- React Navigation 6 <https://reactnavigation.org/()>
- Zod (<https://zod.dev/>)
- React Hook Form (<https://react-hook-form.co>)

## Porque utilizar o Bun neste projeto?

O Bun é um gerenciador de pacotes e um executor de tarefas que visa ser uma alternativa mais rápida e eficiente ao npm e ao Yarn.

Embora o npm e o Yarn sejam os gerenciadores de pacotes mais populares no ecossistema Node.js, o Bun traz algumas características distintas que podem ser consideradas vantajosas para certos projetos e desenvolvedores. Além de que a minha curiosidade pra ver ele com React Native é maior do que a minha coragem pra utilizar ele em um projeto já em produção.  

Aqui estão algumas das vantagens de usar o Bun:

- Velocidade: O Bun é otimizado para ser extremamente rápido. Ele usa um algoritmo de resolução de dependências mais eficiente e realiza instalações paralelas para acelerar o processo.
- Tamanho do Cache Reduzido: O Bun mantém um cache mais enxuto em comparação com o npm e o Yarn. Isso pode economizar espaço em disco, especialmente em projetos maiores com muitas dependências.
- Instalação mais Limpa: O Bun tenta manter a pasta node_modules o mais limpa possível, instalando apenas os pacotes necessários. Isso pode tornar mais fácil navegar e gerenciar suas dependências.
- Sem Bloqueio: Ao contrário do npm e do Yarn, que usam arquivos de bloqueio para garantir a consistência das dependências, o Bun não usa arquivos de bloqueio. Isso pode tornar o processo de instalação mais simples em alguns casos.
- Menos Configurações: O Bun visa ser simples e direto ao ponto, com menos configurações e sinalizadores do que o npm e o Yarn. Isso pode tornar mais fácil para os desenvolvedores começarem a usar o Bun sem ter que aprender muitas opções e configurações.
- Menos Problemas de Resolução: Devido ao seu algoritmo de resolução de dependências otimizado, o Bun pode ter menos problemas ao resolver dependências conflitantes em comparação com o npm e o Yarn.
- Atualizações Mais Fáceis: O Bun facilita a atualização de pacotes individuais ou de todos os pacotes de uma vez, tornando o processo de manutenção de dependências mais simples.

Apser do Bun ter suas vantagens, eu o considero relativamente novo em comparação com o npm e o Yarn. Portanto, pode não a mesma estabilidade que esses gerenciadores de pacotes mais estabelecidos. Como sempre, ao escolher uma ferramenta, é essencial avaliar suas necessidades específicas e testar a ferramenta em um ambiente controlado antes de adotá-la em projetos maiores ou em produção. E é por isso que ele está aqui!
