"use strict";

window.PMMG_LESSONS = window.PMMG_LESSONS || {};

const constitutionalSection = (title, html) => ({
  title,
  html
});

const constitutionalCard = (question, answer) => ({
  question,
  answer
});

const constitutionalQuestion = (
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

const constitutionalLesson = (
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
  "Direito Constitucional::Princípios fundamentais":
    constitutionalLesson(
      "Compreender os fundamentos, a separação dos Poderes, os objetivos fundamentais e os princípios que orientam as relações internacionais do Brasil.",

      [
        constitutionalSection(
          "📖 Estado Democrático de Direito",
          `
            <p>
              A República Federativa do Brasil é formada pela união
              indissolúvel dos Estados, dos Municípios e do Distrito
              Federal e constitui-se em Estado Democrático de Direito.
            </p>

            <p>
              Todo o poder emana do povo, que o exerce por meio de
              representantes eleitos ou diretamente, nos termos da
              Constituição.
            </p>
          `
        ),

        constitutionalSection(
          "📌 Fundamentos da República",
          `
            <p>O artigo 1º apresenta cinco fundamentos:</p>

            <ul>
              <li>soberania;</li>
              <li>cidadania;</li>
              <li>dignidade da pessoa humana;</li>

              <li>
                valores sociais do trabalho e da livre iniciativa;
              </li>

              <li>pluralismo político.</li>
            </ul>
          `
        ),

        constitutionalSection(
          "⚖️ Separação dos Poderes",
          `
            <p>
              São Poderes da União, independentes e harmônicos
              entre si, o Legislativo, o Executivo e o Judiciário.
            </p>

            <p>
              A independência não significa isolamento: cada Poder
              possui funções próprias e mecanismos constitucionais
              de controle recíproco.
            </p>
          `
        ),

        constitutionalSection(
          "🎯 Objetivos fundamentais",
          `
            <ul>
              <li>
                construir uma sociedade livre, justa e solidária;
              </li>

              <li>garantir o desenvolvimento nacional;</li>

              <li>
                erradicar a pobreza e a marginalização e reduzir
                desigualdades;
              </li>

              <li>
                promover o bem de todos, sem preconceitos ou
                discriminações.
              </li>
            </ul>
          `
        ),

        constitutionalSection(
          "🌎 Relações internacionais",
          `
            <p>
              Entre os princípios do artigo 4º estão independência
              nacional, prevalência dos direitos humanos,
              autodeterminação dos povos, não intervenção,
              igualdade entre os Estados, defesa da paz,
              solução pacífica dos conflitos, repúdio ao terrorismo
              e ao racismo, cooperação entre os povos e concessão
              de asilo político.
            </p>
          `
        )
      ],

      [
        constitutionalCard(
          "Quais são os fundamentos da República?",
          "Soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa e pluralismo político."
        ),

        constitutionalCard(
          "De quem emana todo o poder?",
          "Do povo, que o exerce por representantes eleitos ou diretamente, nos termos da Constituição."
        ),

        constitutionalCard(
          "Quais são os Poderes da União?",
          "Legislativo, Executivo e Judiciário, independentes e harmônicos entre si."
        ),

        constitutionalCard(
          "Erradicar a pobreza é fundamento ou objetivo?",
          "É objetivo fundamental da República."
        ),

        constitutionalCard(
          "A prevalência dos direitos humanos está em qual grupo?",
          "Nos princípios que regem as relações internacionais do Brasil."
        )
      ],

      [
        constitutionalQuestion(
          "Assinale um fundamento da República Federativa do Brasil:",
          [
            "Desenvolvimento nacional.",
            "Pluralismo político.",
            "Defesa da paz.",
            "Erradicação da pobreza."
          ],
          1,
          "Pluralismo político é fundamento previsto no artigo 1º."
        ),

        constitutionalQuestion(
          "Todo o poder emana:",
          [
            "Do Congresso Nacional.",
            "Do Supremo Tribunal Federal.",
            "Do povo.",
            "Do Presidente da República."
          ],
          2,
          "O parágrafo único do artigo 1º afirma que todo o poder emana do povo."
        ),

        constitutionalQuestion(
          "São Poderes da União:",
          [
            "Legislativo, Executivo e Ministério Público.",
            "Executivo, Judiciário e Tribunal de Contas.",
            "Legislativo, Executivo e Judiciário.",
            "Judiciário, Defensoria e Ministério Público."
          ],
          2,
          "O artigo 2º indica Legislativo, Executivo e Judiciário."
        ),

        constitutionalQuestion(
          "Assinale um objetivo fundamental da República:",
          [
            "Conceder asilo político.",
            "Promover o bem de todos sem discriminação.",
            "Garantir a separação dos Poderes.",
            "Assegurar a não intervenção."
          ],
          1,
          "Promover o bem de todos é objetivo fundamental do artigo 3º."
        ),

        constitutionalQuestion(
          "O repúdio ao terrorismo e ao racismo é:",
          [
            "Fundamento da República.",
            "Objetivo fundamental.",
            "Princípio das relações internacionais.",
            "Direito social."
          ],
          2,
          "O repúdio ao terrorismo e ao racismo aparece no artigo 4º."
        ),

        constitutionalQuestion(
          "A união dos Estados, Municípios e Distrito Federal é:",
          [
            "Dissolúvel por lei complementar.",
            "Indissolúvel.",
            "Temporária.",
            "Dependente de referendo periódico."
          ],
          1,
          "O artigo 1º define essa união como indissolúvel."
        )
      ]
    ),

  "Direito Constitucional::Direitos e garantias":
    constitutionalLesson(
      "Reconhecer os direitos e deveres individuais e coletivos do artigo 5º e diferenciar os principais remédios constitucionais.",

      [
        constitutionalSection(
          "📖 Direitos protegidos",
          `
            <p>
              O artigo 5º protege, nos termos constitucionais,
              a vida, a liberdade, a igualdade, a segurança
              e a propriedade.
            </p>

            <p>
              Homens e mulheres são iguais em direitos e
              obrigações, e ninguém será obrigado a fazer
              ou deixar de fazer algo senão em virtude de lei.
            </p>
          `
        ),

        constitutionalSection(
          "🏠 Casa, reunião e associação",
          `
            <ul>
              <li>
                A casa é asilo inviolável, ressalvadas as
                hipóteses constitucionais.
              </li>

              <li>
                Reuniões pacíficas e sem armas independem de
                autorização, exigindo-se prévio aviso à
                autoridade competente.
              </li>

              <li>
                É plena a liberdade de associação para fins
                lícitos, vedada a de caráter paramilitar.
              </li>
            </ul>
          `
        ),

        constitutionalSection(
          "⚖️ Garantias processuais",
          `
            <ul>
              <li>
                ninguém será privado da liberdade ou dos bens
                sem devido processo legal;
              </li>

              <li>
                são assegurados contraditório e ampla defesa;
              </li>

              <li>
                ninguém será considerado culpado até o trânsito
                em julgado;
              </li>

              <li>não haverá juízo ou tribunal de exceção;</li>

              <li>
                a lei penal não retroagirá, salvo para beneficiar
                o réu.
              </li>
            </ul>
          `
        ),

        constitutionalSection(
          "🛡️ Remédios constitucionais",
          `
            <ul>
              <li>
                <strong>Habeas corpus:</strong>
                protege a liberdade de locomoção.
              </li>

              <li>
                <strong>Mandado de segurança:</strong>
                protege direito líquido e certo não amparado
                por habeas corpus ou habeas data.
              </li>

              <li>
                <strong>Mandado de injunção:</strong>
                enfrenta falta de norma regulamentadora que
                inviabilize direito constitucional.
              </li>

              <li>
                <strong>Habeas data:</strong>
                assegura conhecimento ou retificação de
                dados pessoais.
              </li>

              <li>
                <strong>Ação popular:</strong>
                combate ato lesivo aos bens e valores
                constitucionalmente protegidos.
              </li>
            </ul>
          `
        ),

        constitutionalSection(
          "⚠️ Aplicação e tratados",
          `
            <p>
              As normas definidoras dos direitos e garantias
              fundamentais têm aplicação imediata.
            </p>

            <p>
              Direitos expressos na Constituição não excluem
              outros decorrentes do regime, dos princípios
              adotados e dos tratados internacionais de que
              o Brasil seja parte.
            </p>
          `
        )
      ],

      [
        constitutionalCard(
          "Quais direitos aparecem no caput do artigo 5º?",
          "Vida, liberdade, igualdade, segurança e propriedade."
        ),

        constitutionalCard(
          "O que protege o habeas corpus?",
          "A liberdade de locomoção contra violência ou coação ilegal ou abusiva."
        ),

        constitutionalCard(
          "Para que serve o habeas data?",
          "Para conhecer ou retificar dados pessoais em registros públicos ou de caráter público."
        ),

        constitutionalCard(
          "Reunião pacífica depende de autorização?",
          "Não. Exige prévio aviso e não pode frustrar reunião anteriormente convocada para o mesmo local."
        ),

        constitutionalCard(
          "Quando a lei penal pode retroagir?",
          "Quando beneficiar o réu."
        )
      ],

      [
        constitutionalQuestion(
          "O habeas corpus protege:",
          [
            "Direito de acesso a dados.",
            "Liberdade de locomoção.",
            "Patrimônio público.",
            "Direito líquido e certo em qualquer hipótese."
          ],
          1,
          "O habeas corpus tutela a liberdade de locomoção."
        ),

        constitutionalQuestion(
          "O habeas data é utilizado para:",
          [
            "Anular ato lesivo ao patrimônio público.",
            "Proteger reunião pública.",
            "Conhecer ou retificar dados pessoais.",
            "Questionar falta de lei regulamentadora."
          ],
          2,
          "O habeas data cuida do acesso e da correção de dados pessoais."
        ),

        constitutionalQuestion(
          "A casa pode ser penetrada sem consentimento do morador:",
          [
            "Em qualquer horário por ordem administrativa.",
            "Somente com autorização do vizinho.",
            "Nas hipóteses previstas pela Constituição.",
            "Nunca."
          ],
          2,
          "A Constituição prevê exceções como flagrante delito, desastre, socorro e ordem judicial durante o dia."
        ),

        constitutionalQuestion(
          "A reunião em local aberto ao público:",
          [
            "Depende sempre de autorização.",
            "Pode ser armada.",
            "Exige prévio aviso e deve ser pacífica e sem armas.",
            "Dispensa qualquer comunicação."
          ],
          2,
          "O artigo 5º dispensa autorização, mas exige prévio aviso e reunião pacífica e sem armas."
        ),

        constitutionalQuestion(
          "A presunção de inocência permanece até:",
          [
            "A denúncia.",
            "A sentença de primeiro grau.",
            "O trânsito em julgado da sentença penal condenatória.",
            "A prisão em flagrante."
          ],
          2,
          "A Constituição relaciona a culpa ao trânsito em julgado da condenação."
        ),

        constitutionalQuestion(
          "O mandado de injunção é cabível quando:",
          [
            "Há falta de norma regulamentadora que inviabiliza direito constitucional.",
            "Há ameaça à locomoção.",
            "É necessário corrigir dado pessoal.",
            "Um cidadão deseja anular qualquer contrato privado."
          ],
          0,
          "O mandado de injunção combate omissão normativa que inviabilize o exercício de direito constitucional."
        )
      ]
    ),

  "Direito Constitucional::Direitos sociais":
    constitutionalLesson(
      "Identificar os direitos sociais, compreender noções constitucionais de trabalho e reconhecer a liberdade sindical e o direito de greve.",

      [
        constitutionalSection(
          "📖 Direitos sociais do artigo 6º",
          `
            <p>São direitos sociais:</p>

            <ul>
              <li>educação;</li>
              <li>saúde;</li>
              <li>alimentação;</li>
              <li>trabalho;</li>
              <li>moradia;</li>
              <li>transporte;</li>
              <li>lazer;</li>
              <li>segurança;</li>
              <li>previdência social;</li>

              <li>
                proteção à maternidade e à infância;
              </li>

              <li>assistência aos desamparados.</li>
            </ul>
          `
        ),

        constitutionalSection(
          "💼 Direitos dos trabalhadores",
          `
            <p>
              O artigo 7º reúne direitos de trabalhadores
              urbanos e rurais, além de outros destinados
              à melhoria de sua condição social.
            </p>

            <ul>
              <li>salário mínimo;</li>
              <li>décimo terceiro salário;</li>
              <li>repouso semanal remunerado;</li>

              <li>
                férias anuais com adicional de um terço;
              </li>

              <li>licenças maternidade e paternidade;</li>
              <li>redução dos riscos do trabalho;</li>

              <li>
                proibição de discriminação salarial.
              </li>
            </ul>
          `
        ),

        constitutionalSection(
          "🧒 Trabalho do menor",
          `
            <p>
              É proibido trabalho noturno, perigoso ou
              insalubre a menores de dezoito anos.
            </p>

            <p>
              Também é proibido qualquer trabalho a menores
              de dezesseis anos, salvo na condição de aprendiz
              a partir dos quatorze anos.
            </p>
          `
        ),

        constitutionalSection(
          "🤝 Liberdade sindical",
          `
            <p>
              É livre a associação profissional ou sindical,
              observadas as regras constitucionais.
            </p>

            <p>
              Ninguém será obrigado a filiar-se ou a manter-se
              filiado a sindicato. Ao sindicato cabe a defesa
              dos direitos e interesses coletivos ou individuais
              da categoria.
            </p>
          `
        ),

        constitutionalSection(
          "✋ Direito de greve",
          `
            <p>
              É assegurado o direito de greve, competindo aos
              trabalhadores decidir sobre a oportunidade de
              exercê-lo e sobre os interesses que devam por
              meio dele defender.
            </p>

            <p>
              A lei define os serviços essenciais e dispõe
              sobre o atendimento das necessidades inadiáveis
              da comunidade.
            </p>
          `
        )
      ],

      [
        constitutionalCard(
          "Transporte é direito social?",
          "Sim. O transporte integra o rol do artigo 6º."
        ),

        constitutionalCard(
          "Qual é a idade mínima geral para o trabalho?",
          "Dezesseis anos, salvo aprendizagem a partir dos quatorze."
        ),

        constitutionalCard(
          "Menor de dezoito pode realizar trabalho perigoso?",
          "Não. Trabalho noturno, perigoso ou insalubre é proibido a menores de dezoito anos."
        ),

        constitutionalCard(
          "A filiação sindical é obrigatória?",
          "Não. Ninguém é obrigado a filiar-se ou permanecer filiado."
        ),

        constitutionalCard(
          "Quem decide a oportunidade da greve?",
          "Os trabalhadores, observadas as normas constitucionais e legais."
        )
      ],

      [
        constitutionalQuestion(
          "Assinale um direito social do artigo 6º:",
          [
            "Livre concorrência.",
            "Moradia.",
            "Concessão de asilo político.",
            "Pluralismo político."
          ],
          1,
          "Moradia integra o rol dos direitos sociais."
        ),

        constitutionalQuestion(
          "A aprendizagem é permitida a partir de:",
          [
            "Doze anos.",
            "Quatorze anos.",
            "Quinze anos.",
            "Dezoito anos."
          ],
          1,
          "A Constituição admite aprendizagem a partir dos quatorze anos."
        ),

        constitutionalQuestion(
          "O trabalho noturno, perigoso ou insalubre é proibido para menores de:",
          [
            "Quatorze anos.",
            "Dezesseis anos.",
            "Dezoito anos.",
            "Vinte e um anos."
          ],
          2,
          "A proibição alcança menores de dezoito anos."
        ),

        constitutionalQuestion(
          "A filiação a sindicato:",
          [
            "É obrigatória para empregados públicos.",
            "É obrigatória para trabalhadores urbanos.",
            "É livre, não podendo haver obrigação de filiação ou permanência.",
            "Depende de autorização judicial."
          ],
          2,
          "A Constituição assegura liberdade de filiação sindical."
        ),

        constitutionalQuestion(
          "O direito de greve é exercido:",
          [
            "Somente com autorização judicial.",
            "Conforme decisão dos trabalhadores e regras aplicáveis.",
            "Somente por servidores militares.",
            "Sem qualquer limite relativo a serviços essenciais."
          ],
          1,
          "Os trabalhadores decidem a oportunidade, e a lei disciplina serviços essenciais e abusos."
        ),

        constitutionalQuestion(
          "Assinale um direito previsto no artigo 7º:",
          [
            "Férias anuais com adicional de um terço.",
            "Asilo político.",
            "Plebiscito obrigatório anual.",
            "Vitaliciedade automática."
          ],
          0,
          "As férias com pelo menos um terço a mais integram os direitos dos trabalhadores."
        )
      ]
    ),

  "Direito Constitucional::Nacionalidade e direitos políticos":
    constitutionalLesson(
      "Diferenciar brasileiros natos e naturalizados, reconhecer cargos privativos de natos e compreender alistamento, voto, elegibilidade e perda ou suspensão de direitos políticos.",

      [
        constitutionalSection(
          "🇧🇷 Brasileiros natos",
          `
            <p>
              A Constituição define hipóteses de nacionalidade
              brasileira originária, relacionadas ao nascimento
              no território brasileiro ou à filiação e aos
              requisitos constitucionais aplicáveis aos nascidos
              no exterior.
            </p>

            <p>
              O brasileiro nato possui proteção contra extradição
              e pode ocupar os cargos que a Constituição reserva
              exclusivamente aos natos.
            </p>
          `
        ),

        constitutionalSection(
          "📄 Brasileiros naturalizados",
          `
            <p>
              A naturalização depende do cumprimento dos requisitos
              previstos na Constituição e na lei.
            </p>

            <p>
              A lei não pode estabelecer distinção entre brasileiros
              natos e naturalizados, salvo nos casos previstos pela
              própria Constituição.
            </p>
          `
        ),

        constitutionalSection(
          "🏛️ Cargos privativos de brasileiro nato",
          `
            <ul>
              <li>Presidente e Vice-Presidente da República;</li>
              <li>Presidente da Câmara dos Deputados;</li>
              <li>Presidente do Senado Federal;</li>
              <li>Ministro do Supremo Tribunal Federal;</li>
              <li>carreira diplomática;</li>
              <li>oficial das Forças Armadas;</li>
              <li>Ministro de Estado da Defesa.</li>
            </ul>
          `
        ),

        constitutionalSection(
          "🗳️ Alistamento e voto",
          `
            <p>
              O voto é obrigatório para maiores de dezoito anos.
            </p>

            <p>É facultativo para:</p>

            <ul>
              <li>analfabetos;</li>
              <li>maiores de setenta anos;</li>

              <li>
                maiores de dezesseis e menores de dezoito anos.
              </li>
            </ul>

            <p>
              Estrangeiros e conscritos durante o serviço militar
              obrigatório não podem alistar-se como eleitores.
            </p>
          `
        ),

        constitutionalSection(
          "✅ Elegibilidade e direitos políticos",
          `
            <p>
              Entre as condições de elegibilidade estão nacionalidade
              brasileira, pleno exercício dos direitos políticos,
              alistamento eleitoral, domicílio eleitoral, filiação
              partidária e idade mínima do cargo.
            </p>

            <p>
              É vedada a cassação de direitos políticos. A perda ou
              suspensão somente ocorre nas hipóteses constitucionais.
            </p>
          `
        )
      ],

      [
        constitutionalCard(
          "A lei pode criar livremente distinções entre nato e naturalizado?",
          "Não. Somente a própria Constituição pode prever distinções."
        ),

        constitutionalCard(
          "Ministro do STF deve ser brasileiro nato?",
          "Sim. É cargo privativo de brasileiro nato."
        ),

        constitutionalCard(
          "O voto é facultativo entre dezesseis e dezoito anos?",
          "Sim, para maiores de dezesseis e menores de dezoito."
        ),

        constitutionalCard(
          "Estrangeiro pode alistar-se como eleitor?",
          "Não."
        ),

        constitutionalCard(
          "A Constituição permite cassação de direitos políticos?",
          "Não. Permite perda ou suspensão apenas nas hipóteses constitucionais."
        )
      ],

      [
        constitutionalQuestion(
          "Assinale um cargo privativo de brasileiro nato:",
          [
            "Governador de Estado.",
            "Prefeito.",
            "Ministro do Supremo Tribunal Federal.",
            "Deputado estadual."
          ],
          2,
          "Ministro do STF é cargo reservado a brasileiro nato."
        ),

        constitutionalQuestion(
          "O voto é facultativo para:",
          [
            "Todos os maiores de dezoito anos.",
            "Maiores de setenta anos.",
            "Estrangeiros residentes.",
            "Conscritos durante o serviço militar obrigatório."
          ],
          1,
          "Maiores de setenta anos possuem voto facultativo."
        ),

        constitutionalQuestion(
          "Não podem alistar-se como eleitores:",
          [
            "Brasileiros naturalizados.",
            "Maiores de setenta anos.",
            "Estrangeiros e conscritos durante o serviço militar obrigatório.",
            "Analfabetos."
          ],
          2,
          "Estrangeiros e conscritos são constitucionalmente inalistáveis."
        ),

        constitutionalQuestion(
          "A diferença entre brasileiro nato e naturalizado:",
          [
            "Pode ser criada por qualquer lei ordinária.",
            "Só pode existir nos casos previstos pela Constituição.",
            "Foi totalmente abolida pela Constituição.",
            "Depende de decreto estadual."
          ],
          1,
          "A própria Constituição define as distinções admitidas."
        ),

        constitutionalQuestion(
          "É condição de elegibilidade:",
          [
            "Filiação partidária.",
            "Ser necessariamente brasileiro nato.",
            "Ser maior de setenta anos.",
            "Não possuir domicílio eleitoral."
          ],
          0,
          "A filiação partidária integra as condições constitucionais de elegibilidade."
        ),

        constitutionalQuestion(
          "A cassação de direitos políticos:",
          [
            "É permitida por decisão administrativa.",
            "É vedada pela Constituição.",
            "É obrigatória em todo crime.",
            "Pode ser decretada por prefeito."
          ],
          1,
          "A Constituição veda a cassação e admite perda ou suspensão nas hipóteses previstas."
        )
      ]
    ),

  "Direito Constitucional::Organização do Estado":
    constitutionalLesson(
      "Compreender a organização político-administrativa brasileira, a autonomia dos entes federativos, as características do Distrito Federal e noções de intervenção.",

      [
        constitutionalSection(
          "🗺️ Entes federativos",
          `
            <p>
              A organização político-administrativa compreende
              União, Estados, Distrito Federal e Municípios,
              todos autônomos nos termos da Constituição.
            </p>

            <p>
              A autonomia envolve capacidades de organização,
              governo, administração e legislação dentro das
              competências constitucionais.
            </p>
          `
        ),

        constitutionalSection(
          "🏛️ União e Territórios",
          `
            <p>
              A União integra a Federação e exerce as competências
              atribuídas pela Constituição. Brasília é a Capital
              Federal.
            </p>

            <p>
              Os Territórios Federais integram a União e não são
              entes federativos autônomos. Sua criação, transformação
              ou reintegração depende da disciplina constitucional
              e de lei complementar.
            </p>
          `
        ),

        constitutionalSection(
          "🏙️ Estados, Municípios e Distrito Federal",
          `
            <p>
              Estados organizam-se por suas Constituições e leis.
              Municípios regem-se por lei orgânica.
            </p>

            <p>
              O Distrito Federal rege-se por lei orgânica e não
              pode ser dividido em Municípios. Ele acumula
              competências legislativas reservadas aos Estados
              e aos Municípios, conforme a Constituição.
            </p>
          `
        ),

        constitutionalSection(
          "📌 Criação e alteração territorial",
          `
            <p>
              Alterações envolvendo Estados exigem consulta à
              população diretamente interessada por plebiscito
              e aprovação do Congresso Nacional por lei complementar.
            </p>

            <p>
              A criação, incorporação, fusão e desmembramento
              de Municípios obedecem às exigências constitucionais,
              incluindo consulta prévia às populações envolvidas.
            </p>
          `
        ),

        constitutionalSection(
          "⚠️ Intervenção",
          `
            <p>
              A regra é a não intervenção: a União não intervém
              nos Estados nem no Distrito Federal, e o Estado não
              intervém nos Municípios, salvo nas hipóteses
              expressamente previstas pela Constituição.
            </p>

            <p>
              A intervenção é medida excepcional voltada à
              preservação da Federação e da ordem constitucional.
            </p>
          `
        )
      ],

      [
        constitutionalCard(
          "Quais são os entes federativos?",
          "União, Estados, Distrito Federal e Municípios."
        ),

        constitutionalCard(
          "Território Federal é ente federativo?",
          "Não. Ele integra a União."
        ),

        constitutionalCard(
          "Qual é a capital federal?",
          "Brasília."
        ),

        constitutionalCard(
          "O Distrito Federal pode ser dividido em Municípios?",
          "Não."
        ),

        constitutionalCard(
          "A intervenção é regra ou exceção?",
          "É medida excepcional, cabível apenas nas hipóteses constitucionais."
        )
      ],

      [
        constitutionalQuestion(
          "A organização político-administrativa compreende:",
          [
            "União, Estados e Territórios apenas.",
            "União, Estados, Distrito Federal e Municípios.",
            "Estados, Municípios e comarcas.",
            "União, regiões e províncias."
          ],
          1,
          "O artigo 18 enumera União, Estados, Distrito Federal e Municípios."
        ),

        constitutionalQuestion(
          "Os Territórios Federais:",
          [
            "São Municípios especiais.",
            "São entes federativos autônomos.",
            "Integram a União.",
            "Integram necessariamente um Estado."
          ],
          2,
          "A Constituição estabelece que os Territórios integram a União."
        ),

        constitutionalQuestion(
          "O Distrito Federal:",
          [
            "Pode ser dividido em Municípios.",
            "Não pode ser dividido em Municípios.",
            "É um Território Federal.",
            "Não possui autonomia."
          ],
          1,
          "A Constituição proíbe a divisão do Distrito Federal em Municípios."
        ),

        constitutionalQuestion(
          "Os Municípios regem-se por:",
          [
            "Constituição municipal.",
            "Lei orgânica.",
            "Decreto federal.",
            "Regimento do Senado."
          ],
          1,
          "A organização municipal ocorre por lei orgânica."
        ),

        constitutionalQuestion(
          "Alteração territorial de Estados exige, entre outros requisitos:",
          [
            "Somente decreto presidencial.",
            "Plebiscito e lei complementar do Congresso Nacional.",
            "Apenas lei estadual.",
            "Decisão de prefeito."
          ],
          1,
          "A Constituição exige consulta popular e lei complementar do Congresso."
        ),

        constitutionalQuestion(
          "A intervenção federativa é:",
          [
            "Regra comum de administração.",
            "Medida excepcional prevista pela Constituição.",
            "Decisão livre de qualquer autoridade.",
            "Obrigatória todos os anos."
          ],
          1,
          "A intervenção somente pode ocorrer nas hipóteses constitucionais."
        )
      ]
    ),

  "Direito Constitucional::Segurança Pública — art. 144":
    constitutionalLesson(
      "Identificar os órgãos de segurança pública previstos no artigo 144 e compreender suas funções constitucionais básicas.",

      [
        constitutionalSection(
          "🛡️ Conceito constitucional",
          `
            <p>
              A segurança pública é dever do Estado, direito
              e responsabilidade de todos. É exercida para a
              preservação da ordem pública e da incolumidade
              das pessoas e do patrimônio.
            </p>
          `
        ),

        constitutionalSection(
          "📌 Órgãos do artigo 144",
          `
            <ul>
              <li>polícia federal;</li>
              <li>polícia rodoviária federal;</li>
              <li>polícia ferroviária federal;</li>
              <li>polícias civis;</li>

              <li>
                polícias militares e corpos de bombeiros militares;
              </li>

              <li>
                polícias penais federal, estaduais e distrital.
              </li>
            </ul>
          `
        ),

        constitutionalSection(
          "🔎 Polícia Federal, PRF e PFF",
          `
            <p>
              A Polícia Federal exerce funções constitucionais
              relacionadas, entre outras, à apuração de infrações
              de interesse da União, prevenção e repressão ao
              tráfico ilícito e funções de polícia marítima,
              aeroportuária e de fronteiras.
            </p>

            <p>
              Ela exerce com exclusividade as funções de polícia
              judiciária da União.
            </p>

            <p>
              A Polícia Rodoviária Federal patrulha ostensivamente
              as rodovias federais. A Polícia Ferroviária Federal
              patrulha ostensivamente as ferrovias federais.
            </p>
          `
        ),

        constitutionalSection(
          "🚓 Polícias Civis e Militares",
          `
            <p>
              Às polícias civis incumbem, ressalvada a competência
              da União, as funções de polícia judiciária e a
              apuração de infrações penais, exceto as militares.
            </p>

            <p>
              Às polícias militares cabem a polícia ostensiva
              e a preservação da ordem pública.
            </p>

            <p>
              Aos corpos de bombeiros militares cabem, além das
              atribuições legais, atividades de defesa civil.
            </p>
          `
        ),

        constitutionalSection(
          "🔐 Polícias penais e guardas municipais",
          `
            <p>
              Às polícias penais cabe a segurança dos
              estabelecimentos penais, nos termos constitucionais.
            </p>

            <p>
              Os Municípios podem constituir guardas municipais
              destinadas à proteção de seus bens, serviços e
              instalações, conforme a lei.
            </p>
          `
        ),

        constitutionalSection(
          "⚠️ Organização estadual",
          `
            <p>
              Polícias civis, polícias militares, corpos de
              bombeiros militares e polícias penais estaduais
              e distrital subordinam-se aos Governadores dos
              Estados, do Distrito Federal e dos Territórios,
              conforme o texto constitucional.
            </p>
          `
        )
      ],

      [
        constitutionalCard(
          "Segurança pública é responsabilidade apenas do Estado?",
          "Não. É dever do Estado, direito e responsabilidade de todos."
        ),

        constitutionalCard(
          "Quem exerce exclusivamente a polícia judiciária da União?",
          "A Polícia Federal."
        ),

        constitutionalCard(
          "Qual é a função constitucional básica da PM?",
          "Polícia ostensiva e preservação da ordem pública."
        ),

        constitutionalCard(
          "Quem apura infrações penais comuns nos Estados?",
          "As polícias civis, ressalvada a competência da União e excetuadas as infrações militares."
        ),

        constitutionalCard(
          "Qual é a função das polícias penais?",
          "A segurança dos estabelecimentos penais."
        )
      ],

      [
        constitutionalQuestion(
          "A segurança pública é:",
          [
            "Dever exclusivo dos Municípios.",
            "Dever do Estado, direito e responsabilidade de todos.",
            "Responsabilidade exclusiva das polícias militares.",
            "Atividade privada sem previsão constitucional."
          ],
          1,
          "Essa é a definição inicial do artigo 144."
        ),

        constitutionalQuestion(
          "Exerce com exclusividade a polícia judiciária da União:",
          [
            "Polícia Rodoviária Federal.",
            "Polícia Federal.",
            "Polícia Civil.",
            "Polícia Militar."
          ],
          1,
          "A exclusividade é atribuída à Polícia Federal."
        ),

        constitutionalQuestion(
          "Às polícias militares cabem:",
          [
            "Polícia judiciária da União.",
            "Apuração exclusiva de todos os crimes.",
            "Polícia ostensiva e preservação da ordem pública.",
            "Patrulhamento exclusivo de rodovias federais."
          ],
          2,
          "Essa é a missão constitucional das polícias militares."
        ),

        constitutionalQuestion(
          "Às polícias civis incumbem:",
          [
            "Polícia ostensiva e defesa civil.",

            "Polícia judiciária e apuração de infrações penais, exceto militares, ressalvada a competência da União.",

            "Patrulhamento das ferrovias federais.",

            "Segurança exclusiva dos estabelecimentos penais federais."
          ],
          1,
          "O artigo 144 atribui essas funções às polícias civis."
        ),

        constitutionalQuestion(
          "A Polícia Rodoviária Federal destina-se ao:",
          [
            "Patrulhamento ostensivo das rodovias federais.",
            "Patrulhamento das rodovias municipais.",
            "Policiamento judiciário estadual.",
            "Controle dos estabelecimentos penais."
          ],
          0,
          "A PRF realiza patrulhamento ostensivo das rodovias federais."
        ),

        constitutionalQuestion(
          "Os Municípios podem constituir guardas municipais para:",
          [
            "Exercer com exclusividade a polícia judiciária da União.",
            "Proteger seus bens, serviços e instalações.",
            "Substituir obrigatoriamente as polícias civis.",
            "Comandar as Forças Armadas."
          ],
          1,
          "Essa é a finalidade constitucional indicada para as guardas municipais."
        )
      ]
    ),

  "Direito Constitucional::Administração Pública":
    constitutionalLesson(
      "Compreender os princípios da Administração Pública, as regras básicas de acesso a cargos, acumulação, responsabilidade, concurso e estabilidade.",

      [
        constitutionalSection(
          "📖 Princípios expressos",
          `
            <p>
              A Administração Pública direta e indireta de
              qualquer dos Poderes da União, dos Estados, do
              Distrito Federal e dos Municípios obedece aos
              princípios de legalidade, impessoalidade,
              moralidade, publicidade e eficiência.
            </p>

            <p>
              A sigla mais usada para memorização é
              <strong>LIMPE</strong>.
            </p>
          `
        ),

        constitutionalSection(
          "📝 Concurso e acesso a cargos",
          `
            <p>
              Cargos, empregos e funções públicas são acessíveis
              aos brasileiros que preencham os requisitos legais
              e, na forma da lei, aos estrangeiros.
            </p>

            <p>
              A investidura em cargo ou emprego público depende
              de aprovação prévia em concurso público, ressalvadas
              as nomeações para cargo em comissão declarado em lei
              de livre nomeação e exoneração.
            </p>
          `
        ),

        constitutionalSection(
          "⏳ Validade e prioridade",
          `
            <p>
              O prazo de validade do concurso público é de até
              dois anos, prorrogável uma vez por igual período.
            </p>

            <p>
              Durante o prazo previsto no edital, o aprovado possui
              prioridade sobre novos concursados para assumir cargo
              ou emprego na carreira.
            </p>
          `
        ),

        constitutionalSection(
          "⚖️ Acumulação remunerada",
          `
            <p>
              A regra é a vedação de acumulação remunerada
              de cargos públicos.
            </p>

            <p>
              Havendo compatibilidade de horários, a Constituição
              admite:
            </p>

            <ul>
              <li>dois cargos de professor;</li>

              <li>
                um cargo de professor com outro técnico ou científico;
              </li>

              <li>
                dois cargos ou empregos privativos de profissionais
                de saúde com profissões regulamentadas.
              </li>
            </ul>
          `
        ),

        constitutionalSection(
          "📢 Publicidade e responsabilidade",
          `
            <p>
              A publicidade institucional deve possuir caráter
              educativo, informativo ou de orientação social,
              sem promoção pessoal de autoridades ou servidores.
            </p>

            <p>
              Pessoas jurídicas de direito público e prestadoras
              de serviço público respondem pelos danos que seus
              agentes causarem a terceiros, assegurado direito
              de regresso em caso de dolo ou culpa.
            </p>
          `
        ),

        constitutionalSection(
          "🛡️ Estabilidade",
          `
            <p>
              São estáveis após três anos de efetivo exercício
              os servidores nomeados para cargo de provimento
              efetivo em virtude de concurso público, observada
              a avaliação especial de desempenho.
            </p>

            <p>
              O servidor estável somente perde o cargo nas
              hipóteses constitucionais, como sentença judicial
              transitada em julgado, processo administrativo
              com ampla defesa ou avaliação periódica de
              desempenho na forma legal.
            </p>
          `
        )
      ],

      [
        constitutionalCard(
          "O que significa LIMPE?",
          "Legalidade, impessoalidade, moralidade, publicidade e eficiência."
        ),

        constitutionalCard(
          "Qual é o prazo máximo inicial de validade de um concurso?",
          "Até dois anos, prorrogável uma vez por igual período."
        ),

        constitutionalCard(
          "Cargo em comissão exige concurso?",
          "Não, quando declarado em lei de livre nomeação e exoneração."
        ),

        constitutionalCard(
          "Quando é possível acumular dois cargos de professor?",
          "Quando houver compatibilidade de horários."
        ),

        constitutionalCard(
          "Quando o servidor efetivo adquire estabilidade?",
          "Após três anos de efetivo exercício, com os requisitos constitucionais."
        )
      ],

      [
        constitutionalQuestion(
          "A sigla LIMPE representa:",
          [
            "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
            "Lealdade, igualdade, mérito, prudência e economia.",
            "Legalidade, individualidade, moralidade, privacidade e eficácia.",
            "Liberdade, impessoalidade, motivação, publicidade e efetividade."
          ],
          0,
          "Esses são os cinco princípios expressos no caput do artigo 37."
        ),

        constitutionalQuestion(
          "A investidura em cargo público depende, em regra, de:",
          [
            "Indicação política.",
            "Concurso público.",
            "Sorteio.",
            "Autorização sindical."
          ],
          1,
          "O concurso é a regra, ressalvados cargos em comissão."
        ),

        constitutionalQuestion(
          "O prazo de validade do concurso é de:",
          [
            "Até um ano, sem prorrogação.",
            "Até dois anos, prorrogável uma vez por igual período.",
            "Cinco anos obrigatoriamente.",
            "Prazo ilimitado."
          ],
          1,
          "Essa é a regra prevista no artigo 37."
        ),

        constitutionalQuestion(
          "É permitida, com compatibilidade de horários, a acumulação de:",
          [
            "Quaisquer três cargos públicos.",
            "Dois cargos de professor.",
            "Dois cargos administrativos comuns.",
            "Um número ilimitado de cargos da saúde."
          ],
          1,
          "Dois cargos de professor constituem exceção constitucional."
        ),

        constitutionalQuestion(
          "A publicidade institucional pode:",
          [
            "Promover pessoalmente autoridades.",
            "Ter caráter educativo, informativo ou de orientação social.",
            "Usar nomes e imagens para autopromoção sem limite.",
            "Ser secreta em todos os casos."
          ],
          1,
          "A Constituição proíbe promoção pessoal e permite finalidade educativa, informativa ou de orientação social."
        ),

        constitutionalQuestion(
          "A estabilidade do servidor efetivo é adquirida após:",
          [
            "Um ano de exercício.",
            "Dois anos de exercício.",
            "Três anos de efetivo exercício e cumprimento dos requisitos constitucionais.",
            "A posse, automaticamente."
          ],
          2,
          "A Constituição estabelece três anos e avaliação especial de desempenho."
        )
      ]
    )
});
