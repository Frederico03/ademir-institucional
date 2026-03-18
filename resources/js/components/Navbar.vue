<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'; // Assuming heroicons are available or will use SVGs
import { computed, ref } from 'vue';
import { WHATSAPP_URL } from '../lib/contact';
import { segments } from '../lib/catalog';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const mobileMenuOpen = ref(false);
const whatsappUrl = WHATSAPP_URL;
const searchQuery = ref('');
const isSearchFocused = ref(false);

const catalogProducts = Object.values(segments).flatMap(segment =>
    segment.products.map(product => ({
        id: product.id,
        name: product.name,
        image: product.image,
        brand: product.brand ?? segment.brand,
        category: product.category ?? segment.title,
    }))
);

const searchResults = computed(() => {
    const term = searchQuery.value.trim().toLowerCase();

    if (!term) {
        return [];
    }

    return catalogProducts
        .filter(product => {
            const searchable = `${product.name} ${product.brand} ${product.category}`.toLowerCase();
            return searchable.includes(term);
        })
        .slice(0, 6);
});

const showSearchDropdown = computed(() => {
    return isSearchFocused.value && searchQuery.value.trim().length > 0;
});

const goToProduct = (productId: number) => {
    window.location.href = `/produto/${productId}`;
};

const handleSearchSubmit = () => {
    if (searchResults.value.length > 0) {
        goToProduct(searchResults.value[0].id);
        return;
    }

    window.location.href = '/produtos/higiene';
};

const handleSearchBlur = () => {
    setTimeout(() => {
        isSearchFocused.value = false;
    }, 120);
};

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Higiene', href: '/produtos/higiene' },
    { name: 'Equipamentos', href: '/produtos/equipamentos' },
    { name: 'Embalagens', href: '/produtos/embalagens' },
];
</script>

<template>
    <header class="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-xl shadow-primary-900/10 transition-all duration-300">
        <!-- Top Row: Logo, Search, Budget Button -->
        <div class="border-b border-gray-100 dark:border-gray-800 bg-linear-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/95">
            <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8 gap-6" aria-label="Global">
                <!-- Logo -->
                <div class="flex lg:flex-1 shrink-0">
                    <a href="/" class="-m-1.5 p-1.5 inline-flex items-center rounded-2xl bg-primary-800 px-4 py-2.5 dark:bg-transparent">
                        <img class="h-12 md:h-14 w-auto object-contain" src="/images/logo.webp" alt="AG&R Representações" />
                    </a>
                </div>

                <!-- Central Search Bar (AGR Style) -->
                <div class="hidden md:flex flex-1 max-w-3xl mx-4">
                    <div class="relative w-full group">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                            <svg class="w-6 h-6 text-gray-400 group-focus-within:text-secondary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input
                            v-model="searchQuery"
                            type="text"
                            class="block w-full py-4 pl-14 pr-4 text-base text-gray-900 border border-gray-200 rounded-2xl bg-gray-50 focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500 outline-none dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white transition-all shadow-inner"
                            placeholder="Buscar produtos, marcas ou soluções..."
                            @focus="isSearchFocused = true"
                            @blur="handleSearchBlur"
                            @keydown.enter.prevent="handleSearchSubmit"
                        >

                        <div v-if="showSearchDropdown" class="absolute left-0 right-0 top-full mt-3 z-50 rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden dark:bg-gray-900 dark:border-gray-700">
                            <button
                                v-for="product in searchResults"
                                :key="product.id"
                                type="button"
                                class="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b last:border-b-0 border-gray-100 dark:border-gray-800"
                                @mousedown.prevent
                                @click="goToProduct(product.id)"
                            >
                                <div class="flex items-center gap-3">
                                    <div class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 overflow-hidden border border-gray-200 dark:border-gray-700 shrink-0">
                                        <img :src="product.image" :alt="product.name" class="w-full h-full object-contain p-1" loading="lazy" />
                                    </div>
                                    <div class="min-w-0">
                                        <p class="text-sm font-bold text-gray-800 dark:text-gray-100 truncate">{{ product.name }}</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400 truncate">{{ product.brand }} • {{ product.category }}</p>
                                    </div>
                                </div>
                            </button>

                            <div v-if="searchResults.length === 0" class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                                Nenhum produto encontrado.
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Action: Budget Button (AGR Style) -->
                <div class="flex items-center gap-4 lg:flex-1 lg:justify-end">
                    <a :href="whatsappUrl" target="_blank" class="hidden sm:flex items-center gap-3 rounded-2xl bg-secondary-500 px-6 py-4 text-base font-black text-white shadow-xl shadow-secondary-500/30 hover:bg-secondary-600 hover:shadow-secondary-500/50 active:scale-95 transition-all uppercase tracking-tight">
                        <div class="p-2 bg-white/20 rounded-xl">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        </div>
                        <div class="flex flex-col leading-none">
                            <span class="text-2xs opacity-90 font-medium">Fale com um</span>
                            <span class="text-lg">especialista</span>
                        </div>
                    </a>

                    <!-- Mobile Open Button -->
                    <button type="button" class="lg:hidden p-2 text-gray-700 dark:text-gray-200" @click="toggleMobileMenu">
                        <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    </button>

                    <button
                        @click="toggleDark()"
                        class="hidden md:flex p-3 rounded-xl border border-gray-100 dark:border-gray-800 text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
                        title="Alternar Tema"
                    >
                        <SunIcon v-if="isDark" class="w-6 h-6" />
                        <MoonIcon v-else class="w-6 h-6" />
                    </button>
                </div>
            </nav>
        </div>

        <!-- Bottom Row: Navigation Links (Desktop) -->
        <div class="hidden lg:block bg-white dark:bg-gray-950">
            <nav class="mx-auto max-w-7xl px-8 flex gap-x-10">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="relative py-5 text-base font-bold text-gray-600 dark:text-gray-400 hover:text-secondary-500 dark:hover:text-secondary-400 transition-all group">
                    {{ item.name }}
                    <span class="absolute bottom-0 left-0 w-full h-1 bg-secondary-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t-full"></span>
                </a>
            </nav>
        </div>

        <!-- Mobile Menu Panel -->
        <div v-if="mobileMenuOpen" class="lg:hidden" role="dialog" aria-modal="true">
            <div class="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" @click="toggleMobileMenu"></div>
            <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm shadow-2xl">
                <div class="flex items-center justify-between mb-8">
                    <a href="/" class="inline-flex items-center rounded-xl bg-primary-800 px-3 py-2 dark:bg-transparent">
                        <img class="h-9 w-auto object-contain" src="/images/logo.webp" alt="AG&R Representações" />
                    </a>
                    <button type="button" class="p-2 -mr-2 text-gray-700 dark:text-gray-200" @click="toggleMobileMenu">
                        <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <div class="space-y-1">
                    <a v-for="item in navigation" :key="item.name" :href="item.href" @click="mobileMenuOpen = false" class="block py-4 text-lg font-bold text-gray-900 dark:text-white border-b border-gray-50 dark:border-gray-800 hover:text-secondary-500 transition-colors">
                        {{ item.name }}
                    </a>
                </div>

                <div class="mt-8 space-y-4">
                    <a :href="whatsappUrl" class="flex items-center justify-center gap-3 rounded-2xl bg-secondary-500 py-5 text-lg font-black text-white shadow-xl shadow-secondary-500/20">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        Falar com Especialista
                    </a>

                    <button
                        @click="toggleDark()"
                        class="w-full flex items-center justify-between p-4 rounded-2xl border border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300"
                    >
                        <span class="font-bold italic">Modo Escuro</span>
                        <div class="p-2 rounded-lg bg-gray-50 dark:bg-gray-800">
                            <SunIcon v-if="isDark" class="w-6 h-6" />
                            <MoonIcon v-else class="w-6 h-6" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>
