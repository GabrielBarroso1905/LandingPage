import { Questions } from '.';

export default {
  title: 'Questions',
  component: Questions,
  args: {
    title: 'Título customizado', // Defina os valores desejados para title e description
    title2: 'Título 2 customizado', // Defina os valores desejados para title e description
    description: 'Adiciona a propriedade flex-wrap para que os itens sejam distribuídos em uma única coluna quando a tela for pequena ? ', // Defina os valores desejados para title e description
  
  },
};

export const Template = (args) => {
  return (
    <div>
      <Questions {...args} background= {false} sectionId= {'seu-id-aqui'} />
    </div>
  );
};
