<script setup lang="ts">
import { computed } from 'vue';
import { Head, Link } from '@inertiajs/vue3';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import FloatingCart from '../components/FloatingCart.vue';
import { WHATSAPP_URL } from '../lib/contact';
import {
    ChevronRightIcon,
    ShoppingBagIcon,
    BeakerIcon,
    WrenchScrewdriverIcon,
    CubeIcon
} from '@heroicons/vue/24/outline';

const props = defineProps({
    segment: {
        type: String,
        required: true
    }
});

import { segments } from '../lib/catalog';

const currentData = computed(() => segments[props.segment as keyof typeof segments] || segments.higiene);
const whatsappUrl = WHATSAPP_URL;

const sidebarLinks = [
    { name: 'Todos os Produtos', href: '/produtos/higiene', slug: 'todos' },
    { name: 'Higiene (Spartan)', href: '/produtos/higiene', slug: 'higiene' },
    { name: 'Equipamentos (Kunber)', href: '/produtos/equipamentos', slug: 'equipamentos' },
    { name: 'Embalagens (M7 Pack)', href: '/produtos/embalagens', slug: 'embalagens' },
];
</script>

<template>
    <div class="antialiased bg-white dark:bg-gray-900 transition-colors duration-500 font-sans min-h-screen">
        <Head :title="`AG&R | ${currentData.title}`" />

        <Navbar />

        <!-- Segment Hero/Banner (AGR Style) -->
        <section class="relative h-[350px] overflow-hidden bg-primary-900">
            <img :src="currentData.bannerImg" class="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div class="absolute inset-0 bg-linear-to-r from-primary-950 via-primary-900/60 to-transparent"></div>

            <div class="relative max-w-7xl mx-auto px-6 lg:px-8 h-full flex flex-col justify-center">
                <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl lg:text-7xl font-black text-secondary-500 italic decoration-8 tracking-tighter mb-4">
                            {{ currentData.title.split(' ')[0] }}
                            <span class="block text-white text-3xl lg:text-4xl mt-2 not-italic font-bold">{{ currentData.title.split(' ').slice(1).join(' ') }}</span>
                        </h1>
                        <p class="text-white/80 font-bold uppercase tracking-widest text-sm lg:text-base max-w-xl">
                            {{ currentData.description }}
                        </p>
                    </div>

                    <div class="hidden lg:flex border-l-2 border-secondary-500 flex-col gap-3 pl-8">
                        <div v-for="feature in currentData.features" :key="feature" class="flex items-center gap-3 text-white">
                            <span class="w-1.5 h-1.5 rounded-full bg-secondary-500"></span>
                            <span class="text-sm font-bold opacity-90">{{ feature }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main Content Area -->
        <main class="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-32 lg:pb-48">
            <div class="lg:grid lg:grid-cols-4 lg:gap-12">

                <!-- Sidebar (AGR Style) -->
                <aside class="hidden lg:block lg:col-span-1">
                    <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl shadow-gray-100 dark:shadow-none border border-gray-100 dark:border-gray-800 sticky top-32">
                        <h3 class="text-xl font-black text-primary-800 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">Navegação</h3>
                        <nav class="space-y-2">
                            <Link
                                v-for="link in sidebarLinks"
                                :key="link.name"
                                :href="link.href"
                                :class="[
                                    'group flex items-center justify-between p-4 rounded-2xl text-sm font-bold transition-all',
                                    segment === link.slug ? 'bg-secondary-50 text-secondary-600 dark:bg-secondary-900/40 dark:text-secondary-400' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800/60'
                                ]"
                            >
                                {{ link.name }}
                                <ChevronRightIcon :class="['w-4 h-4 transition-transform group-hover:translate-x-1', segment === link.slug ? 'text-secondary-500' : 'text-gray-300']" />
                            </Link>
                        </nav>

                        <!-- Help Card -->
                        <div class="mt-12 p-6 rounded-4xl bg-secondary-500 text-white overflow-hidden relative group">
                            <div class="relative z-10">
                                <h4 class="font-black text-lg mb-2">Precisa de Ajuda?</h4>
                                <p class="text-xs opacity-90 font-medium mb-4">Nossos técnicos estão prontos para te auxiliar na melhor escolha.</p>
                                <a :href="whatsappUrl" class="block py-3 bg-white text-secondary-600 text-center rounded-xl font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-colors">Falar Agora</a>
                            </div>
                            <svg class="absolute -bottom-4 -right-4 w-24 h-24 opacity-20 transform rotate-12 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                        </div>
                    </div>
                </aside>

                <!-- Product Grid Area -->
                <div class="lg:col-span-3">
                    <div class="flex items-center justify-between mb-12">
                        <h2 class="text-3xl font-black text-primary-800 dark:text-white tracking-tight">Catalogo <span class="text-secondary-500 italic">{{ currentData.brand }}</span></h2>
                        <div class="text-sm font-bold text-gray-400 uppercase tracking-widest">Exibindo {{ currentData.products.length }} itens</div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div v-for="product in currentData.products" :key="product.id" class="bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 pb-10 shadow-xl shadow-gray-100 dark:shadow-none border border-gray-100 dark:border-gray-700 group transition-all duration-500 hover:border-secondary-500/30 flex flex-col">
                            <div class="aspect-square rounded-4xl bg-gray-50 dark:bg-gray-900 overflow-hidden mb-8 p-4">
                                <img :src="product.image" :alt="product.name" class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div class="text-center flex flex-col items-center grow pt-2">
                                <h3 class="text-xl font-black text-primary-800 dark:text-white mb-4 leading-tight flex items-center justify-center">{{ product.name }}</h3>

                                <div class="min-h-[32px] mb-6 flex items-center justify-center w-full">
                                    <span v-if="product.highlight" class="inline-block px-4 py-1.5 bg-[#dcfce7] dark:bg-green-900/40 text-[#16a34a] dark:text-green-400 text-xs font-black uppercase tracking-widest rounded-xl text-center leading-tight max-w-full">
                                        {{ product.highlight }}
                                    </span>
                                </div>

                                <p class="text-[13px] text-gray-500 dark:text-gray-400 mb-8 mt-auto line-clamp-3 lg:line-clamp-2 px-2">{{ product.description }}</p>

                                <div class="w-full mt-4 flex items-center justify-center">
                                    <Link :href="`/produto/${product.id}`" class="inline-flex items-center gap-2 group/link font-black text-[13px] text-[#0ea5e9] dark:text-[#38bdf8] hover:text-[#0284c7] hover:dark:text-[#7dd3fc] uppercase tracking-[0.15em] transition-colors">
                                        Ver Detalhes
                                        <ChevronRightIcon class="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <Footer />

        <FloatingCart />
    </div>
</template>
