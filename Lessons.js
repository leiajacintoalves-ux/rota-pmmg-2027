"use strict";

window.PMMG_LESSONS = {
  "Português::Interpretação de textos": {
    access: "free",

    objective:
      "Aprender a identificar a ideia principal de um texto, localizar informações explícitas e implícitas, reconhecer inferências e evitar pegadinhas comuns.",

    sections: [
      {
        title: "📖 Compreensão e interpretação",

        html: `
          <p>
            <strong>Compreensão</strong> é identificar aquilo
            que está diretamente escrito no texto.
          </p>

          <p>
            <strong>Interpretação</strong> é construir o sentido
            com base nas informações, relações e pistas
            apresentadas pelo autor.
          </p>

          <p>
            A resposta deve estar sustentada pelo texto,
            e não apenas pela opinião pessoal do candidato.
          </p>
        `
      },

      {
        title: "💡 Exemplo",

        html: `
          <p>
            “Pedro chegou completamente encharcado.”
          </p>

          <p>
            O texto não afirma diretamente que estava chovendo,
            mas essa conclusão pode ser obtida pelo contexto.
            Isso é uma <strong>inferência</strong>.
          </p>
        `
      },

      {
        title: "📌 Ideia principal",

        html: `
          <p>
            A ideia principal é a mensagem central do texto.
            As demais informações explicam, detalham,
            justificam ou exemplificam essa mensagem.
          </p>

          <ul>
            <li>Observe o assunto repetido nos parágrafos.</li>
            <li>Identifique o que o autor deseja comunicar.</li>
            <li>Elimine exemplos e detalhes secundários.</li>
            <li>Evite alternativas amplas ou específicas demais.</li>
          </ul>
        `
      },

      {
        title: "⚠️ Pegadinhas frequentes",

        html: `
          <ul>
            <li>
              <strong>Generalização:</strong>
              o texto diz “alguns”, mas a alternativa afirma “todos”.
            </li>

            <li>
              <strong>Exagero:</strong>
              o texto diz “pode”, mas a alternativa afirma “sempre”.
            </li>

            <li>
              <strong>Informação inventada:</strong>
              a alternativa apresenta algo sem apoio no texto.
            </li>

            <li>
              <strong>Troca de sentido:</strong>
              a alternativa inverte causa e consequência.
            </li>
          </ul>
        `
      }
    ],

    flashcards: [
      {
        question: "O que é compreensão textual?",

        answer:
          "É a identificação das informações diretamente expressas no texto."
      },

      {
        question: "O que é interpretação textual?",

        answer:
          "É a construção do sentido a partir das informações, relações e pistas apresentadas pelo autor."
      },

      {
        question: "O que é uma inferência?",

        answer:
          "É uma conclusão obtida por meio de pistas do texto, mesmo quando a informação não aparece literalmente."
      },

      {
        question:
          "A resposta pode ser baseada apenas na opinião pessoal?",

        answer:
          "Não. A resposta deve estar fundamentada nas informações apresentadas pelo texto."
      },

      {
        question: "O que é a ideia principal?",

        answer:
          "É a mensagem central do texto, desenvolvida pelas ideias secundárias, exemplos e explicações."
      }
    ],

    questions: [
      {
        prompt:
          "Em uma questão de interpretação, a resposta correta deve estar baseada:",

        options: [
          "Na opinião pessoal do candidato.",
          "Somente no conhecimento de mundo.",
          "Nas informações e pistas apresentadas pelo texto.",
          "Na experiência profissional do leitor."
        ],

        correct: 2,

        explanation:
          "A resposta deve estar fundamentada nas informações e pistas do texto."
      },

      {
        prompt: "Uma informação implícita é aquela:",

        options: [
          "Escrita literalmente no texto.",
          "Destacada obrigatoriamente em negrito.",
          "Que pode ser concluída por meio do contexto.",
          "Que aparece em todos os parágrafos."
        ],

        correct: 2,

        explanation:
          "A informação implícita não aparece literalmente, mas pode ser deduzida pelo contexto."
      },

      {
        prompt:
          "Se o texto afirma “alguns cidadãos”, é incorreto concluir:",

        options: [
          "Uma parte dos cidadãos foi mencionada.",
          "Nem todos estão necessariamente incluídos.",
          "Todos os cidadãos estão envolvidos.",
          "O grupo apresentado é limitado."
        ],

        correct: 2,

        explanation:
          "A palavra “alguns” não permite concluir que todos estejam envolvidos."
      },

      {
        prompt:
          "A ideia principal de um texto corresponde:",

        options: [
          "Ao menor detalhe apresentado.",
          "À mensagem central desenvolvida pelo autor.",
          "À opinião pessoal de cada leitor.",
          "A uma frase escolhida aleatoriamente."
        ],

        correct: 1,

        explanation:
          "A ideia principal representa a mensagem central desenvolvida pelo autor."
      },

      {
        prompt: "Inferir uma informação significa:",

        options: [
          "Copiar uma frase literalmente.",
          "Chegar a uma conclusão usando pistas do texto.",
          "Inventar uma informação que não aparece.",
          "Ignorar o contexto apresentado."
        ],

        correct: 1,

        explanation:
          "Inferência é uma conclusão construída a partir das pistas textuais."
      }
    ]
  },

  "Português::Ortografia e acentuação": {
    access: "free",

    objective:
      "Reconhecer as principais regras de ortografia e acentuação e evitar erros frequentes em provas.",

    sections: [
      {
        title: "📖 Ortografia",

        html: `
          <p>
            Ortografia é o conjunto de regras que determina
            a maneira correta de escrever as palavras.
          </p>

          <p>
            Substantivos derivados de adjetivos costumam
            terminar em <strong>-ez</strong> ou
            <strong>-eza</strong>: beleza, certeza,
            pobreza, rapidez e timidez.
          </p>

          <p>
            Quando a palavra original já possui
            <strong>s</strong>, geralmente se usa
            <strong>-isar</strong>: análise → analisar.
            Quando não possui, é comum usar
            <strong>-izar</strong>: legal → legalizar.
          </p>
        `
      },

      {
        title: "📌 Palavras frequentemente confundidas",

        html: `
          <ul>
            <li>
              <strong>Mau</strong> é contrário de bom;
              <strong>mal</strong> é contrário de bem.
            </li>

            <li>
              <strong>Mas</strong> indica oposição;
              <strong>mais</strong> indica quantidade.
            </li>

            <li>
              <strong>Há</strong> pode indicar tempo passado;
              <strong>a</strong> pode indicar futuro ou distância.
            </li>

            <li>
              <strong>Onde</strong> indica permanência;
              <strong>aonde</strong> acompanha movimento.
            </li>

            <li>
              <strong>Viagem</strong> é substantivo;
              <strong>viajem</strong> é forma do verbo viajar.
            </li>
          </ul>
        `
      },

      {
        title: "📌 Os quatro porquês",

        html: `
          <ul>
            <li>
              <strong>Por que:</strong>
              perguntas ou “por qual motivo”.
            </li>

            <li>
              <strong>Porque:</strong>
              respostas e explicações.
            </li>

            <li>
              <strong>Por quê:</strong>
              no final da frase.
            </li>

            <li>
              <strong>Porquê:</strong>
              substantivo, normalmente acompanhado de artigo.
            </li>
          </ul>
        `
      },

      {
        title:
          "✍️ Oxítonas, paroxítonas e proparoxítonas",

        html: `
          <p>
            <strong>Oxítona:</strong>
            última sílaba tônica, como café e cipó.
          </p>

          <p>
            <strong>Paroxítona:</strong>
            penúltima sílaba tônica, como fácil e caráter.
          </p>

          <p>
            <strong>Proparoxítona:</strong>
            antepenúltima sílaba tônica, como médico e matemática.
          </p>

          <p>
            <strong>
              Todas as palavras proparoxítonas são acentuadas.
            </strong>
          </p>
        `
      },

      {
        title: "📌 Hiato e ditongos abertos",

        html: `
          <p>
            No hiato, duas vogais são pronunciadas
            em sílabas diferentes: sa-í-da, pa-ís,
            ba-ú e sa-ú-de.
          </p>

          <p>
            Os ditongos abertos
            <strong>éi</strong>, <strong>éu</strong>
            e <strong>ói</strong> são acentuados em
            palavras oxítonas e monossílabos tônicos:
            herói, papéis, chapéu e céu.
          </p>

          <p>
            Após o Acordo Ortográfico, palavras
            paroxítonas como ideia, assembleia,
            jiboia e heroico perderam o acento.
          </p>
        `
      },

      {
        title: "📌 Acentos diferenciais",

        html: `
          <ul>
            <li>
              <strong>Pode</strong> indica presente;
              <strong>pôde</strong> indica passado.
            </li>

            <li>
              <strong>Por</strong> é preposição;
              <strong>pôr</strong> é verbo.
            </li>

            <li>
              <strong>Tem</strong> e <strong>vem</strong>
              estão no singular.
            </li>

            <li>
              <strong>Têm</strong> e <strong>vêm</strong>
              estão no plural.
            </li>
          </ul>
        `
      },

      {
        title: "⚠️ Resumo e pegadinhas",

        html: `
          <ul>
            <li>Ideia, heroico, voo e enjoo não recebem acento.</li>
            <li>Herói, papéis e chapéu continuam acentuados.</li>
            <li>Pôde indica passado; pode indica presente.</li>
            <li>Mau é contrário de bom; mal é contrário de bem.</li>
            <li>Viagem é substantivo; viajem é verbo.</li>
          </ul>
        `
      }
    ],

    flashcards: [
      {
        question:
          "Qual é a diferença entre oxítona, paroxítona e proparoxítona?",

        answer:
          "A oxítona possui a última sílaba tônica; a paroxítona, a penúltima; e a proparoxítona, a antepenúltima."
      },

      {
        question:
          "Todas as palavras proparoxítonas recebem acento?",

        answer:
          "Sim. Todas as palavras proparoxítonas são acentuadas."
      },

      {
        question:
          "Por que “ideia” não recebe mais acento?",

        answer:
          "Porque os ditongos abertos deixaram de ser acentuados em palavras paroxítonas após o Acordo Ortográfico."
      },

      {
        question:
          "Qual é a diferença entre “pode” e “pôde”?",

        answer:
          "Pode indica presente; pôde indica passado."
      },

      {
        question:
          "Qual é a diferença entre “mau” e “mal”?",

        answer:
          "Mau é contrário de bom; mal é contrário de bem."
      },

      {
        question:
          "Quando se utiliza “por quê”?",

        answer:
          "No final de uma frase, geralmente antes de pontuação."
      },

      {
        question:
          "Qual é a diferença entre “viagem” e “viajem”?",

        answer:
          "Viagem é substantivo; viajem é uma forma do verbo viajar."
      },

      {
        question:
          "Qual é a diferença entre “tem” e “têm”?",

        answer:
          "Tem é usado no singular; têm é usado no plural."
      }
    ],

    questions: [
      {
        prompt: "Todas as palavras proparoxítonas:",

        options: [
          "São acentuadas apenas quando terminadas em vogal.",
          "São sempre acentuadas.",
          "Nunca recebem acento.",
          "São acentuadas apenas no plural."
        ],

        correct: 1,

        explanation:
          "Todas as proparoxítonas são acentuadas, independentemente da terminação."
      },

      {
        prompt:
          "Assinale a palavra escrita corretamente segundo o Acordo Ortográfico:",

        options: [
          "Idéia",
          "Heróico",
          "Assembléia",
          "Ideia"
        ],

        correct: 3,

        explanation:
          "As palavras paroxítonas com ditongos abertos perderam o acento: ideia, heroico e assembleia."
      },

      {
        prompt:
          "Assinale a palavra que apresenta hiato:",

        options: [
          "Caixa",
          "Saúde",
          "Noite",
          "Beijo"
        ],

        correct: 1,

        explanation:
          "Em saúde, as vogais pertencem a sílabas diferentes: sa-ú-de."
      },

      {
        prompt:
          "Assinale a alternativa em que o acento indica corretamente uma forma verbal no passado:",

        options: [
          "Hoje ele pôde participar.",
          "Ontem ele pode participar.",
          "Ontem ele pôde participar.",
          "Amanhã ele pôde participar."
        ],

        correct: 2,

        explanation:
          "Pôde é a forma do passado do verbo poder. Pode é usada no presente."
      },

      {
        prompt: "Assinale a frase correta:",

        options: [
          "O candidato teve um mal desempenho.",
          "O candidato teve um mau desempenho.",
          "O candidato teve um mais desempenho.",
          "O candidato teve um bem desempenho."
        ],

        correct: 1,

        explanation:
          "Mau é adjetivo e corresponde ao contrário de bom."
      },

      {
        prompt: "Assinale a alternativa correta:",

        options: [
          "Os policiais tem treinamento.",
          "O policial têm treinamento.",
          "Os policiais têm treinamento.",
          "Os policiais têem treinamento."
        ],

        correct: 2,

        explanation:
          "Tem é singular; têm é plural. A forma têem não existe."
      },

      {
        prompt:
          "Assinale a frase em que o uso de “porque” está correto:",

        options: [
          "Porque você não compareceu?",
          "Não compareci por quê estava doente.",
          "Não compareci porque estava doente.",
          "Ninguém explicou porque da ausência."
        ],

        correct: 2,

        explanation:
          "Porque é usado em respostas, causas e explicações."
      },

      {
        prompt:
          "Assinale a alternativa escrita corretamente:",

        options: [
          "Enchergar",
          "Enchada",
          "Enxergar",
          "Mecher"
        ],

        correct: 2,

        explanation:
          "A grafia correta é enxergar. Também se escrevem enxada e mexer."
      },

      {
        prompt: "Assinale a frase correta:",

        options: [
          "Espero que eles viagem amanhã.",
          "A viajem foi tranquila.",
          "Espero que eles viajem amanhã.",
          "A viajem ocorreu ontem."
        ],

        correct: 2,

        explanation:
          "Viajem é forma do verbo viajar. O substantivo é viagem."
      },

      {
        prompt:
          "Assinale a alternativa em que todas as palavras estão corretamente acentuadas:",

        options: [
          "Herói, papéis, chapéu.",
          "Heróico, idéia, vôo.",
          "Assembléia, enjôo, jibóia.",
          "Voo, heróico, papéis."
        ],

        correct: 0,

        explanation:
          "Herói, papéis e chapéu continuam acentuados."
      }
    ]
    },

  "Português::Classes de palavras": {
    access: "free",

    objective:
      "Identificar as dez classes de palavras, compreender suas funções e reconhecer seus usos nas frases.",

    sections: [
      {
        title: "📖 Classes variáveis e invariáveis",

        html: `
          <p>
            As palavras são classificadas de acordo com
            sua função e seu comportamento nas frases.
          </p>

          <p>
            As classes <strong>variáveis</strong> podem sofrer
            flexões de gênero, número, pessoa, tempo ou modo.
          </p>

          <ul>
            <li>Substantivo</li>
            <li>Artigo</li>
            <li>Adjetivo</li>
            <li>Numeral</li>
            <li>Pronome</li>
            <li>Verbo</li>
          </ul>

          <p>
            As classes <strong>invariáveis</strong> normalmente
            não sofrem flexões.
          </p>

          <ul>
            <li>Advérbio</li>
            <li>Preposição</li>
            <li>Conjunção</li>
            <li>Interjeição</li>
          </ul>
        `
      },

      {
        title: "📌 Substantivo, artigo e adjetivo",

        html: `
          <p>
            <strong>Substantivo</strong> nomeia seres,
            objetos, lugares, sentimentos, ações ou ideias.
          </p>

          <p>
            Exemplos: policial, quartel, coragem,
            liberdade e treinamento.
          </p>

          <p>
            <strong>Artigo</strong> acompanha o substantivo,
            determinando-o ou indeterminando-o.
          </p>

          <p>
            Artigos definidos: o, a, os, as.
            Artigos indefinidos: um, uma, uns, umas.
          </p>

          <p>
            <strong>Adjetivo</strong> caracteriza ou atribui
            uma qualidade ao substantivo.
          </p>

          <p>
            Em “policial dedicado”, policial é substantivo
            e dedicado é adjetivo.
          </p>
        `
      },

      {
        title: "🔢 Numeral e pronome",

        html: `
          <p>
            <strong>Numeral</strong> indica quantidade,
            ordem, multiplicação ou fração.
          </p>

          <ul>
            <li>Cardinal: dois candidatos.</li>
            <li>Ordinal: primeiro colocado.</li>
            <li>Multiplicativo: dobro do resultado.</li>
            <li>Fracionário: metade da turma.</li>
          </ul>

          <p>
            <strong>Pronome</strong> acompanha ou substitui
            um substantivo.
          </p>

          <p>
            Exemplos: eu, ele, nós, meu, aquele,
            ninguém e quem.
          </p>
        `
      },

      {
        title: "⚙️ Verbo",

        html: `
          <p>
            <strong>Verbo</strong> pode indicar ação,
            estado, mudança de estado ou fenômeno
            da natureza.
          </p>

          <ul>
            <li>Ação: o candidato estudou.</li>
            <li>Estado: o candidato está preparado.</li>
            <li>Mudança: ele ficou preocupado.</li>
            <li>Fenômeno: choveu durante a prova.</li>
          </ul>

          <p>
            Os verbos podem variar em pessoa,
            número, tempo e modo.
          </p>
        `
      },

      {
        title: "📍 Advérbio",

        html: `
          <p>
            <strong>Advérbio</strong> modifica principalmente
            um verbo, um adjetivo ou outro advérbio.
          </p>

          <ul>
            <li>Tempo: hoje, ontem, cedo.</li>
            <li>Lugar: aqui, perto, longe.</li>
            <li>Modo: bem, mal, rapidamente.</li>
            <li>Intensidade: muito, pouco, bastante.</li>
            <li>Negação: não, nunca, jamais.</li>
            <li>Afirmação: sim, certamente.</li>
            <li>Dúvida: talvez, provavelmente.</li>
          </ul>

          <p>
            Em “ele estudou muito”, a palavra
            “muito” modifica o verbo “estudou”.
          </p>
        `
      },

      {
        title: "🔗 Preposição e conjunção",

        html: `
          <p>
            <strong>Preposição</strong> liga palavras,
            estabelecendo uma relação entre elas.
          </p>

          <p>
            Exemplos: a, ante, após, até, com,
            contra, de, desde, em, entre, para,
            perante, por, sem, sob e sobre.
          </p>

          <p>
            Em “livro de português”, a preposição
            “de” liga “livro” a “português”.
          </p>

          <p>
            <strong>Conjunção</strong> liga orações
            ou termos semelhantes.
          </p>

          <ul>
            <li>Adição: e, nem.</li>
            <li>Oposição: mas, porém.</li>
            <li>Alternância: ou.</li>
            <li>Conclusão: portanto, logo.</li>
            <li>Explicação: porque, pois.</li>
          </ul>
        `
      },

      {
        title: "💬 Interjeição",

        html: `
          <p>
            <strong>Interjeição</strong> expressa emoções,
            sentimentos, reações ou chamados.
          </p>

          <ul>
            <li>Alegria: viva!</li>
            <li>Dor: ai!</li>
            <li>Espanto: nossa!</li>
            <li>Chamado: ei!</li>
            <li>Silêncio: psiu!</li>
          </ul>

          <p>
            A interjeição pode aparecer acompanhada
            de ponto de exclamação.
          </p>
        `
      },

      {
        title: "⚠️ Pegadinhas frequentes",

        html: `
          <ul>
            <li>
              A classe da palavra depende do uso
              que ela possui na frase.
            </li>

            <li>
              “Muito” pode ser pronome ou advérbio,
              dependendo do contexto.
            </li>

            <li>
              “O” pode ser artigo ou pronome.
            </li>

            <li>
              Palavras terminadas em “-mente”
              normalmente são advérbios de modo.
            </li>

            <li>
              Preposição liga palavras; conjunção
              normalmente liga orações ou termos.
            </li>
          </ul>
        `
      }
    ],

    flashcards: [
      {
        question:
          "Quais são as classes de palavras variáveis?",

        answer:
          "Substantivo, artigo, adjetivo, numeral, pronome e verbo."
      },

      {
        question:
          "Quais são as classes de palavras invariáveis?",

        answer:
          "Advérbio, preposição, conjunção e interjeição."
      },

      {
        question:
          "Qual é a função do substantivo?",

        answer:
          "Nomear seres, objetos, lugares, sentimentos, ações ou ideias."
      },

      {
        question:
          "Qual é a função do adjetivo?",

        answer:
          "Caracterizar ou atribuir uma qualidade ao substantivo."
      },

      {
        question:
          "Qual é a função do pronome?",

        answer:
          "Acompanhar ou substituir um substantivo."
      },

      {
        question:
          "O que um verbo pode indicar?",

        answer:
          "Ação, estado, mudança de estado ou fenômeno da natureza."
      },

      {
        question:
          "Qual é a diferença entre preposição e conjunção?",

        answer:
          "A preposição liga palavras; a conjunção liga orações ou termos semelhantes."
      },

      {
        question:
          "O que é uma interjeição?",

        answer:
          "É uma palavra ou expressão que manifesta emoção, reação, sentimento ou chamado."
      }
    ],

    questions: [
      {
        prompt:
          "Na frase “O policial dedicado concluiu o treinamento”, a palavra “dedicado” é:",

        options: [
          "Substantivo.",
          "Adjetivo.",
          "Advérbio.",
          "Pronome."
        ],

        correct: 1,

        explanation:
          "Dedicado caracteriza o substantivo policial e, portanto, é um adjetivo."
      },

      {
        prompt:
          "Na frase “Os candidatos chegaram cedo”, a palavra “cedo” é:",

        options: [
          "Advérbio de tempo.",
          "Adjetivo.",
          "Substantivo.",
          "Preposição."
        ],

        correct: 0,

        explanation:
          "Cedo modifica o verbo chegaram e indica circunstância de tempo."
      },

      {
        prompt:
          "Assinale a alternativa que contém apenas classes invariáveis:",

        options: [
          "Substantivo, artigo e pronome.",
          "Adjetivo, numeral e verbo.",
          "Advérbio, preposição e conjunção.",
          "Artigo, verbo e interjeição."
        ],

        correct: 2,

        explanation:
          "Advérbio, preposição, conjunção e interjeição são classes invariáveis."
      },

      {
        prompt:
          "Na expressão “três candidatos”, a palavra “três” é:",

        options: [
          "Pronome.",
          "Numeral cardinal.",
          "Artigo indefinido.",
          "Advérbio de intensidade."
        ],

        correct: 1,

        explanation:
          "Três indica uma quantidade exata e é um numeral cardinal."
      },

      {
        prompt:
          "Na frase “Ele estudou, mas não foi aprovado”, a palavra “mas” é:",

        options: [
          "Preposição.",
          "Advérbio.",
          "Conjunção.",
          "Interjeição."
        ],

        correct: 2,

        explanation:
          "Mas liga duas orações e estabelece uma relação de oposição."
      },

      {
        prompt:
          "Na expressão “livro de português”, a palavra





