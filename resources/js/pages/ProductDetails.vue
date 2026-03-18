<script setup lang="ts">
import { computed, ref } from 'vue';
import { Head, Link } from '@inertiajs/vue3';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import FloatingCart from '../components/FloatingCart.vue';
import { getProductById } from '../lib/catalog';
import { ShoppingCartIcon } from '@heroicons/vue/24/solid';
import { useCartStore } from '../lib/cartStore';

const props = defineProps({
    id: {
        type: String,
        required: true
    }
});

const product = computed(() => getProductById(Number(props.id)));

const { addToCart } = useCartStore();
const isAdded = ref(false);

const handleAddToCart = () => {
    if (product.value) {
        addToCart({
            id: product.value.id,
            name: product.value.name
        });
        isAdded.value = true;
        setTimeout(() => isAdded.value = false, 3000);
    }
};

function getCategorySlug(category?: string) {
    if (!category) return 'todos';
    const mapper: Record<string, string> = {
        'Higiene & Químicos': 'higiene',
        'Equipamentos': 'equipamentos',
        'Embalagens': 'embalagens'
    };
    return mapper[category] || 'todos';
}

</script>

<template>
    <div class="antialiased bg-white dark:bg-gray-900 transition-colors duration-500 font-sans min-h-screen flex flex-col">
        <Head :title="`AG&R | ${product?.name ?? 'Produto'}`" />
        
        <Navbar />

        <main class="grow max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-64 lg:pb-96 w-full">
            <div v-if="product">
                <!-- Breadcrumbs -->
                <nav class="text-sm font-medium text-gray-500 mb-8 flex items-center gap-2">
                    <Link href="/produtos/todos" class="hover:text-primary-800 transition-colors">Produtos</Link>
                    <span>></span>
                    <Link :href="`/produtos/${getCategorySlug(product.category)}`" class="hover:text-primary-800 transition-colors capitalize">{{ product.category || 'Categoria' }}</Link>
                    <span>></span>
                    <span class="text-gray-900 dark:text-gray-200 truncate max-wxs lg:max-w-md">{{ product.name }}</span>
                </nav>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    <!-- Left Column: Image Area -->
                    <div class="lg:col-span-6 bg-white border border-gray-100 dark:border-gray-800 dark:bg-white rounded-3xl p-8 flex items-center justify-center">
                        <img :src="product.image" :alt="product.name" class="w-full h-auto object-contain max-h-[500px]" />
                    </div>

                    <!-- Right Column: Details Area -->
                    <div class="lg:col-span-6 flex flex-col pt-4">
                        <!-- Category Badge -->
                        <div class="mb-6">
                            <span class="inline-block px-4 py-2 bg-primary-900 text-white text-sm font-bold rounded shadow-sm">
                                {{ product.category || 'Produto' }}
                            </span>
                        </div>

                        <!-- Title -->
                        <h1 class="text-4xl lg:text-5xl font-black text-primary-900 dark:text-white mb-8 leading-tight tracking-tight">
                            {{ product.name }}
                        </h1>

                        <!-- Description Block -->
                        <div class="mb-8">
                            <h2 class="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Conteúdo da Embalagem:</h2>
                            
                            <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px] mb-6">
                                {{ product.description }}
                            </p>
                            
                            <ul v-if="product.characteristics && product.characteristics.length" class="space-y-3 text-gray-600 dark:text-gray-400 text-[15px]">
                                <li v-for="char in product.characteristics" :key="char" class="flex items-start gap-3">
                                    <span class="w-1.5 h-1.5 mt-2 rounded-full bg-primary-800 opacity-60 shrink-0"></span>
                                    <span>{{ char }}</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div v-if="product.sku" class="text-[15px] text-gray-500 mb-6">
                            SKU: {{ product.sku }}
                        </div>

                        <!-- Guarantee info -->
                        <div class="text-[14px] text-gray-500 mb-12">
                            Garantia legal: 90 dias <span v-if="product.brand === 'Kunber'">+ Garantia contratual: 9 meses (Para locadoras, garantia única e exclusiva de 90 dias)</span>
                        </div>

                        <!-- Action Button -->
                        <div class="mt-auto">
                            <button @click="handleAddToCart" class="w-full flex items-center justify-center gap-3 py-4 bg-[#3ebc5e] text-white font-black rounded-4xl hover:bg-[#35a852] active:scale-95 transition-all text-[16px] xl:text-[20px] shadow-lg shadow-green-500/20">
                                <ShoppingCartIcon class="w-6 h-6 shrink-0" />
                                {{ isAdded ? 'Adicionado ao Orçamento!' : 'Adicionar ao Orçamento' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div v-else class="text-center py-32">
                <h2 class="text-3xl font-black text-gray-400">Produto não encontrado</h2>
                <Link href="/produtos/todos" class="mt-6 inline-block px-8 py-3 bg-primary-800 text-white rounded-full font-bold shadow-xl">Voltar aos Produtos</Link>
            </div>
        </main>

        <Footer />
        
        <!-- Floating Support -->
        <FloatingCart />
    </div>
</template>
