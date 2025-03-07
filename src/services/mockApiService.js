const mockData = {
  categories: [
    {
      id: '1',
      title: 'Interpretação de Textos',
      stats: {
        aulas: 1193,
        aulasTime: '100h 22m',
        exercicios: 161,
        exerciciosTime: '79h 12m',
        materiais: 53,
        materiaisTime: '58h 18m'
      },
    },
    {
      id: '2',
      title: 'Gramática',
      stats: {
        aulas: 36,
        aulasTime: '14h 41m',
        exercicios: 27,
        exerciciosTime: '10h 45m',
        materiais: 10,
        materiaisTime: '10h 20m'
      },
    }
  ]
};

export function fetchCategories() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.categories);
    }, 900);
  });
}

export function fetchSubcontent(contentId) {
  const subcontent = {
    '1': [
      {
        id: 'comp01',
        title: 'Competência 01: Palavras, Imagem e Vida Social',
        lessons: [
          {
            id: '11',
            aulas: { amount: 523, duracao: '48h 50m' },
            exercicios: { amount: 62, duracao: '28h 30m' },
            materiais: { amount: 32, duracao: '38h 15m' }
          }
        ]
      },
      {
        id: 'comp06',
        title: 'Competência 06: Texto - Contexto e Função',
        lessons: [
          {
            id: '12',
            aulas: { amount: 310, duracao: '42h 24m' },
            exercicios: { amount: 90, duracao: '38h 54m' },
            materiais: { amount: 29, duracao: '28h 13m' }
          }
        ]
      },
    ],
    '2': [
      {
        id: 'fonologia',
        title: '2.1 Fonologia',
        lessons: [
          {
            id: '21',
            aulas: { amount: 67, duracao: '31h 09m' },
            exercicios: { amount: 44, duracao: '31h 38m' },
            materiais: { amount: 20, duracao: '31h 36m' }
          }
        ]
      },
      {
        id: 'morfologia',
        title: '2.2 Morfologia',
        lessons: [
          {
            id: '22',
            aulas: { amount: 67, duracao: '31h 09m' },
            exercicios: { amount: 44, duracao: '31h 38m' },
            materiais: { amount: 20, duracao: '31h 36m' }
          }
        ],
        sections: [
          {
            title: 'A. Estrutura e Formação das Palavras',
            stats: {
              aulas: 94,
              aulasTime: '00h 55m',
              exercicios: 60,
              exerciciosTime: '62h 45m',
              materiais: 1,
              materiaisTime: '00h 48m'
            },
            classes: {
              totalTime: '00:05:29',
              items: [
                { title: 'Estrutura e Formação da Palavra I', time: '00:14:00', completed: false },
                { title: 'Estrutura e Formação da Palavra II', time: '00:14:19', completed: false },
                { title: 'Estrutura e Formação da Palavra III', time: '00:15:14', completed: true },
                { title: 'Estrutura e Formação das Palavras IV: Um Passeio no Caminho', time: '00:11:56', completed: false }
              ]
            },
            exercises: {
              totalTime: '00:05:29',
              items: [
                {
                  id: 'exercicio1',
                  title: 'Exercício 1: Estrutura e Formação da Palavra I',
                  time: '00:14:00'
                },
                {
                  id: 'exercicio2',
                  title: 'Exercício 2: Estrutura e Formação da Palavra II',
                  time: '00:14:19'
                },
                {
                  id: 'exercicio3',
                  title: 'Exercício 3: Estrutura e Formação da Palavra III',
                  time: '00:15:14'
                },
              ]
            },
            resources: {
              totalTime: '02:43:00',
              items: [
                {
                  id: 'material1',
                  title: 'Material 1: Estrutura e Formação da Palavra I',
                  time: '00:14:00'
                },
                {
                  id: 'material2',
                  title: 'Material 2: Estrutura e Formação da Palavra II',
                  time: '00:14:19'
                },
              ],
            },
          },
        ],
      },
    ],
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(subcontent[contentId] || []);
    }, 800);
  });
}
