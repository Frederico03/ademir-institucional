export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    sku?: string;
    highlight?: string;
    characteristics?: string[];
    brand?: string;
    category?: string;
}

export interface Segment {
    title: string;
    brand: string;
    description: string;
    bannerImg: string;
    features: string[];
    categories: string[];
    products: Product[];
}

export const segments: Record<string, Segment> = {
    higiene: {
        title: 'HIGIENE & QUÍMICOS',
        brand: 'Spartan',
        description: 'EQUIPAMENTO PROFISSIONAL PARA LIMPEZA PERFEITA',
        bannerImg: '/images/clean.webp',
        features: [
            'Produtos específicos para cada etapa de higiene',
            'Resultados profissionais em menos tempo',
            'Fórmulas concentradas de alta performance',
            'Sustentabilidade e segurança certificada'
        ],
        categories: ['Detergentes', 'Desinfetantes', 'Tratamento de Pisos', 'Higiene de Cozinha'],
        products: [
            { 
                id: 1, 
                name: 'Peroxy 4D', 
                description: 'Detergente e desinfetante de nível intermediário hospitalar de alto desempenho. Sua formulação exclusiva mistura Quaternário de Amônio de 5ª geração e Peróxido de Hidrogênio, potencializando a ação de desinfecção em um amplo espectro de microrganismos.', 
                image: '/images/spartan/peroxy_4d_spartan.webp', 
                brand: 'Spartan', 
                category: 'Higiene & Químicos',
                highlight: 'Desinfetante Hospitalar',
                characteristics: [
                    'Aplicações: Ideal para superfícies fixas e artigos não críticos em hospitais, clínicas e áreas de saúde.',
                    'Diluição: Até 1:25 (Intermediário), 1:100 (Fixas), 1:250 (Geral).',
                    'pH: 2,50.',
                    'Fragrância: Odor Característico.'
                ]
            },
            { 
                id: 2, 
                name: 'Clean by Peroxy', 
                description: 'Desinfetante e limpador de uso geral à base de Peróxido de Hidrogênio. Combina o poder do oxigênio ativo com tensoativos de última geração para garantir excelente performance de limpeza e desinfecção em diversas superfícies.', 
                image: '/images/spartan/clean_by_peroxy_spartan.webp', 
                brand: 'Spartan', 
                category: 'Higiene & Químicos',
                highlight: 'Limpador de Uso Geral',
                characteristics: [
                    'Destaque: Possui certificação de rótulo ecológico ABNT (Ecológico e Biodegradável).',
                    'Aplicações: Hospitais, clínicas, indústrias e limpeza profissional em geral.',
                    'Diluição: Até 1:200.',
                    'pH: 3,5.',
                    'Fragrância: Floral Cítrico.'
                ]
            },
            { 
                id: 3, 
                name: 'Peroxy Flot', 
                description: 'Flotador concentrado à base de peróxido de hidrogênio, ideal para limpeza e alvejamento de tecidos. A ação de flotação desprende a sujeira das fibras, enquanto o peróxido auxilia na remoção de manchas orgânicas.', 
                image: '/images/spartan/peroxy_flot_spartan.webp', 
                brand: 'Spartan', 
                category: 'Higiene & Químicos',
                highlight: 'Flotador Concentrado',
                characteristics: [
                    'Aplicações: Suede, linho, algodão, chenille, estofados, carpetes e tecidos em geral.',
                    'Diluição: Até 1:200.',
                    'pH: 3,2.',
                    'Fragrância: Odor Característico.'
                ]
            },
            { 
                id: 4, 
                name: 'Xtraction II', 
                description: 'Limpador de baixa espumação destinado à limpeza profunda de carpetes e estofados. Desenvolvido para uso em máquinas extratoras, penetra nas fibras para remover sujidades pesadas sem deixar resíduos.', 
                image: '/images/spartan/xtraction_ii_spartan.webp', 
                brand: 'Spartan', 
                category: 'Higiene & Químicos',
                highlight: 'Desengraxante e Limpador de Carpetes',
                characteristics: [
                    'Aplicações: Limpeza profissional de carpetes, tapetes e estofados com alto grau de sujidade.',
                    'Diluição: Até 1:60.',
                    'pH: 10,5.',
                    'Fragrância: Odor Característico.'
                ]
            },
            { 
                id: 20, 
                name: 'Yellow Pine', 
                description: 'Detergente desengraxante com alto poder de limpeza, formulado com óleo de pinho e tensoativos biodegradáveis. Remove óleos, graxas e fuligens sem danificar as superfícies laváveis.', 
                image: '/images/spartan/yellow_pine_spartan.webp', 
                brand: 'Spartan', 
                category: 'Higiene & Químicos',
                highlight: 'Desengraxante Universal',
                characteristics: [
                    'Aplicações: Pisos cerâmicos, paredes, plásticos, vidros, alumínio, tecidos e veículos.',
                    'Diluição: Até 1:400.',
                    'pH: 7,0.',
                    'Fragrância: Pinho.'
                ]
            },
            { 
                id: 21, 
                name: 'Metaquat', 
                description: 'Detergente desengordurante e desinfetante à base de Quaternário de Amônio. Projetado para dissolver e emulsificar gorduras animais e vegetais enquanto desinfeta a superfície em uma única operação.', 
                image: '/images/spartan/metaquat_spartan.webp', 
                brand: 'Spartan', 
                category: 'Higiene & Químicos',
                highlight: 'Desengordurante e Desinfetante',
                characteristics: [
                    'Aplicações: Cozinhas industriais, indústrias alimentícias e áreas de processamento de alimentos.',
                    'Diluição: 1:40 (Desinfetante) / 1:100 (Desengordurante).',
                    'pH: 13,0.',
                    'Fragrância: Odor Característico.'
                ]
            },
            { 
                id: 22, 
                name: 'IC-115', 
                description: 'Detergente desengordurante alcalino de alta performance para remoção de gorduras pesadas. Seguro para uso em diversos materiais, é uma ferramenta essencial para a manutenção de equipamentos de cocção.', 
                image: '/images/spartan/ic_115_spartan.webp', 
                brand: 'Spartan', 
                category: 'Higiene & Químicos',
                highlight: 'Desengordurante Alcalino',
                characteristics: [
                    'Aplicações: Coifas, aço inox, alumínio, fogões, fornos e pisos em áreas de alimentação.',
                    'Diluição: Até 1:60.',
                    'pH: 13,0.',
                    'Fragrância: Odor Característico.'
                ]
            },
            { 
                id: 23, 
                name: 'Sparquat', 
                description: 'Desinfetante neutro à base de Quaternário de Amônio. Oferece ação bactericida eficaz sem agredir as superfícies, sendo ideal para ambientes que exigem desinfecção constante.', 
                image: '/images/spartan/sparquat_spartan.webp', 
                brand: 'Spartan', 
                category: 'Higiene & Químicos',
                highlight: 'Desinfetante Neutro',
                characteristics: [
                    'Aplicações: Pisos, paredes, bancadas e utensílios em hospitais e indústrias.',
                    'Diluição: Até 1:130.',
                    'pH: 7,0.',
                    'Fragrância: Odor Característico.'
                ]
            },
            { 
                id: 24, 
                name: 'LC Multiuso', 
                description: 'Limpador multiuso concentrado para limpeza pesada e manutenção diária. Remove com facilidade gorduras, marcas de dedos e poeira de superfícies diversas.', 
                image: '/images/spartan/lc_multiuso_spartan.webp', 
                brand: 'Spartan', 
                category: 'Higiene & Químicos',
                highlight: 'Limpador Multiuso Concentrado',
                characteristics: [
                    'Aplicações: Fórmicas, mesas, vidros, superfícies metálicas e manutenção geral.',
                    'Diluição: Até 1:20.',
                    'pH: 10,5.',
                    'Fragrância: Cítrico.'
                ]
            },
            { 
                id: 25, 
                name: 'Solvfresh', 
                description: 'Detergente desengordurante especializado para a linha têxtil profissional. Eficaz na remoção de gorduras orgânicas e graxas em uniformes e enxovais de mesa.', 
                image: '/images/spartan/solvfresh_spartan.webp', 
                brand: 'Spartan', 
                category: 'Higiene & Químicos',
                highlight: 'Desengordurante Têxtil',
                characteristics: [
                    'Aplicações: Pré-lavagem e lavagem de roupas em restaurantes e indústrias.',
                    'Diluição: Até 10ml por kg de roupa seca.',
                    'pH: 9,0.',
                    'Fragrância: Odor Característico.'
                ]
            },
            { 
                id: 26, 
                name: 'Grill Cleaner', 
                description: 'Desincrustante alcalino potente para a remoção de gordura carbonizada. Sua ação rápida facilita a limpeza de equipamentos de alta temperatura.', 
                image: '/images/spartan/grill_cleaner_spartan.webp', 
                brand: 'Spartan', 
                category: 'Higiene & Químicos',
                highlight: 'Limpador de Fornos e Grelhas',
                characteristics: [
                    'Aplicações: Churrasqueiras, grelhas, fornos, chapas e exaustores.',
                    'Diluição: Até 1:20.',
                    'pH: 10,5.',
                    'Fragrância: Característico.'
                ]
            },
            { 
                id: 27, 
                name: 'Floor Power', 
                description: 'Detergente concentrado destinado à limpeza pesada de revestimentos porosos e lisos. Remove fuligens e sujidades do tempo com eficiência.', 
                image: '/images/spartan/floor_power_spartan.webp', 
                brand: 'Spartan', 
                category: 'Higiene & Químicos',
                highlight: 'Limpador de Pisos Pesados',
                characteristics: [
                    'Aplicações: Porcelanatos, granitos, mármores, ardósias e pedras em geral.',
                    'Diluição: Até 1:100.',
                    'pH: 10,5.',
                    'Fragrância: Característico.'
                ]
            },
            { 
                id: 28, 
                name: 'Sparfresh Eco', 
                description: 'Limpador e neutralizador de odores formulado com solventes de fonte renovável. Atua diretamente na causa do mau cheiro em áreas críticas.', 
                image: '/images/spartan/sparfresh_eco_spartan.webp', 
                brand: 'Spartan', 
                category: 'Higiene & Químicos',
                highlight: 'Neutralizador de Odores',
                characteristics: [
                    'Aplicações: Lixeiras, ralos, caixas de gordura e compactadores de lixo.',
                    'Diluição: Até 1:100.',
                    'pH: 9,0.',
                    'Fragrância: Odor Característico.'
                ]
            }
        ]
    },
    equipamentos: {
        title: 'EQUIPAMENTOS',
        brand: 'Kunber',
        description: 'TECNOLOGIA ERGONÔMICA PARA MÁXIMA EFICIÊNCIA',
        bannerImg: '/images/team-cleaning.webp',
        features: [
            'Ergonomia aplicada à limpeza profissional',
            'Redução de esforço e aumento de produtividade',
            'Durabilidade extrema em uso contínuo',
            'Inovação em acessórios de limpeza'
        ],
        categories: ['Mopas e Refis', 'Carros Funcionais', 'Lixeiras Seletivas', 'Acessórios'],
        products: [
            { 
                id: 5, 
                name: 'Carro Linha Utility com Duplo Fechamento e Tampa de Segurança', 
                description: 'Os carros duplo fechamento da Linha Utility oferecem mais ergonomia, organização e praticidade.', 
                image: '/images/kunber/carro_fechado_utility.webp',
                sku: '18241',
                brand: 'Kunber',
                category: 'Equipamentos',
                highlight: 'Carro Funcional Completo',
                characteristics: [
                    'Permite ciclos de limpeza mais eficientes e boas práticas de limpeza profissional.',
                    'Contém suporte para acessórios.',
                    'Contém porta com fechamento com imã e trava borboleta.',
                    'Contém porta baldes.',
                    'Contém 01 bolsa coletora.',
                    'Contém gaveta.'
                ]
            },
            { 
                id: 6, 
                name: 'Lite Spray Mop com Suporte Articulado', 
                description: 'Praticidade e ergonomia do LITE spray com suporte articulado mops de encaixe (linha ARTI).', 
                image: '/images/kunber/lite_spray_mop_articulado.webp', 
                sku: '17216, 17218, 17219, 17220',
                brand: 'Kunber',
                category: 'Equipamentos',
                highlight: 'Mop Articulado Ergônomico',
                characteristics: [
                    'Permite ciclos de limpeza mais eficientes e melhores resultados na qualidade e boas práticas de limpeza profissional.',
                    'Permite economia e redução no consumo de químicos e água em 70%.',
                    'Reservatório integrado de 600ml (interior do cabo) e nível de controle para abastecimento (realizado pela topo).',
                    'Spray com jato triplo para melhor dispersão da solução no piso.',
                    'Possui 4 opções de cores no globo para prevenir a contaminação cruzada.'
                ]
            },
            { 
                id: 7, 
                name: 'Rodo Articulado com Borracha de Silicone (Linha Arti)', 
                description: 'Oferece operação ergonômica e segura por não reter sujidades.', 
                image: '/images/kunber/rodo_articulado_silicone_25cm.webp', 
                sku: '13121',
                brand: 'Kunber',
                category: 'Equipamentos',
                highlight: 'Rodo de Silicone Profissional',
                characteristics: [
                    'Permite maior segurança e ergonomia na operação.',
                    'Não retém sujidades devido ao design articulado.',
                    'Lâmina refil de fácil troca (disponível em 25cm e 45cm).',
                    'Alumínio anodizado para maior durabilidade e facilidade de limpeza.'
                ]
            },
            { 
                id: 8, 
                name: 'Lavadora de Piso Blancus SC4500', 
                description: 'Lavadora de piso pedestre indicada para limpeza de manutenção para pisos internos e industriais.', 
                image: '/images/kunber/lavadora_blancus_sc4500.webp', 
                sku: '31101',
                brand: 'Kunber',
                category: 'Equipamentos',
                highlight: 'Lavadora de Pisos Pedestre',
                characteristics: [
                    'Versatilidade na limpeza de diferentes pisos: vinílicos, granitos, pedras, borracha, etc.',
                    'Bateria com até 4 horas de duração.',
                    'Painel de controle de fácil operação.',
                    'Capacidade: Tanque de água limpa (40L) e tanque de água coletada (37L).',
                    'Ideal para varejo, centros logísticos, aeroportos, escolas, hospitais e shopping centers.'
                ]
            },
            { 
                id: 13, 
                name: 'Carros Funcionais Abertos (Compacto)', 
                description: 'Os carros funcionais compactos oferecem mais ergonomia, organização e praticidade.', 
                image: '/images/kunber/carro_funcional_aberto_compacto.webp', 
                sku: '12112, 12113, 12114, 12115, 12116',
                brand: 'Kunber',
                category: 'Equipamentos',
                highlight: 'Carro Funcional Compacto',
                characteristics: [
                    'Permite ciclos de limpeza mais eficientes e boas práticas de limpeza profissional.',
                    'Contém suporte para acessórios.',
                    'Contém 01 bolsa coletora com tampa.',
                    'Disponível em várias cores de bolsa (Amarela, Azul, Verde, Vermelha, Preta) para controle de áreas.'
                ]
            },
            { 
                id: 14, 
                name: 'Lixeiras de Pedal (Preta e Branca)', 
                description: 'Lixeiras com design elegante e alta resistência para uso profissional.', 
                image: '/images/kunber/lixeira_pedal_preta_25l.webp', 
                sku: '20022',
                brand: 'Kunber',
                category: 'Equipamentos',
                highlight: 'Lixeira a Pedal Ergonômica',
                characteristics: [
                    'Produto patenteado no Brasil.',
                    'Capacidade: Disponível em 25 Litros e 50 Litros.',
                    'Pedal ergonômico que atende às recomendações de ergonomia no trabalho.',
                    'Cores: Preta e Branca (além de outras cores para coleta seletiva).'
                ]
            },
            { 
                id: 15, 
                name: 'Mop Microfibra Azul (Limpeza Úmida)', 
                description: 'Ideal para limpeza, acabamento e secagem com excelente absorção e alta durabilidade.', 
                image: '/images/kunber/mop_microfibra_umido_azul_borda_verde.webp', 
                sku: '17123',
                brand: 'Kunber',
                category: 'Equipamentos',
                highlight: 'Limpeza Úmida de Alta Absorção',
                characteristics: [
                    'Maior eficiência na limpeza úmida de pisos e remoção de bactérias.',
                    'Uso combinado com o Lite Spray Mop para maior produtividade.',
                    'Recomendado para escolas, restaurantes, hotéis e centros comerciais.',
                    'Fixação por velcro.'
                ]
            },
            { 
                id: 16, 
                name: 'Mop Microfibra Verde (Limpeza Seca)', 
                description: 'Mop de microfibra de alta durabilidade para limpeza a seco (pó) e remoção de bactérias.', 
                image: '/images/kunber/mop_microfibra_po_verde_borda_vermelha.webp', 
                sku: '17132',
                brand: 'Kunber',
                category: 'Equipamentos',
                highlight: 'Captação de Pó e Remoção a Seco',
                characteristics: [
                    'Sistema de identificação por cores (tarjas) para prevenir contaminação cruzada.',
                    'Uso combinado com o Lite Spray Mop para maior produtividade.',
                    'Alta eficiência na captura de pó e sujidades secas.',
                    'Fixação por velcro.'
                ]
            },
            { 
                id: 17, 
                name: 'Sistema de Microfibra', 
                description: 'Sistema completo para coordenar todas as etapas da limpeza profissional utilizando a tecnologia da microfibra.', 
                image: '/images/kunber/sistema_microfibra_kunber.webp', 
                brand: 'Kunber',
                category: 'Equipamentos',
                highlight: 'Otimização com Microfibra',
                characteristics: [
                    'Produtividade: Ciclos de limpeza até 2x mais rápidos.',
                    'Qualidade e Ergonomia: Melhores práticas operacionais.',
                    'Sustentabilidade: Redução de até 70% no consumo de água e produtos químicos.',
                    'Inclui mops, suportes, cabos e baldes especializados.'
                ]
            },
            { 
                id: 18, 
                name: 'Borrifadores (Frascos e Gatilhos)', 
                description: 'Frascos borrifadores em PEAD ou PET com gatilhos de alta performance para aplicação de produtos químicos.', 
                image: '/images/kunber/frasco_borrifador_1000ml_pead.webp', 
                brand: 'Kunber',
                category: 'Equipamentos',
                highlight: 'Aplicação de Químicos',
                characteristics: [
                    'Capacidade: 500ml e 1000ml.',
                    'Material: PEAD (Polietileno de Alta Densidade) ou PET.',
                    'Gatilhos disponíveis em várias cores para identificação de produtos e prevenção de contaminação cruzada.',
                    'Design ergonômico para facilitar o manuseio contínuo.'
                ]
            },
            { 
                id: 19, 
                name: 'Conjunto LT (Suporte + Cabo + Fibra)', 
                description: 'Conjunto versátil para limpeza de superfícies, composto por suporte plástico para fibras abrasivas e cabo de alumínio.', 
                image: '/images/kunber/conjunto_suporte_lt_cabo_fibra.webp', 
                brand: 'Kunber',
                category: 'Equipamentos',
                highlight: 'Limpeza Abrasiva e Fibras',
                characteristics: [
                    'Suporte de 23cm para fibras abrasivas.',
                    'Cabo de alumínio de 140cm ou 150cm, leve e resistente.',
                    'Ideal para limpeza de pisos, paredes e superfícies de difícil acesso.',
                    'Permite a troca rápida de fibras para diferentes níveis de abrasão.'
                ]
            }
        ]
    },
    embalagens: {
        title: 'EMBALAGENS',
        brand: 'M7 Pack',
        description: 'PROTEÇÃO E SEGURANÇA PARA SUAS CARGAS',
        bannerImg: '/images/high-five-clean.webp',
        features: [
            'Proteção completa contra avarias',
            'Economia em insumos de arqueação',
            'Segurança garantida no transporte',
            'Soluções inteligentes para logística'
        ],
        categories: ['Fitas de Arquear', 'Filme Stretch', 'Cantoneiras', 'Máquinas Manuais'],
        products: [
            { 
                id: 29, 
                name: 'Fita Adesiva (Hot Melt e Acrílica)', 
                description: 'Fitas adesivas de alta performance para o fechamento seguro de embalagens. Estão disponíveis em duas tecnologias principais para atender diferentes necessidades industriais.', 
                image: '/images/M7/fita_adesiva_m7pack.webp', 
                brand: 'M7 Pack', 
                category: 'Embalagens',
                highlight: 'Fita Adesiva Industrial',
                characteristics: [
                    'Adesivo Hot Melt: À base de borracha, oferece colagem rápida e é ideal para aplicações que exigem alta resistência inicial.',
                    'Adesivo Acrílico: À base de água, proporciona excelente custo-benefício para uso geral e resistência a variações de temperatura.',
                    'Destaque: Podem ser personalizadas com a identidade visual do cliente, funcionando como um lacre de segurança e ferramenta de marketing.'
                ]
            },
            { 
                id: 30, 
                name: 'Filme Stretch (Liso e Colorido)', 
                description: 'A solução definitiva para a unitização e proteção de cargas paletizadas. O Filme Stretch da M7 Pack garante que a mercadoria chegue ao destino intacta, protegida contra umidade, poeira e movimentações bruscas.', 
                image: '/images/M7/filme_stretch_m7pack.webp', 
                brand: 'M7 Pack', 
                category: 'Embalagens',
                highlight: 'Proteção de Cargas',
                characteristics: [
                    'Versão Lisa: Transparente, permite a visualização da carga e leitura de códigos de barras.',
                    'Versão Colorida: Ideal para o sigilo de cargas de alto valor ou para a organização logística por cores.',
                    'Destaque: Alta capacidade de estiramento e resistência à perfuração, otimizando o consumo de material por pallet.'
                ]
            },
            { 
                id: 31, 
                name: 'Fita PET de Arquear', 
                description: 'Desenvolvida para a arqueação de produtos pesados e pallets que exigem alta segurança. A Fita PET (poliéster) é a alternativa moderna e segura às fitas de aço.', 
                image: '/images/M7/fita_pet_m7pack.webp', 
                brand: 'M7 Pack', 
                category: 'Embalagens',
                highlight: 'Arqueação de Alta Resistência',
                characteristics: [
                    'Resistência: Suporta alto tensionamento sem perder a memória elástica, mantendo a carga firme mesmo após longos períodos de transporte.',
                    'Segurança: Não possui arestas cortantes, reduzindo drasticamente o risco de acidentes de trabalho durante a aplicação e o descarte.',
                    'Destaque: Alta resistência a intempéries e raios UV, não enferruja e não mancha o produto.'
                ]
            },
            { 
                id: 32, 
                name: 'Máquina Seladora de Caixas Semiautomática (M7SDC)', 
                description: 'Equipamento robusto projetado para automatizar o fechamento de caixas de papelão em linhas de produção de média e larga escala.', 
                image: '/images/M7/seladora_caixas_m7sdc_m7pack.webp', 
                brand: 'M7 Pack', 
                category: 'Embalagens',
                highlight: 'Fechamento Semiautomático',
                characteristics: [
                    'Operação: Realiza o fechamento simultâneo das abas superiores e inferiores, padronizando a aplicação da fita adesiva.',
                    'Ajuste Manual: Regulagem simples e rápida para diferentes dimensões de caixas.',
                    'Destaque: Reduz significativamente o desperdício de fita adesiva e a necessidade de mão de obra manual, aumentando a produtividade da expedição.'
                ]
            },
            { 
                id: 33, 
                name: 'Seladora de Caixa Semiautomática (Pneumática)', 
                description: 'A versão avançada da seladora semiautomática, equipada com sistema pneumático para ajuste dinâmico.', 
                image: '/images/M7/seladora_caixas_pneumatica_m7pack.webp', 
                brand: 'M7 Pack', 
                category: 'Embalagens',
                highlight: 'Fechamento Automático Dinâmico',
                characteristics: [
                    'Flexibilidade: Ideal para linhas de produção que operam com um mix variado de tamanhos de caixas simultaneamente.',
                    'Eficiência: O sistema pneumático ajusta a máquina automaticamente às dimensões da caixa que está entrando, sem interrupções para regulagem manual.',
                    'Destaque: Garante uma selagem perfeita e centralizada, independente da variação de altura ou largura das embalagens.'
                ]
            }
        ]
    }
};

export function getProductById(id: number): Product | undefined {
    for (const segment of Object.values(segments)) {
        const found = segment.products.find(p => p.id === id);
        if (found) {
            return found;
        }
    }
    return undefined;
}
