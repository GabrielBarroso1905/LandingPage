import { Questions } from '.';

export default {
  title: 'Questions',
  component: Questions,
  args: {
    title: 'Título customizado',
    pergunta1: 'Como o seu negócio pode impulsionar as vendas da minha empresa?',
    resposta1: 'Nossa abordagem estratégica identifica oportunidades de mercado, otimiza suas campanhas de marketing e alavanca táticas comprovadas para direcionar mais tráfego e conversões ao seu negócio.',
    
    pergunta2: 'Quais são os benefícios específicos que minha empresa pode obter ao trabalhar com vocês?',
    resposta2: 'Ao colaborar conosco, você aproveita nossa experiência em marketing digital para criar uma presença online mais forte, alcançar um público mais amplo e aumentar as taxas de conversão.',
    
    pergunta3: 'De que maneira suas estratégias podem melhorar a lucratividade da minha empresa?',
    resposta3: 'Nossas estratégias se concentram em otimizar seu funil de vendas, melhorar a experiência do usuário e maximizar a eficácia de suas campanhas, resultando em maior receita e lucros.',
    
    pergunta4: 'Como vocês adaptam suas táticas para atender às necessidades exclusivas do meu negócio?',
    resposta4: 'Nós personalizamos cada plano de marketing para atender aos seus objetivos e ao seu público-alvo específico, garantindo que suas campanhas sejam altamente relevantes e eficazes.',
  },
};

export const Template = (args) => {
  return (
    <div>
      <Questions {...args} background= {false} sectionId= {'seu-id-aqui'} />
    </div>
  );
};
