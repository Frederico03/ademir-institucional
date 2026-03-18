<script setup lang="ts">
import { computed, ref } from 'vue';
import { Head } from '@inertiajs/vue3';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Hero from '../components/Hero.vue';
import FloatingCart from '../components/FloatingCart.vue';
import { WHATSAPP_URL } from '../lib/contact';
import {
    ShieldCheckIcon,
    UserGroupIcon,
    SparklesIcon,
    TruckIcon
} from '@heroicons/vue/24/outline';

const handleHeroButtonClick = () => {
    window.location.href = WHATSAPP_URL;
};

const whatsappUrl = WHATSAPP_URL;

const activeTab = ref('Novidades');
const tabs = ['Novidades', 'Químicos', 'Equipamentos', 'Embalagens'];

const featuredProductsByTab: Record<string, { id: number; name: string; image: string; link: string }[]> = {
    Novidades: [
        { id: 1, name: 'Peroxy 4D (Spartan)', image: '/images/spartan/peroxy_4d_spartan.webp', link: '/produto/1' },
        { id: 6, name: 'Lite Spray Mop Articulado (Kunber)', image: '/images/kunber/lite_spray_mop_articulado.webp', link: '/produto/6' },
        { id: 30, name: 'Filme Stretch (M7 Pack)', image: '/images/M7/filme_stretch_m7pack.webp', link: '/produto/30' },
        { id: 33, name: 'Seladora Pneumática (M7 Pack)', image: '/images/M7/seladora_caixas_pneumatica_m7pack.webp', link: '/produto/33' }
    ],
    Químicos: [
        { id: 1, name: 'Peroxy 4D', image: '/images/spartan/peroxy_4d_spartan.webp', link: '/produto/1' },
        { id: 2, name: 'Clean by Peroxy', image: '/images/spartan/clean_by_peroxy_spartan.webp', link: '/produto/2' },
        { id: 24, name: 'LC Multiuso', image: '/images/spartan/lc_multiuso_spartan.webp', link: '/produto/24' },
        { id: 27, name: 'Floor Power', image: '/images/spartan/floor_power_spartan.webp', link: '/produto/27' }
    ],
    Equipamentos: [
        { id: 6, name: 'Lite Spray Mop Articulado', image: '/images/kunber/lite_spray_mop_articulado.webp', link: '/produto/6' },
        { id: 15, name: 'Mop Microfibra Azul', image: '/images/kunber/mop_microfibra_umido_azul_borda_verde.webp', link: '/produto/15' },
        { id: 13, name: 'Carro Funcional Compacto', image: '/images/kunber/carro_funcional_aberto_compacto.webp', link: '/produto/13' },
        { id: 8, name: 'Lavadora Blancus SC4500', image: '/images/kunber/lavadora_blancus_sc4500.webp', link: '/produto/8' }
    ],
    Embalagens: [
        { id: 30, name: 'Filme Stretch', image: '/images/M7/filme_stretch_m7pack.webp', link: '/produto/30' },
        { id: 29, name: 'Fita Adesiva', image: '/images/M7/fita_adesiva_m7pack.webp', link: '/produto/29' },
        { id: 31, name: 'Fita PET de Arquear', image: '/images/M7/fita_pet_m7pack.webp', link: '/produto/31' },
        { id: 32, name: 'Seladora de Caixas M7SDC', image: '/images/M7/seladora_caixas_m7sdc_m7pack.webp', link: '/produto/32' }
    ]
};

const filteredFeaturedProducts = computed(() => {
    return featuredProductsByTab[activeTab.value] ?? featuredProductsByTab.Novidades;
});

const features = [
    {
        title: 'Consultoria B2B',
        description: 'Análise técnica de processos para máxima eficiência operacional.',
        icon: UserGroupIcon,
        bg: 'bg-primary-50',
        text: 'text-primary-800',
        iconBg: 'bg-primary-100'
    },
    {
        title: 'Segurança Certificada',
        description: 'Produtos testados e homologados pela Spartan Brasil.',
        icon: ShieldCheckIcon,
        bg: 'bg-secondary-50',
        text: 'text-secondary-600',
        iconBg: 'bg-secondary-100'
    },
    {
        title: 'Alta Performance',
        description: 'Resultados superiores com menor consumo de insumos.',
        icon: SparklesIcon,
        bg: 'bg-primary-50',
        text: 'text-primary-800',
        iconBg: 'bg-primary-100'
    },
    {
        title: 'Suporte Logístico',
        description: 'Entrega ágil e atendimento personalizado em toda região.',
        icon: TruckIcon,
        bg: 'bg-secondary-50',
        text: 'text-secondary-600',
        iconBg: 'bg-secondary-100'
    }
];

const brands = [
    {
        name: 'Spartan Brasil',
        role: 'Químicos & Higiene',
        description: 'Líder mundial em sistemas de limpeza profissional e desinfecção.',
        logo: '/images/logos/spartan-logo-blue.png',
        link: '/produtos/higiene',
        border: 'border-emerald-100'
    },
    {
        name: 'Kunber',
        role: 'Equipamentos',
        description: 'Ergonomia e tecnologia em acessórios de limpeza profissional.',
        logo: '/images/logos/face-kunber.jpg',
        link: '/produtos/equipamentos',
        border: 'border-blue-100'
    },
    {
        name: 'M7 Pack',
        role: 'Embalagens',
        description: 'Soluções completas para fechamento e proteção de cargas.',
        logo: '/images/logos/images.png',
        link: '/produtos/embalagens',
        border: 'border-indigo-100'
    }
];

const sectors = [
    { name: 'Saúde & Hospitalar', image: '/images/clean.webp', description: 'Desinfecção crítica e higiene controlada.' },
    { name: 'Indústrias', image: '/images/team-cleaning.webp', description: 'Limpeza pesada e embalagem industrial.' },
    { name: 'Cozinhas & Food', image: '/images/cleaning-window.webp', description: 'Segurança alimentar e higienização.' },
    { name: 'Logística', image: '/images/high-five-clean.webp', description: 'Proteção de carga e organização.' }
];
</script>

<template>
    <div class="antialiased bg-white dark:bg-gray-900 transition-colors duration-500 font-sans">
        <Head title="AG&R Representações | Spartan, Kunber e M7 Pack" />

        <Navbar />

        <Hero @button-click="handleHeroButtonClick" />

        <!-- Featured Products (Destaques - AGR Style) -->
        <section class="py-20 bg-gray-50/50 dark:bg-gray-950/50" id="destaques">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 class="text-3xl font-black text-secondary-500 italic decoration-4">Destaques</h2>
                        <!-- Tabs -->
                        <div class="flex gap-6 mt-6 border-b border-gray-200 dark:border-gray-800">
                            <button
                                v-for="tab in tabs"
                                :key="tab"
                                @click="activeTab = tab"
                                :class="[
                                    'pb-3 text-sm font-bold transition-all relative',
                                    activeTab === tab ? 'text-secondary-500' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                                ]"
                            >
                                {{ tab }}
                                <span v-if="activeTab === tab" class="absolute bottom-0 left-0 w-full h-1 bg-secondary-500 rounded-t-full"></span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="product in filteredFeaturedProducts" :key="product.id" class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800 group hover:border-secondary-500/30 transition-all duration-300">
                        <div class="aspect-square rounded-xl bg-gray-50 dark:bg-gray-800 overflow-hidden mb-6">
                            <img :src="product.image" :alt="product.name" width="300" height="300" loading="lazy" class="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <h3 class="text-base font-black text-primary-800 dark:text-white mb-4 line-clamp-2 min-h-12 text-center">
                            {{ product.name }}
                        </h3>
                        <a :href="product.link" class="block w-full py-3 bg-secondary-500 text-white text-xs font-black text-center rounded-xl hover:bg-secondary-600 shadow-lg shadow-secondary-500/20 active:scale-95 transition-all uppercase tracking-widest">
                            Ver Mais
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features (Value Proposition) -->
        <section class="py-20 bg-white dark:bg-gray-900 relative border-b border-gray-50 dark:border-gray-800">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-extrabold text-primary-800 dark:text-white sm:text-4xl">Por que escolher a AG&R?</h2>
                    <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">Mais do que produtos, entregamos soluções completas que transformam a produtividade da sua empresa.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="feature in features" :key="feature.title" :class="[feature.bg, 'dark:bg-gray-800/50 rounded-3xl p-8 border border-transparent hover:border-secondary-500/20 hover:shadow-2xl hover:shadow-secondary-500/10 transition-all duration-300 group']">
                        <div :class="[feature.iconBg, 'dark:bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform']">
                            <component :is="feature.icon" :class="[feature.text, 'w-7 h-7']" />
                        </div>
                        <h3 class="text-xl font-bold text-primary-800 dark:text-white mb-3">{{ feature.title }}</h3>
                        <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Brands Section (The Core Partners) -->
        <section class="py-24 bg-gray-50 dark:bg-gray-800/30" id="marcas">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div class="max-w-2xl">
                        <h2 class="text-3xl font-extrabold text-primary-800 dark:text-white sm:text-4xl italic mb-4">Nossas Representadas</h2>
                        <p class="text-lg text-gray-500 dark:text-gray-400">Trabalhamos com marcas que são sinônimo de excelência e inovação em seus segmentos.</p>
                    </div>
                    <a :href="whatsappUrl" class="inline-flex items-center text-secondary-500 font-bold hover:gap-3 transition-all">
                        Consultar disponibilidade <span class="ml-2">→</span>
                    </a>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div v-for="brand in brands" :key="brand.name" :class="['bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 dark:shadow-none border', brand.border, 'dark:border-gray-700 hover:-translate-y-2 transition-all duration-500']">
                        <div class="w-24 h-24 rounded-3xl flex items-center justify-center mb-8 bg-gray-50 p-3 overflow-hidden">
                            <img :src="brand.logo" :alt="`Logo ${brand.name}`" class="w-full h-full object-contain" loading="lazy" />
                        </div>
                        <h3 class="text-2xl font-black text-primary-800 dark:text-white mb-2">{{ brand.name }}</h3>
                        <div class="text-xs font-bold text-secondary-500 uppercase tracking-widest mb-6">{{ brand.role }}</div>
                        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ brand.description }}</p>
                        <div class="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                            <a :href="brand.link" class="text-sm font-bold text-primary-800 dark:text-white hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors uppercase tracking-widest">Ver Produtos da Marca</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Solutions by Sector -->
        <section class="py-24 bg-white dark:bg-gray-900 overflow-hidden" id="solucoes">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-extrabold text-primary-800 dark:text-white">Soluções por Setor</h2>
                    <p class="mt-4 text-gray-500">A combinação perfeita de químicos, equipamentos e embalagens para o seu negócio.</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div v-for="sector in sectors" :key="sector.name" class="group relative rounded-3xl overflow-hidden aspect-4/5 bg-primary-800">
                        <img :src="sector.image" :alt="sector.name" width="400" height="500" loading="lazy" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700" />
                        <div class="absolute inset-0 bg-linear-to-t from-primary-950 via-primary-950/20 to-transparent"></div>
                        <div class="absolute bottom-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                            <h4 class="text-xl font-bold text-white mb-2">{{ sector.name }}</h4>
                            <p class="text-xs text-secondary-300 opacity-0 group-hover:opacity-100 transition-opacity leading-relaxed">{{ sector.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="py-20 px-6">
            <div class="max-w-3xl mx-auto bg-primary-800 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
                <div class="absolute top-0 right-0 p-8 opacity-10">
                    <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                </div>
                <h2 class="text-3xl font-bold text-white mb-6 leading-tight">Pronto para elevar o padrão de higiene e segurança da sua empresa?</h2>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <a :href="whatsappUrl" class="w-full sm:w-auto px-8 py-4 bg-secondary-500 text-white font-bold rounded-2xl hover:bg-secondary-600 shadow-xl shadow-secondary-500/20 transform hover:-translate-y-1 transition-all">
                        Solicite um Orçamento Via WhatsApp
                    </a>
                </div>
            </div>
        </section>

        <Footer />

        <FloatingCart />
    </div>
</template>


