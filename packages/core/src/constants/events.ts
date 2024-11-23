import { Event } from '../event'
import { Id } from '../shared'

const events: Event[] = [
    {
        id: '6ed382d1-f65c-41c0-a93a-79037c4c8165',
        alias: 'frescobol-estaleirinho',
        password: 'senha123',
        name: 'Jogo de Frescobol de dupla',
        date: new Date('2024-12-01T10:00:00Z'),
        location: 'Estaleirinho canto sul, Balneário Camboriú',
        description:
            'Jogo para iniciantes e profissionais',
        image: 'https://s2-ge.glbimg.com/R5VYdsZMIdYO96v5AFxCC0DSa8w=/0x0:1253x836/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/0/K/qBCOqlSx6D1YB4gNvarg/frescobol.jpg',
        imageBackground:
            'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
        expectedAudience: 200,
        inviteds: [
            {
                id: 'f3083faa-bf61-4f5a-a555-117653f38fe5',
                name: 'Alice Silva',
                email: 'alice@example.com',
                confirmed: true,
                hasCompanion: true,
                qtCompanions: 1,
            },
            {
                id: 'b4dd3765-e173-4383-8fc5-933e546d98bc',
                name: 'Carlos Pereira',
                email: 'carlos@example.com',
                confirmed: false,
                hasCompanion: false,
                qtCompanions: 0,
            },
            {
                id: '2c4797ff-292c-421b-88df-51f72ce73446',
                name: 'Beatriz Lima',
                email: 'beatriz@example.com',
                confirmed: true,
                hasCompanion: true,
                qtCompanions: 2,
            },
        ],
    },
    {
        id: '8db9932c-dd47-471a-b03b-a9d46dd0f3ff',
        alias: 'evento-js-avancado',
        password: 'js2024',
        name: 'Workshop Avançado de JavaScript',
        date: new Date('2024-11-20T15:00:00Z'),
        location: 'Rio de Janeiro, RJ',
        description: 'Um workshop avançado para programadores JavaScript.',
        image: 'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
        imageBackground:
            'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
        expectedAudience: 100,
        inviteds: [
            {
                id: '670e7ee3-58c9-4dc7-b702-b2aa124bc2f5',
                name: 'Eduardo Santos',
                email: 'eduardo@example.com',
                confirmed: true,
                hasCompanion: false,
                qtCompanions: 0,
            },
            {
                id: 'a58922ed-b07d-44d5-8e34-80a0d8a22c85',
                name: 'Fernanda Costa',
                email: 'fernanda@example.com',
                confirmed: true,
                hasCompanion: true,
                qtCompanions: 1,
            },
        ],
    },
    {
        id: '8e2e003a-66d5-40f4-ae01-4c01a2394772',
        alias: 'evento-dev-frontend',
        password: 'front123',
        name: 'Bootcamp de Desenvolvimento Frontend',
        date: new Date('2024-11-15T09:00:00Z'),
        location: 'Belo Horizonte, MG',
        description: 'Aprenda a criar interfaces incríveis e responsivas.',
        image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
        imageBackground:
            'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
        expectedAudience: 150,
        inviteds: [
            {
                id: '784655cb-3e31-46c6-861d-f0cca2c99555',
                name: 'Gabriela Rocha',
                email: 'gabriela@example.com',
                confirmed: true,
                hasCompanion: true,
                qtCompanions: 1,
            },
            {
                id: 'ff84d315-1bbd-472a-a47b-fb5a12d49a1c',
                name: 'Hugo Nogueira',
                email: 'hugo@example.com',
                confirmed: false,
                hasCompanion: false,
                qtCompanions: 0,
            },
            {
                id: 'b2b8b59a-5a0e-4d25-a524-2c2038b3260e',
                name: 'Isabela Martins',
                email: 'isabela@example.com',
                confirmed: true,
                hasCompanion: false,
                qtCompanions: 0,
            },
        ],
    },
    {
        id: 'cc761bb7-e36b-4d34-93d2-b6fb0bcc56a2',
        alias: 'casamento-alberto-marina',
        password: 'casamento2024',
        name: 'Casamento do Alberto e Marina',
        date: new Date('2024-11-25T16:00:00Z'),
        location: 'Florianópolis, SC',
        description:
            'Celebração do casamento de Alberto e Marina com amigos e familiares.',
        image: 'https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg',
        imageBackground:
            'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
        expectedAudience: 150,
        inviteds: [
            {
                id: 'd17ef3e1-17c3-48bb-89e1-930a61356e1b',
                name: 'Bruno Cardoso',
                email: 'bruno@example.com',
                confirmed: true,
                hasCompanion: true,
                qtCompanions: 1,
            },
            {
                id: 'ec4e7273-c592-40ea-ac6e-467bc56c6f2f',
                name: 'Carla Mendes',
                email: 'carla@example.com',
                confirmed: true,
                hasCompanion: false,
                qtCompanions: 0,
            },
        ],
    },
    {
        id: 'c090e64a-e86e-4519-ba46-0d031aa9a59a',
        alias: 'aniversario-joao',
        password: 'joao2024',
        name: 'Aniversário do João - 30 Anos',
        date: new Date('2024-12-05T18:00:00Z'),
        location: 'Curitiba, PR',
        description:
            'Comemoração dos 30 anos de João com amigos próximos e familiares.',
        image: 'https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg',
        imageBackground:
            'https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg',
        expectedAudience: 80,
        inviteds: [
            {
                id: 'aa98b43d-7882-4d49-924b-8ddc5bb09b6a',
                name: 'Maria Souza',
                email: 'maria@example.com',
                confirmed: true,
                hasCompanion: true,
                qtCompanions: 2,
            },
            {
                id: '34d2e77e-2d4b-4085-97e9-e3febabd2733',
                name: 'José Almeida',
                email: 'jose@example.com',
                confirmed: false,
                hasCompanion: false,
                qtCompanions: 0,
            },
        ],
    },
    {
        id: '8df4b81d-0d8f-4f78-b85c-d33be785db89',
        alias: 'inauguracao-loja-estrela',
        password: 'estrela2024',
        name: 'Inauguração da Loja Estrela',
        date: new Date('2024-12-10T09:00:00Z'),
        location: 'Porto Alegre, RS',
        description:
            'Evento de inauguração da nova loja Estrela com brindes e promoções.',
        image: 'https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png',
        imageBackground:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s',
        expectedAudience: 300,
        inviteds: [
            {
                id: 'd5dcbbc4-f2e2-4577-9937-fee8761d5677',
                name: 'Cláudia Lima',
                email: 'claudia@example.com',
                confirmed: true,
                hasCompanion: true,
                qtCompanions: 3,
            },
            {
                id: '360b85e6-0526-4104-a38f-63178d7dbe4b',
                name: 'Ricardo Barbosa',
                email: 'ricardo@example.com',
                confirmed: true,
                hasCompanion: false,
                qtCompanions: 0,
            },
        ],
    },
    {
        id: '4e1ff7ed-b5c1-4c8a-9eb9-5dbc134fe492',
        alias: 'reuniao-familia-oliveira',
        password: 'familia2024',
        name: 'Reunião da Família Oliveira',
        date: new Date('2024-12-15T12:00:00Z'),
        location: 'Salvador, BA',
        description: 'Reunião de fim de ano da família Oliveira.',
        image: 'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
        imageBackground:
            'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
        expectedAudience: 50,
        inviteds: [
            {
                id: '1e2319a8-b1ae-49d1-93c1-3384cbcb3677',
                name: 'Thiago Oliveira',
                email: 'thiago@example.com',
                confirmed: true,
                hasCompanion: true,
                qtCompanions: 4,
            },
            {
                id: 'ca0eac29-25e8-48b1-9596-a57e6652a1bc',
                name: 'Letícia Oliveira',
                email: 'leticia@example.com',
                confirmed: true,
                hasCompanion: false,
                qtCompanions: 0,
            },
        ],
    },
]

export default events


