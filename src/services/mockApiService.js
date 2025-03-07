const mockData = {
  content: [
    {
      id: '1',
      title: 'Interpretação de Textos',
      stats: {
        classes: 4,
        classesTime: 10200,
        exercises: 4,
        exercisesTime: 5700,
        resources: 4,
        resourcesTime: 3300
      }
    },
    {
      id: '2',
      title: 'Gramática',
      stats: {
        classes: 6,
        classesTime: 6929,
        exercises: 5,
        exercisesTime: 2729,
        resources: 4,
        resourcesTime: 10980
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
        stats: {
          classes: 100,
          classesTime: 5400,
          exercises: 20,
          exercisesTime: 2700,
          resources: 5,
          resourcesTime: 1800
        },
        sections: [
          {
            id: 'analisecompreensao',
            title: 'A. Análise e Compreensão',
            stats: {
              classes: 100,
              classesTime: 5400,
              exercises: 20,
              exercisesTime: 2700,
              resources: 5,
              resourcesTime: 1800
            },
            classes: {
              totalTime: 5400,
              items: [
                { title: 'Leitura Crítica', time: 2700, completed: false },
                { title: 'Interpretação de Texto', time: 2700, completed: false }
              ]
            },
            exercises: {
              totalTime: 2700,
              items: [
                { id: 'ex1', title: 'Exercício de Interpretação I', time: 1200 },
                { id: 'ex2', title: 'Exercício de Interpretação II', time: 1500 }
              ]
            },
            resources: {
              totalTime: 1800,
              items: [
                { id: 'mat1', title: 'Material de Apoio I', time: 900 },
                { id: 'mat2', title: 'Material de Apoio II', time: 900 }
              ]
            }
          }
        ]
      },
      {
        id: 'comp06',
        title: 'Competência 06: Texto - Contexto e Função',
        stats: {
          classes: 80,
          classesTime: 4800,
          exercises: 25,
          exercisesTime: 3000,
          resources: 4,
          resourcesTime: 1500
        },
        sections: [
          {
            id: 'contextualizacao',
            title: 'A. Interpretação de Contextos',
            stats: {
              classes: 80,
              classesTime: 4800,
              exercises: 25,
              exercisesTime: 3000,
              resources: 4,
              resourcesTime: 1500
            },
            classes: {
              totalTime: 4800,
              items: [
                { title: 'Contextualização de Texto', time: 2400, completed: false },
                { title: 'Análise de Função Textual', time: 2400, completed: false }
              ]
            },
            exercises: {
              totalTime: 3000,
              items: [
                { id: 'ex3', title: 'Exercício de Contexto I', time: 1500 },
                { id: 'ex4', title: 'Exercício de Contexto II', time: 1500 }
              ]
            },
            resources: {
              totalTime: 1500,
              items: [
                { id: 'mat3', title: 'Material de Apoio III', time: 900 },
                { id: 'mat4', title: 'Material de Apoio IV', time: 600 }
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
        stats: {
          classes: 50,
          classesTime: 3600,
          exercises: 30,
          exercisesTime: 2400,
          resources: 10,
          resourcesTime: 1200
        },
        sections: [
          {
            id: 'fundamentosfonologia',
            title: 'A. Fundamentos da Fonologia',
            stats: {
              classes: 50,
              classesTime: 3600,
              exercises: 30,
              exercisesTime: 2400,
              resources: 10,
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
        stats: {
          classes: 94,
          classesTime: 3300,
          exercises: 60,
          exercisesTime: 225900,
          resources: 1,
          resourcesTime: 2880
        },
        sections: [
          {
            id: 'estrutura',
            title: 'A. Estrutura e Formação das Palavras',
            stats: {
              classes: 94,
              classesTime: 3300,
              exercises: 60,
              exercisesTime: 225900,
              resources: 1,
              resourcesTime: 2880
            },
            classes: {
              totalTime: 329,
              items: [
                { title: 'Estrutura e Formação da Palavra I', time: 840, completed: false },
                { title: 'Estrutura e Formação da Palavra II', time: 859, completed: false },
                { title: 'Estrutura e Formação da Palavra III', time: 914, completed: true },
                { title: 'Estrutura e Formação das Palavras IV: Um Passeio no Caminho', time: 716, completed: false }
              ]
            },
            exercises: {
              totalTime: 329,
              items: [
                { id: 'exercicio1', title: 'Exercício 1: Estrutura e Formação da Palavra I', time: 840 },
                { id: 'exercicio2', title: 'Exercício 2: Estrutura e Formação da Palavra II', time: 859 },
                { id: 'exercicio3', title: 'Exercício 3: Estrutura e Formação da Palavra III', time: 914 }
              ]
            },
            resources: {
              totalTime: 9780,
              items: [
                { id: 'material1', title: 'Material 1: Estrutura e Formação da Palavra I', time: 840 },
                { id: 'material2', title: 'Material 2: Estrutura e Formação da Palavra II', time: 859 }
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
