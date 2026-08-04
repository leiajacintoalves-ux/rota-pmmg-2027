"use strict";

window.PMMG_LESSONS = window.PMMG_LESSONS || {};

const adminSection = (title, html) => ({
  title,
  html
});

const adminCard = (question, answer) => ({
  question,
  answer
});

const adminQuestion = (
  prompt,
  options,
  correct,
  explanation
) => ({
  prompt,
  options,
  correct,
  explanation
});

const adminLesson = (
  objective,
  sections,
  flashcards,
  questions
) => ({
  access: "free",
  objective,
  sections,
  flashcards,
  questions
});

Object.assign(window.PMMG_LESSONS, {
  "Direito Administrativo::Administração Pública":
    adminLesson(
      "Compreender os princípios administrativos, a organização da Administração direta e indireta e as formas de distribuição das atividades administrativas.",

      [
        adminSection(
          "📖 Sentidos da Administração Pública",
          `
            <p>
              Em sentido <strong>subjetivo</strong>,
              Administração Pública representa os órgãos,
              entidades e agentes que exercem atividade
              administrativa.
            </p>

            <p>
              Em sentido <strong>objetivo</strong>,
              representa a própria atividade administrativa,
              como prestação de serviços, polícia
              administrativa, incentivo e intervenção.
            </p>
          `
        ),

        adminSection(
          "⚖️ Princípios expressos",
          `
            <p>
              O artigo 37 da Constituição apresenta os
              princípios de legalidade, impessoalidade,
              moralidade, publicidade e eficiência,
              conhecidos pela sigla <strong>LIMPE</strong>.
            </p>

            <ul>
              <li>
                <strong>Legalidade:</strong>
                atuação conforme o Direito.
              </li>

              <li>
                <strong>Impessoalidade:</strong>
                finalidade pública e igualdade.
              </li>

              <li>
                <strong>Moralidade:</strong>
                honestidade e boa-fé administrativa.
              </li>

              <li>
                <strong>Publicidade:</strong>
                transparência, salvo sigilo previsto
                no ordenamento.
              </li>

              <li>
                <strong>Eficiência:</strong>
                busca do melhor resultado com uso
                adequado dos recursos.
              </li>
            </ul>
          `
        ),

        adminSection(
          "🏛️ Administração direta e indireta",
          `
            <p>
              A Administração <strong>direta</strong>
              é formada pelos órgãos que integram
              a estrutura dos entes políticos:
              União, Estados, Distrito Federal
              e Municípios.
            </p>

            <p>
              A Administração <strong>indireta</strong>
              é composta por entidades com personalidade
              jurídica própria, como autarquias,
              fundações públicas, empresas públicas
              e sociedades de economia mista.
            </p>
          `
        ),

        adminSection(
          "🔄 Distribuição das atividades",
          `
            <ul>
              <li>
                <strong>Centralização:</strong>
                o próprio ente político executa a
                atividade por seus órgãos.
              </li>

              <li>
                <strong>Descentralização:</strong>
                a execução é atribuída a outra pessoa
                jurídica ou, conforme a lei, a particular.
              </li>

              <li>
                <strong>Desconcentração:</strong>
                distribuição interna de competências
                entre órgãos da mesma pessoa jurídica.
              </li>
            </ul>

            <p>
              Órgãos não possuem personalidade jurídica
              própria; entidades possuem.
            </p>
          `
        ),

        adminSection(
          "🏢 Entidades administrativas",
          `
            <ul>
              <li>
                <strong>Autarquia:</strong>
                pessoa jurídica de direito público
                criada por lei.
              </li>

              <li>
                <strong>Empresa pública:</strong>
                pessoa de direito privado com capital
                público e forma societária admitida
                pelo ordenamento.
              </li>

              <li>
                <strong>Sociedade de economia mista:</strong>
                pessoa de direito privado constituída
                como sociedade anônima, sob controle estatal.
              </li>

              <li>
                <strong>Fundação pública:</strong>
                entidade destinada a atividades de
                interesse social, conforme seu regime.
              </li>
            </ul>
          `
        )
      ],

      [
        adminCard(
          "O que significa LIMPE?",
          "Legalidade, impessoalidade, moralidade, publicidade e eficiência."
        ),

        adminCard(
          "Órgão público possui personalidade jurídica própria?",
          "Não. O órgão integra a estrutura de uma pessoa jurídica."
        ),

        adminCard(
          "O que é descentralização?",
          "É a atribuição da execução administrativa a outra pessoa jurídica ou, conforme a lei, a particular."
        ),

        adminCard(
          "Quais entidades integram a Administração indireta?",
          "Autarquias, fundações públicas, empresas públicas e sociedades de economia mista."
        ),

        adminCard(
          "Qual é a diferença entre desconcentração e descentralização?",
          "A desconcentração ocorre entre órgãos da mesma pessoa; a descentralização envolve outra pessoa jurídica ou particular."
        )
      ],

      [
        adminQuestion(
          "A sigla LIMPE representa:",
          [
            "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
            "Legalidade, igualdade, mérito, prudência e economia.",
            "Liberdade, impessoalidade, motivação, publicidade e eficácia.",
            "Legalidade, individualidade, moralidade, privacidade e efetividade."
          ],
          0,
          "LIMPE reúne os princípios expressos no caput do artigo 37 da Constituição."
        ),

        adminQuestion(
          "Integra a Administração indireta:",
          [
            "Ministério.",
            "Secretaria municipal.",
            "Autarquia.",
            "Gabinete."
          ],
          2,
          "A autarquia é entidade da Administração indireta."
        ),

        adminQuestion(
          "A distribuição interna de competências entre órgãos da mesma pessoa jurídica chama-se:",
          [
            "Descentralização.",
            "Desconcentração.",
            "Privatização.",
            "Concessão."
          ],
          1,
          "Desconcentração é a distribuição interna de competências."
        ),

        adminQuestion(
          "Assinale a alternativa correta:",
          [
            "Órgãos possuem personalidade jurídica própria.",
            "Entidades não possuem personalidade jurídica.",
            "Órgãos integram a estrutura de uma pessoa jurídica.",
            "Toda entidade pública é órgão."
          ],
          2,
          "Órgãos são centros de competências sem personalidade jurídica própria."
        ),

        adminQuestion(
          "A sociedade de economia mista é constituída sob a forma de:",
          [
            "Associação.",
            "Sociedade anônima.",
            "Autarquia.",
            "Fundação privada sem controle estatal."
          ],
          1,
          "A sociedade de economia mista adota a forma de sociedade anônima."
        ),

        adminQuestion(
          "A publicidade administrativa:",
          [
            "É absoluta e nunca admite sigilo.",
            "Admite restrições quando o sigilo é previsto pelo ordenamento.",
            "Autoriza promoção pessoal de autoridades.",
            "É facultativa para todos os atos."
          ],
          1,
          "A transparência é a regra, mas existem hipóteses jurídicas de sigilo."
        )
      ]
    ),

  "Direito Administrativo::Atos administrativos":
    adminLesson(
      "Identificar os elementos, atributos e formas de retirada dos atos administrativos, diferenciando anulação, revogação e convalidação.",

      [
        adminSection(
          "📖 Conceito",
          `
            <p>
              Ato administrativo é uma manifestação
              da Administração, ou de quem exerça
              função administrativa, destinada a
              produzir efeitos jurídicos sob regime
              predominantemente público.
            </p>

            <p>
              Nem toda atuação da Administração é ato
              administrativo. Fatos materiais e contratos
              possuem tratamento próprio.
            </p>
          `
        ),

        adminSection(
          "🧩 Elementos do ato",
          `
            <p>
              Os cinco elementos tradicionalmente
              estudados são:
            </p>

            <ul>
              <li>
                <strong>Competência:</strong>
                atribuição legal do agente ou órgão.
              </li>

              <li>
                <strong>Finalidade:</strong>
                interesse público previsto pela norma.
              </li>

              <li>
                <strong>Forma:</strong>
                modo de exteriorização exigido.
              </li>

              <li>
                <strong>Motivo:</strong>
                pressupostos de fato e de direito.
              </li>

              <li>
                <strong>Objeto:</strong>
                efeito jurídico produzido pelo ato.
              </li>
            </ul>
          `
        ),

        adminSection(
          "🛡️ Atributos",
          `
            <ul>
              <li>
                <strong>
                  Presunção de legitimidade e veracidade:
                </strong>
                o ato é presumido conforme o Direito
                e os fatos declarados, até prova
                em contrário.
              </li>

              <li>
                <strong>Imperatividade:</strong>
                possibilidade de impor obrigações,
                quando compatível com o ato.
              </li>

              <li>
                <strong>Autoexecutoriedade:</strong>
                execução direta em hipóteses autorizadas
                por lei ou justificadas por urgência.
              </li>

              <li>
                <strong>Tipicidade:</strong>
                correspondência às figuras previstas
                pelo ordenamento.
              </li>
            </ul>

            <p>
              Nem todos os atributos aparecem
              em todos os atos.
            </p>
          `
        ),

        adminSection(
          "❌ Anulação e revogação",
          `
            <p>
              <strong>Anulação</strong> retira ato ilegal.
              Pode ser realizada pela Administração
              e, quando provocado, pelo Poder Judiciário.
            </p>

            <p>
              <strong>Revogação</strong> retira ato válido
              por razões de conveniência e oportunidade.
              É decisão de mérito da própria Administração.
            </p>

            <p>
              Em regra, a anulação produz efeitos
              retroativos, enquanto a revogação
              produz efeitos para o futuro.
            </p>
          `
        ),

        adminSection(
          "🔧 Convalidação e motivação",
          `
            <p>
              A convalidação corrige vício sanável
              quando não houver lesão ao interesse
              público nem prejuízo a terceiros.
            </p>

            <p>
              A motivação apresenta os fatos e fundamentos
              jurídicos da decisão. Quando obrigatória,
              deve ser clara, explícita e coerente.
            </p>
          `
        )
      ],

      [
        adminCard(
          "Quais são os elementos do ato administrativo?",
          "Competência, finalidade, forma, motivo e objeto."
        ),

        adminCard(
          "O que é anulação?",
          "É a retirada de um ato ilegal."
        ),

        adminCard(
          "O que é revogação?",
          "É a retirada de um ato válido por conveniência e oportunidade."
        ),

        adminCard(
          "Todo ato possui autoexecutoriedade?",
          "Não. Ela depende de fundamento jurídico, como previsão legal ou situação de urgência."
        ),

        adminCard(
          "Quando pode ocorrer convalidação?",
          "Quando o vício for sanável e não houver lesão ao interesse público nem prejuízo a terceiros."
        )
      ],

      [
        adminQuestion(
          "Assinale um elemento do ato administrativo:",
          [
            "Publicidade.",
            "Competência.",
            "Eficiência.",
            "Supremacia."
          ],
          1,
          "Competência é um dos cinco elementos tradicionalmente estudados."
        ),

        adminQuestion(
          "A retirada de ato ilegal chama-se:",
          [
            "Revogação.",
            "Anulação.",
            "Delegação.",
            "Avocação."
          ],
          1,
          "A anulação decorre de ilegalidade."
        ),

        adminQuestion(
          "A revogação ocorre por razões de:",
          [
            "Ilegalidade.",
            "Inconstitucionalidade obrigatória.",
            "Conveniência e oportunidade.",
            "Incompetência do Poder Judiciário."
          ],
          2,
          "A revogação está relacionada ao mérito administrativo."
        ),

        adminQuestion(
          "Sobre a autoexecutoriedade, assinale a correta:",
          [
            "Está presente em todos os atos administrativos.",
            "Nunca existe sem ordem judicial.",
            "Pode existir quando prevista em lei ou em situações de urgência.",
            "É sinônimo de presunção de legitimidade."
          ],
          2,
          "A execução direta depende de fundamento jurídico e não é atributo universal."
        ),

        adminQuestion(
          "O motivo corresponde:",
          [
            "Ao efeito jurídico produzido.",
            "Aos pressupostos de fato e de direito do ato.",
            "Ao agente que recebeu competência.",
            "Ao modo de publicação."
          ],
          1,
          "Motivo são os pressupostos fáticos e jurídicos que justificam o ato."
        ),

        adminQuestion(
          "A convalidação:",
          [
            "Transforma qualquer ato ilegal em válido.",
            "Pode corrigir vício sanável sem lesão ao interesse público ou a terceiros.",
            "É feita exclusivamente pelo Poder Judiciário.",
            "É idêntica à revogação."
          ],
          1,
          "A convalidação alcança vícios sanáveis dentro dos limites jurídicos."
        )
      ]
    ),

  "Direito Administrativo::Poderes administrativos":
    adminLesson(
      "Diferenciar os poderes vinculados, discricionários, hierárquicos, disciplinares, regulamentares e de polícia, reconhecendo o abuso de poder.",

      [
        adminSection(
          "📖 Poder-dever administrativo",
          `
            <p>
              Os poderes administrativos são instrumentos
              conferidos para a realização do interesse
              público.
            </p>

            <p>
              Por isso, também constituem deveres e devem
              ser utilizados nos limites da competência,
              da finalidade e do ordenamento.
            </p>
          `
        ),

        adminSection(
          "🔒 Vinculado e discricionário",
          `
            <p>
              No poder <strong>vinculado</strong>, a norma
              define os requisitos e a solução administrativa,
              sem espaço legítimo para escolha de mérito.
            </p>

            <p>
              No poder <strong>discricionário</strong>,
              a norma permite escolha dentro de limites
              jurídicos, especialmente quanto à conveniência
              e à oportunidade.
            </p>

            <p>
              Discricionariedade não significa liberdade
              para agir contra a lei.
            </p>
          `
        ),

        adminSection(
          "🏢 Hierárquico e disciplinar",
          `
            <p>
              O poder <strong>hierárquico</strong> organiza,
              coordena, fiscaliza, distribui e revisa
              atividades dentro da estrutura administrativa.
            </p>

            <p>
              O poder <strong>disciplinar</strong> permite
              apurar infrações e aplicar sanções a servidores
              e a particulares sujeitos a vínculo especial
              com a Administração.
            </p>
          `
        ),

        adminSection(
          "📜 Regulamentar e poder de polícia",
          `
            <p>
              O poder <strong>regulamentar ou normativo</strong>
              permite editar atos gerais para dar execução
              à lei, sem contrariá-la.
            </p>

            <p>
              O <strong>poder de polícia</strong> condiciona
              ou restringe direitos, atividades e bens em
              benefício do interesse coletivo, nos limites
              do ordenamento.
            </p>
          `
        ),

        adminSection(
          "⚠️ Abuso de poder",
          `
            <ul>
              <li>
                <strong>Excesso de poder:</strong>
                o agente ultrapassa sua competência.
              </li>

              <li>
                <strong>Desvio de finalidade:</strong>
                o agente utiliza a competência visando
                finalidade diferente daquela prevista.
              </li>
            </ul>

            <p>
              O abuso torna a atuação sujeita a controle
              e invalidação.
            </p>
          `
        )
      ],

      [
        adminCard(
          "Discricionariedade permite agir contra a lei?",
          "Não. A escolha existe somente dentro dos limites jurídicos."
        ),

        adminCard(
          "O que permite o poder hierárquico?",
          "Organizar, coordenar, fiscalizar, distribuir e revisar atividades dentro da estrutura administrativa."
        ),

        adminCard(
          "Qual é a finalidade do poder disciplinar?",
          "Apurar infrações e aplicar sanções a pessoas sujeitas à disciplina administrativa."
        ),

        adminCard(
          "O que é poder de polícia?",
          "É a atividade que condiciona ou restringe direitos, atividades e bens em favor do interesse coletivo."
        ),

        adminCard(
          "Qual é a diferença entre excesso de poder e desvio de finalidade?",
          "No excesso, o agente ultrapassa a competência; no desvio, utiliza a competência para finalidade indevida."
        )
      ],

      [
        adminQuestion(
          "No poder vinculado:",
          [
            "O agente escolhe livremente qualquer solução.",
            "A norma define os requisitos e a solução aplicável.",
            "Não existe controle judicial.",
            "A finalidade pública é dispensável."
          ],
          1,
          "A atuação vinculada segue os requisitos e a consequência definidos pelo ordenamento."
        ),

        adminQuestion(
          "O poder que organiza e distribui funções internamente é o:",
          [
            "Disciplinar.",
            "Hierárquico.",
            "De polícia.",
            "Constituinte."
          ],
          1,
          "O poder hierárquico estrutura e coordena a atuação interna."
        ),

        adminQuestion(
          "A aplicação de sanção funcional após apuração decorre do poder:",
          [
            "Disciplinar.",
            "Regulamentar.",
            "Judiciário.",
            "Constituinte."
          ],
          0,
          "O poder disciplinar alcança infrações funcionais."
        ),

        adminQuestion(
          "O poder de polícia administrativa:",
          [
            "Pode restringir direitos e atividades nos limites da lei.",
            "É exercido sem finalidade pública.",
            "Substitui a função jurisdicional.",
            "É sempre ilimitado."
          ],
          0,
          "A polícia administrativa condiciona direitos em favor do interesse coletivo, sob limites jurídicos."
        ),

        adminQuestion(
          "Quando o agente ultrapassa sua competência ocorre:",
          [
            "Desvio de finalidade.",
            "Excesso de poder.",
            "Convalidação automática.",
            "Descentralização."
          ],
          1,
          "O excesso de poder está ligado à ultrapassagem da competência."
        ),

        adminQuestion(
          "O regulamento administrativo:",
          [
            "Pode contrariar livremente a lei.",
            "Serve para dar execução à lei nos limites do ordenamento.",
            "Revoga a Constituição.",
            "É editado exclusivamente pelo Poder Judiciário."
          ],
          1,
          "O poder regulamentar complementa a execução da lei sem contrariá-la."
        )
      ]
    ),

  "Direito Administrativo::Agentes públicos":
    adminLesson(
      "Compreender o conceito de agente público, diferenciar cargo, emprego e função e revisar concurso, cargos em comissão, acumulação e estabilidade.",

      [
        adminSection(
          "👥 Conceito e categorias",
          `
            <p>
              Agente público é toda pessoa que exerce,
              ainda que temporariamente ou sem remuneração,
              uma função pública por eleição, nomeação,
              designação, contratação ou outra forma admitida.
            </p>

            <p>
              Em classificações de estudo aparecem agentes
              políticos, servidores públicos, militares
              e particulares em colaboração com o Poder Público.
            </p>
          `
        ),

        adminSection(
          "📌 Cargo, emprego e função",
          `
            <ul>
              <li>
                <strong>Cargo público:</strong>
                conjunto de atribuições criado por lei,
                normalmente submetido a regime estatutário.
              </li>

              <li>
                <strong>Emprego público:</strong>
                vínculo contratual regido, em regra,
                pela legislação trabalhista, sem afastar
                normas públicas aplicáveis.
              </li>

              <li>
                <strong>Função pública:</strong>
                conjunto de atribuições exercidas por
                um agente.
              </li>
            </ul>
          `
        ),

        adminSection(
          "📝 Concurso e cargos em comissão",
          `
            <p>
              A investidura em cargo ou emprego público
              depende, em regra, de aprovação prévia em
              concurso de provas ou de provas e títulos.
            </p>

            <p>
              Cargos em comissão são declarados em lei
              de livre nomeação e exoneração e destinam-se
              somente às atribuições de direção, chefia
              e assessoramento.
            </p>

            <p>
              Funções de confiança são exercidas
              exclusivamente por servidores ocupantes
              de cargo efetivo.
            </p>
          `
        ),

        adminSection(
          "⚖️ Acumulação remunerada",
          `
            <p>
              A regra é a proibição de acumular
              cargos remunerados.
            </p>

            <p>
              Com compatibilidade de horários,
              admitem-se:
            </p>

            <ul>
              <li>dois cargos de professor;</li>

              <li>
                um cargo de professor com outro
                técnico ou científico;
              </li>

              <li>
                dois cargos ou empregos privativos
                de profissionais de saúde com
                profissões regulamentadas.
              </li>
            </ul>
          `
        ),

        adminSection(
          "🛡️ Estabilidade e responsabilidade",
          `
            <p>
              O servidor nomeado para cargo efetivo
              por concurso adquire estabilidade após
              três anos de efetivo exercício e avaliação
              especial de desempenho.
            </p>

            <p>
              A estabilidade não impede responsabilização.
              Agentes podem responder nas esferas civil,
              administrativa e penal, conforme os
              pressupostos de cada uma.
            </p>
          `
        )
      ],

      [
        adminCard(
          "Quem pode ser considerado agente público?",
          "Toda pessoa que exerce função pública, mesmo temporariamente ou sem remuneração, conforme o vínculo admitido."
        ),

        adminCard(
          "Qual é a diferença básica entre cargo e emprego público?",
          "O cargo costuma seguir regime estatutário; o emprego segue vínculo trabalhista, com incidência de normas públicas."
        ),

        adminCard(
          "Para que servem cargos em comissão?",
          "Para atribuições de direção, chefia e assessoramento."
        ),

        adminCard(
          "Quem pode exercer função de confiança?",
          "Exclusivamente servidor ocupante de cargo efetivo."
        ),

        adminCard(
          "Quando o servidor efetivo adquire estabilidade?",
          "Após três anos de efetivo exercício e avaliação especial de desempenho."
        )
      ],

      [
        adminQuestion(
          "A investidura em cargo efetivo depende, em regra, de:",
          [
            "Indicação política.",
            "Concurso público.",
            "Eleição interna.",
            "Contrato verbal."
          ],
          1,
          "O concurso público é a regra constitucional para cargos e empregos."
        ),

        adminQuestion(
          "Cargo em comissão destina-se a atribuições de:",
          [
            "Qualquer atividade operacional permanente.",
            "Direção, chefia e assessoramento.",
            "Exercício exclusivo de atividade técnica comum.",
            "Substituição de todos os cargos efetivos."
          ],
          1,
          "A Constituição limita os cargos em comissão a direção, chefia e assessoramento."
        ),

        adminQuestion(
          "Função de confiança é exercida:",
          [
            "Por qualquer particular.",
            "Exclusivamente por servidor ocupante de cargo efetivo.",
            "Somente por empregado de empresa privada.",
            "Por pessoa sem vínculo e sem nomeação."
          ],
          1,
          "A função de confiança é reservada ao servidor efetivo."
        ),

        adminQuestion(
          "Com compatibilidade de horários, é permitida a acumulação de:",
          [
            "Três cargos de professor.",
            "Dois cargos de professor.",
            "Dois cargos administrativos comuns.",
            "Quaisquer dois cargos em comissão."
          ],
          1,
          "Dois cargos de professor constituem exceção constitucional."
        ),

        adminQuestion(
          "A estabilidade é adquirida após:",
          [
            "A posse.",
            "Um ano de exercício.",
            "Três anos de efetivo exercício, com os requisitos constitucionais.",
            "A aprovação no concurso, antes da nomeação."
          ],
          2,
          "O prazo constitucional é de três anos, com avaliação especial de desempenho."
        ),

        adminQuestion(
          "Agente público é apenas quem recebe remuneração?",
          [
            "Sim, sempre.",
            "Não. O conceito pode abranger exercício temporário ou sem remuneração.",
            "Sim, salvo eleição.",
            "Somente se possuir cargo efetivo."
          ],
          1,
          "O conceito é amplo e não depende necessariamente de remuneração ou permanência."
        )
      ]
    ),

  "Direito Administrativo::Licitações — noções":
    adminLesson(
      "Compreender os objetivos, princípios, modalidades, critérios de julgamento e hipóteses básicas de contratação direta da Lei nº 14.133/2021.",

      [
        adminSection(
          "📖 Finalidade da licitação",
          `
            <p>
              A licitação busca selecionar proposta apta
              a gerar contratação mais vantajosa, assegurar
              tratamento isonômico e competição justa,
              evitar sobrepreço e superfaturamento e
              incentivar inovação e desenvolvimento
              nacional sustentável.
            </p>
          `
        ),

        adminSection(
          "⚖️ Princípios relevantes",
          `
            <p>
              A Lei nº 14.133/2021 reúne princípios como
              legalidade, impessoalidade, moralidade,
              publicidade, eficiência, interesse público,
              probidade, igualdade, planejamento,
              transparência, segregação de funções,
              motivação, vinculação ao edital,
              julgamento objetivo, segurança jurídica,
              competitividade e economicidade.
            </p>
          `
        ),

        adminSection(
          "📌 Modalidades",
          `
            <ul>
              <li><strong>Pregão;</strong></li>
              <li><strong>Concorrência;</strong></li>
              <li><strong>Concurso;</strong></li>
              <li><strong>Leilão;</strong></li>
              <li><strong>Diálogo competitivo.</strong></li>
            </ul>

            <p>
              Convite e tomada de preços não são
              modalidades da Lei nº 14.133/2021.
            </p>
          `
        ),

        adminSection(
          "🏆 Critérios de julgamento",
          `
            <ul>
              <li>menor preço;</li>
              <li>maior desconto;</li>
              <li>melhor técnica ou conteúdo artístico;</li>
              <li>técnica e preço;</li>
              <li>maior lance, no caso de leilão;</li>
              <li>maior retorno econômico.</li>
            </ul>
          `
        ),

        adminSection(
          "🚪 Contratação direta",
          `
            <p>
              A contratação direta compreende hipóteses
              de <strong>dispensa</strong> e
              <strong>inexigibilidade</strong>.
            </p>

            <p>
              Na inexigibilidade, a competição é inviável.
              Na dispensa, a competição pode ser possível,
              mas a lei autoriza a contratação direta
              em hipótese específica.
            </p>

            <p>
              Mesmo sem licitação, é necessário processo
              administrativo com justificativas
              e requisitos legais.
            </p>
          `
        ),

        adminSection(
          "🧭 Fases do processo",
          `
            <p>
              A sequência comum prevista na nova lei contém:
            </p>

            <ol>
              <li>fase preparatória;</li>
              <li>divulgação do edital;</li>
              <li>apresentação de propostas e lances;</li>
              <li>julgamento;</li>
              <li>habilitação;</li>
              <li>fase recursal;</li>
              <li>homologação.</li>
            </ol>

            <p>
              A habilitação pode ser antecipada quando
              a lei e a motivação permitirem.
            </p>
          `
        )
      ],

      [
        adminCard(
          "Qual é a lei geral atual de licitações?",
          "Lei nº 14.133/2021."
        ),

        adminCard(
          "Quais são as modalidades da Lei nº 14.133/2021?",
          "Pregão, concorrência, concurso, leilão e diálogo competitivo."
        ),

        adminCard(
          "Tomada de preços é modalidade da Lei nº 14.133/2021?",
          "Não."
        ),

        adminCard(
          "Quando ocorre inexigibilidade?",
          "Quando a competição é inviável."
        ),

        adminCard(
          "Contratação direta dispensa processo administrativo?",
          "Não. A contratação direta exige instrução e justificativas previstas em lei."
        )
      ],

      [
        adminQuestion(
          "É modalidade da Lei nº 14.133/2021:",
          [
            "Tomada de preços.",
            "Convite.",
            "Diálogo competitivo.",
            "Consulta."
          ],
          2,
          "O diálogo competitivo integra o rol atual de modalidades."
        ),

        adminQuestion(
          "Não é modalidade da Lei nº 14.133/2021:",
          [
            "Pregão.",
            "Concorrência.",
            "Tomada de preços.",
            "Leilão."
          ],
          2,
          "Tomada de preços não integra as modalidades da nova lei."
        ),

        adminQuestion(
          "A inexigibilidade ocorre quando:",
          [
            "A competição é inviável.",
            "A Administração não deseja instruir processo.",
            "Sempre existe emergência.",
            "O objeto possui baixo valor em qualquer situação."
          ],
          0,
          "A inviabilidade de competição caracteriza a inexigibilidade."
        ),

        adminQuestion(
          "É critério de julgamento previsto na Lei nº 14.133/2021:",
          [
            "Menor prazo em qualquer caso.",
            "Maior retorno econômico.",
            "Escolha secreta.",
            "Preferência pessoal do agente."
          ],
          1,
          "Maior retorno econômico é um dos critérios legais."
        ),

        adminQuestion(
          "A licitação busca, entre outros objetivos:",
          [
            "Eliminar a competição.",
            "Assegurar tratamento isonômico e proposta vantajosa.",
            "Favorecer previamente uma empresa.",
            "Dispensar planejamento."
          ],
          1,
          "Isonomia, competição e resultado vantajoso são objetivos legais."
        ),

        adminQuestion(
          "A contratação direta:",
          [
            "Nunca exige justificativa.",
            "Elimina a necessidade de processo.",
            "Deve ser instruída conforme os requisitos legais.",
            "É sinônimo exclusivo de inexigibilidade."
          ],
          2,
          "Dispensa e inexigibilidade exigem processo administrativo devidamente instruído."
        )
      ]
    ),

  "Direito Administrativo::Responsabilidade civil do Estado":
    adminLesson(
      "Compreender a responsabilidade objetiva das pessoas jurídicas prestadoras de serviço público, os requisitos do dever de indenizar e a ação regressiva contra o agente.",

      [
        adminSection(
          "📖 Regra constitucional",
          `
            <p>
              As pessoas jurídicas de direito público
              e as pessoas jurídicas de direito privado
              prestadoras de serviços públicos respondem
              pelos danos que seus agentes, nessa qualidade,
              causarem a terceiros.
            </p>

            <p>
              A regra constitucional adota responsabilidade
              objetiva perante a vítima, sem exigir prova
              de dolo ou culpa do agente para o pedido
              contra o Estado.
            </p>
          `
        ),

        adminSection(
          "🧩 Requisitos",
          `
            <p>Em regra, devem ser demonstrados:</p>

            <ul>
              <li>conduta administrativa;</li>
              <li>dano;</li>
              <li>nexo causal entre a conduta e o dano;</li>

              <li>
                atuação do agente nessa qualidade.
              </li>
            </ul>
          `
        ),

        adminSection(
          "⚠️ Causas que afetam o nexo",
          `
            <p>
              A inexistência de nexo causal afasta a
              responsabilidade.
            </p>

            <p>
              Fatos como culpa exclusiva da vítima,
              fato exclusivo de terceiro ou eventos
              inevitáveis podem excluir ou reduzir
              o dever de indenizar, conforme o caso.
            </p>

            <p>
              A culpa concorrente da vítima pode levar
              à redução proporcional da indenização.
            </p>
          `
        ),

        adminSection(
          "↩️ Direito de regresso",
          `
            <p>
              Depois de indenizar a vítima, o Estado pode
              buscar ressarcimento do agente responsável
              quando houver dolo ou culpa.
            </p>

            <p>
              A responsabilidade do Estado perante a vítima
              é objetiva, enquanto a ação regressiva contra
              o agente exige responsabilidade subjetiva.
            </p>
          `
        ),

        adminSection(
          "🚧 Atos lícitos e omissões",
          `
            <p>
              Um ato estatal lícito também pode gerar
              indenização quando causar dano especial
              e anormal a pessoa determinada, conforme
              os pressupostos jurídicos.
            </p>

            <p>
              Situações de omissão exigem análise do dever
              estatal de agir, do nexo causal e do regime
              aplicável ao caso.
            </p>
          `
        )
      ],

      [
        adminCard(
          "A vítima precisa provar culpa do agente para acionar o Estado?",
          "Na regra objetiva do artigo 37, § 6º, deve provar conduta, dano e nexo causal, e não a culpa do agente."
        ),

        adminCard(
          "Quem responde objetivamente nos termos constitucionais?",
          "Pessoas jurídicas de direito público e pessoas jurídicas de direito privado prestadoras de serviços públicos."
        ),

        adminCard(
          "O que é nexo causal?",
          "É a ligação entre a conduta administrativa e o dano sofrido."
        ),

        adminCard(
          "Quando cabe ação regressiva contra o agente?",
          "Quando o Estado indeniza e há dolo ou culpa do agente."
        ),

        adminCard(
          "Culpa exclusiva da vítima pode afastar a responsabilidade?",
          "Sim, quando rompe o nexo causal."
        )
      ],

      [
        adminQuestion(
          "A responsabilidade estatal prevista no artigo 37, § 6º, é, perante a vítima:",
          [
            "Objetiva.",
            "Sempre subjetiva.",
            "Penal.",
            "Inexistente."
          ],
          0,
          "A vítima não precisa provar dolo ou culpa do agente para a responsabilidade objetiva."
        ),

        adminQuestion(
          "É requisito do dever de indenizar:",
          [
            "Nexo causal.",
            "Concurso público.",
            "Licitação prévia.",
            "Hierarquia entre vítima e agente."
          ],
          0,
          "É necessária ligação causal entre a atuação estatal e o dano."
        ),

        adminQuestion(
          "Na ação regressiva contra o agente, exige-se:",
          [
            "Apenas a existência do cargo.",
            "Dolo ou culpa.",
            "Concurso de credores.",
            "Autorização da vítima."
          ],
          1,
          "O direito de regresso pressupõe dolo ou culpa do agente."
        ),

        adminQuestion(
          "A culpa exclusiva da vítima:",
          [
            "Nunca possui relevância.",
            "Pode romper o nexo causal e afastar a responsabilidade.",
            "Cria responsabilidade penal automática.",
            "Obriga o Estado a pagar em dobro."
          ],
          1,
          "Sem nexo causal, não há dever de indenizar pela regra geral."
        ),

        adminQuestion(
          "A responsabilidade objetiva alcança pessoa jurídica privada:",
          [
            "Nunca.",
            "Quando presta serviço público, nos termos constitucionais.",
            "Somente quando não possui contrato.",
            "Apenas quando explora atividade comercial comum."
          ],
          1,
          "A Constituição inclui pessoas privadas prestadoras de serviços públicos."
        ),

        adminQuestion(
          "Responsabilidade objetiva significa:",
          [
            "Indenização automática sem dano ou nexo.",
            "Dispensa de prova da culpa, mas não do dano e do nexo causal.",
            "Responsabilidade penal do Estado.",
            "Impossibilidade de defesa."
          ],
          1,
          "A objetividade elimina a exigência de culpa, não os demais pressupostos."
        )
      ]
    ),

  "Direito Administrativo::Processo administrativo":
    adminLesson(
      "Conhecer os princípios, direitos, competência, motivação, recursos e prazos básicos do processo administrativo federal regulado pela Lei nº 9.784/1999.",

      [
        adminSection(
          "📖 Finalidade e aplicação",
          `
            <p>
              A Lei nº 9.784/1999 estabelece normas
              básicas para o processo administrativo
              na Administração Pública Federal direta
              e indireta.
            </p>

            <p>
              Busca proteger os direitos dos administrados
              e assegurar o melhor cumprimento dos fins
              administrativos.
            </p>

            <p>
              Também se aplica aos órgãos dos Poderes
              Legislativo e Judiciário da União quando
              desempenham função administrativa.
            </p>
          `
        ),

        adminSection(
          "⚖️ Princípios",
          `
            <p>
              A lei menciona legalidade, finalidade,
              motivação, razoabilidade, proporcionalidade,
              moralidade, ampla defesa, contraditório,
              segurança jurídica, interesse público
              e eficiência.
            </p>
          `
        ),

        adminSection(
          "👤 Direitos e deveres do administrado",
          `
            <p>
              O administrado possui, entre outros,
              direito de:
            </p>

            <ul>
              <li>ser tratado com respeito;</li>

              <li>
                acompanhar o processo e conhecer decisões;
              </li>

              <li>
                apresentar alegações e documentos
                antes da decisão;
              </li>

              <li>
                ser assistido por advogado quando desejar,
                salvo exigência legal.
              </li>
            </ul>

            <p>
              Deve agir com verdade, lealdade,
              urbanidade e colaboração.
            </p>
          `
        ),

        adminSection(
          "🏛️ Competência, delegação e avocação",
          `
            <p>
              A competência é irrenunciável e deve
              ser exercida pelo órgão ao qual foi atribuída,
              salvo delegação e avocação legalmente admitidas.
            </p>

            <p>Não podem ser delegadas:</p>

            <ul>
              <li>a edição de atos normativos;</li>
              <li>a decisão de recursos administrativos;</li>

              <li>
                matérias de competência exclusiva.
              </li>
            </ul>

            <p>
              A avocação é temporária, excepcional
              e deve ser justificada por motivos relevantes.
            </p>
          `
        ),

        adminSection(
          "📝 Motivação e decisão",
          `
            <p>
              Atos que neguem direitos, imponham deveres
              ou sanções, decidam recursos, dispensem
              ou declarem inexigível licitação e outras
              hipóteses legais devem ser motivados.
            </p>

            <p>
              Concluída a instrução, a Administração possui
              até trinta dias para decidir, prorrogáveis
              por igual período mediante motivação expressa.
            </p>
          `
        ),

        adminSection(
          "↩️ Recurso e revisão",
          `
            <p>
              Das decisões administrativas cabe recurso
              por razões de legalidade e mérito.
            </p>

            <p>
              Salvo regra específica, o prazo para
              interposição é de dez dias.
            </p>

            <p>
              O recurso é dirigido à autoridade que decidiu.
              Se ela não reconsiderar em cinco dias,
              deverá encaminhá-lo à autoridade superior.
            </p>

            <p>
              Processos sancionadores podem ser revistos
              quando surgirem fatos novos ou circunstâncias
              relevantes, sem agravamento da sanção
              na revisão.
            </p>
          `
        ),

        adminSection(
          "⏳ Anulação e decadência",
          `
            <p>
              A Administração deve anular atos ilegais
              e pode revogar atos válidos por conveniência
              e oportunidade, respeitados os direitos
              adquiridos.
            </p>

            <p>
              O direito de anular atos favoráveis decai
              em cinco anos, contados da prática,
              salvo comprovada má-fé.
            </p>
          `
        )
      ],

      [
        adminCard(
          "Qual lei regula o processo administrativo federal?",
          "Lei nº 9.784/1999."
        ),

        adminCard(
          "A competência administrativa é renunciável?",
          "Não. É irrenunciável, ressalvadas delegação e avocação admitidas em lei."
        ),

        adminCard(
          "Qual é o prazo geral para recurso administrativo?",
          "Dez dias, salvo disposição legal específica."
        ),

        adminCard(
          "Qual é o prazo para decidir após a instrução?",
          "Até trinta dias, prorrogáveis por igual período com motivação expressa."
        ),

        adminCard(
          "Qual é o prazo para anular ato favorável, salvo má-fé?",
          "Cinco anos."
        )
      ],

      [
        adminQuestion(
          "A Lei nº 9.784/1999 regula o processo administrativo no âmbito:",
          [
            "Somente dos Municípios.",
            "Da Administração Pública Federal.",
            "Exclusivamente do Poder Judiciário estadual.",
            "Somente de empresas privadas."
          ],
          1,
          "A lei estabelece normas básicas para a Administração Federal direta e indireta."
        ),

        adminQuestion(
          "A competência administrativa é:",
          [
            "Livremente renunciável.",
            "Irrenunciável, salvo delegação e avocação admitidas.",
            "Sempre transferida ao superior.",
            "Exercida apenas pelo Poder Judiciário."
          ],
          1,
          "A competência deve ser exercida pelo órgão competente, com as exceções legais."
        ),

        adminQuestion(
          "Não pode ser objeto de delegação:",
          [
            "Atividade material simples.",
            "Decisão de recurso administrativo.",
            "Assinatura de comunicação comum.",
            "Prática de ato de instrução."
          ],
          1,
          "A decisão de recurso administrativo está entre as matérias indelegáveis."
        ),

        adminQuestion(
          "O prazo geral para interpor recurso administrativo é de:",
          [
            "Cinco dias.",
            "Dez dias.",
            "Trinta dias.",
            "Cinco anos."
          ],
          1,
          "Salvo regra específica, a Lei nº 9.784/1999 prevê dez dias."
        ),

        adminQuestion(
          "Concluída a instrução, a Administração deve decidir em até:",
          [
            "Cinco dias, sem prorrogação.",
            "Dez dias.",
            "Trinta dias, prorrogáveis por igual período com motivação.",
            "Cinco anos."
          ],
          2,
          "A lei prevê trinta dias, com possível prorrogação motivada por igual período."
        ),

        adminQuestion(
          "O direito de anular ato favorável ao destinatário decai, salvo má-fé, em:",
          [
            "Um ano.",
            "Dois anos.",
            "Cinco anos.",
            "Vinte anos."
          ],
          2,
          "A Lei nº 9.784/1999 estabelece prazo de cinco anos, salvo má-fé."
        )
      ]
    )
});
