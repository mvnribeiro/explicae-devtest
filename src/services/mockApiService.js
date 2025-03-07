const mockData = {
  content: [
    {
      id: '1',
      title: 'Interpretação de Textos',
      stats: {
        classes: 4,
        classesTime: 20842,
        exercises: 4,
        exercisesTime: 18435,
        resources: 4,
        resourcesTime: 4294
      }
    },
    {
      id: '2',
      title: 'Gramática',
      stats: {
        classes: 6,
        classesTime: 36539,
        exercises: 5,
        exercisesTime: 28053,
        resources: 4,
        resourcesTime: 11899
      }
    }
  ]
};

export function fetchContent() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.content);
    }, 900);
  });
}

export function fetchSubcontent(contentId) {
  const subcontent = {
    '1': [
      {
        id: 'comp01',
        title: 'Competência 01: Palavras, Imagem e Vida Social',
        sections: [
          {
            id: 'analisecompreensao',
            title: 'A. Análise e Compreensão',
            stats: {
              classes: 2,
              classesTime: 13509,
              exercises: 2,
              exercisesTime: 12547,
              resources: 2,
              resourcesTime: 2007
            },
            classes: {
              totalTime: 13059,
              items: [
                { title: 'Leitura Crítica', time: 5296, completed: false },
                { title: 'Interpretação de Texto', time: 7863, completed: false }
              ]
            },
            exercises: {
              totalTime: 12547,
              items: [
                { id: 'ex1', title: 'Exercício de Interpretação I', time: 8793 },
                { id: 'ex2', title: 'Exercício de Interpretação II', time: 3754 }
              ]
            },
            resources: {
              totalTime: 2007,
              items: [
                { id: 'mat1', title: 'Material de Apoio I', time: 1377 },
                { id: 'mat2', title: 'Material de Apoio II', time: 930 }
              ]
            }
          }
        ]
      },
      {
        id: 'comp06',
        title: 'Competência 06: Texto - Contexto e Função',
        sections: [
          {
            id: 'contextualizacao',
            title: 'A. Interpretação de Contextos',
            stats: {
              classes: 2,
              classesTime: 8233,
              exercises: 2,
              exercisesTime: 7088,
              resources: 2,
              resourcesTime: 2297
            },
            classes: {
              totalTime: 8233,
              items: [
                { title: 'Contextualização de Texto', time: 1685, completed: false },
                { title: 'Análise de Função Textual', time: 6548, completed: false }
              ]
            },
            exercises: {
              totalTime: 7088,
              items: [
                { id: 'ex3', title: 'Exercício de Contexto I', time: 4545 },
                { id: 'ex4', title: 'Exercício de Contexto II', time: 2533 }
              ]
            },
            resources: {
              totalTime: 2297,
              items: [
                { id: 'mat3', title: 'Material de Apoio III', time: 1620 },
                { id: 'mat4', title: 'Material de Apoio IV', time: 867 }
              ]
            }
          }
        ]
      }
    ],
    '2': [
      {
        id: 'fonologia',
        title: '2.1 Fonologia',
        sections: [
          {
            id: 'fundamentosfonologia',
            title: 'A. Fundamentos da Fonologia',
            stats: {
              classes: 2,
              classesTime: 3600,
              exercises: 2,
              exercisesTime: 2400,
              resources: 2,
              resourcesTime: 1200
            },
            classes: {
              totalTime: 3600,
              items: [
                { title: 'Princípios Fonológicos I', time: 1800, completed: false },
                { title: 'Princípios Fonológicos II', time: 1800, completed: false }
              ]
            },
            exercises: {
              totalTime: 2400,
              items: [
                { id: 'ex5', title: 'Exercício Fonológico I', time: 1200 },
                { id: 'ex6', title: 'Exercício Fonológico II', time: 1200 }
              ]
            },
            resources: {
              totalTime: 1200,
              items: [
                { id: 'mat5', title: 'Material Fonológico I', time: 600 },
                { id: 'mat6', title: 'Material Fonológico II', time: 600 }
              ]
            }
          }
        ]
      },
      {
        id: 'morfologia',
        title: '2.2 Morfologia',
        sections: [
          {
            id: 'estrutura',
            title: 'A. Estrutura e Formação das Palavras',
            stats: {
              classes: 4,
              classesTime: 32939,
              exercises: 3,
              exercisesTime: 25653,
              resources: 2,
              resourcesTime: 10699
            },
            classes: {
              totalTime: 32939,
              items: [
                { title: 'Estrutura e Formação da Palavra I', time: 8400, completed: false },
                { title: 'Estrutura e Formação da Palavra II', time: 8509, completed: false },
                { title: 'Estrutura e Formação da Palavra III', time: 9014, completed: true },
                { title: 'Estrutura e Formação das Palavras IV', time: 7016, completed: false }
              ]
            },
            exercises: {
              totalTime: 25653,
              items: [
                { id: 'exercicio1', title: 'Exercício 1: Estrutura e Formação da Palavra I', time: 8040 },
                { id: 'exercicio2', title: 'Exercício 2: Estrutura e Formação da Palavra II', time: 8509 },
                { id: 'exercicio3', title: 'Exercício 3: Estrutura e Formação da Palavra III', time: 9104 }
              ]
            },
            resources: {
              totalTime: 10699,
              items: [
                { id: 'material1', title: 'Material 1: Estrutura e Formação da Palavra I', time: 5840 },
                { id: 'material2', title: 'Material 2: Estrutura e Formação da Palavra II', time: 4859 }
              ]
            }
          }
        ]
      }
    ]
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(subcontent[contentId] || []);
    }, 800);
  });
}
