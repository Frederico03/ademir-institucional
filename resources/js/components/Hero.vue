<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: 'Soluções de Limpeza Profissional & Eficiente'
    },
    subtitle: {
        type: String,
        default: 'Consultoria especializada e acesso direto às 3 maiores marcas do mercado. Otimize suas operações em produtos seguros e atendimento ágil.'
    }
});
</script>

<template>
    <section class="relative overflow-hidden bg-white dark:bg-gray-900 pt-16 pb-0 transition-colors duration-500">
        <div class="mx-auto max-w-7xl px-6 lg:px-8 relative">
            <div class="flex flex-col lg:flex-row items-center gap-12 mb-12">
                <!-- Left Content: Text with Brand Shape -->
                <div class="relative z-10 lg:w-1/2">
                    <!-- Brand Shape Background -->
                    <div class="absolute -top-12 -left-20 w-[120%] h-[140%] bg-secondary-500 rounded-[4rem] -rotate-3 -z-10 shadow-2xl shadow-secondary-500/20 hidden lg:block"></div>

                    <div class="lg:pl-8 text-center lg:text-left">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest mb-6 border border-white/30 lg:bg-secondary-600 lg:border-secondary-400">
                            <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            Soluções de Alta Performance
                        </div>

                        <h1 class="text-4xl font-black tracking-tight text-primary-800 dark:text-white lg:text-white sm:text-6xl leading-[1.1]">
                            SOLUÇÕES <span class="lg:text-secondary-100">INTELIGENTES</span><br/>
                            <span class="text-3xl sm:text-5xl opacity-90 italic">PARA O SEU NEGÓCIO</span><br/>
                            <span class="bg-secondary-500 lg:bg-transparent text-white px-2 rounded-lg">CADA VEZ MAIS RÁPIDAS</span>
                        </h1>

                        <p class="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300 lg:text-white/80 font-medium">
                            Representante oficial das marcas que definem o padrão de eficiência industrial no Brasil.
                        </p>

                        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button @click="$emit('button-click')" class="group relative px-8 py-4 bg-white text-secondary-600 lg:text-secondary-600 font-black rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-3 active:scale-95 overflow-hidden">
                                <span class="relative z-10 uppercase tracking-tighter">Clique e saiba mais</span>
                                <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                                <div class="absolute inset-0 bg-gray-50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-0"></div>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Right Content: Mascot/Person Integration -->
                <div class="lg:w-1/2 relative">
                    <div class="relative group">
                        <!-- Decorative back elements -->
                        <div class="absolute -inset-4 bg-secondary-100 dark:bg-secondary-900/20 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>

                        <div class="relative aspect-4/3 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
                            <img
                                src="/images/team-cleaning.webp"
                                alt="Equipe de limpeza profissional"
                                width="600"
                                height="450"
                                fetchpriority="high"
                                loading="eager"
                                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <!-- Overlay to match shape style -->
                            <div class="absolute inset-0 bg-linear-to-t from-secondary-500/30 to-transparent"></div>

                            <!-- Mascot Badge -->
                            <div class="absolute bottom-6 right-6 bg-white dark:bg-gray-900 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-secondary-100 dark:border-gray-800 animate-bounce-slow">
                                <div class="w-11 h-11 bg-secondary-500 rounded-xl flex items-center justify-center text-white shrink-0">
                                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                </div>
                                <span class="text-sm sm:text-base font-black text-primary-800 dark:text-white leading-none whitespace-nowrap">Atendimento Especializado</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scrolling Ticker Banner (AGR Style) -->
        <div class="w-full bg-gray-50 dark:bg-gray-950 border-y border-gray-100 dark:border-gray-800 py-4 overflow-hidden relative">
            <div class="flex whitespace-nowrap animate-marquee">
                <div v-for="i in 4" :key="i" class="flex items-center gap-12 px-6">
                    <span class="flex items-center gap-3 text-sm font-black text-gray-400 uppercase tracking-widest">
                        <span class="h-2 w-2 rounded-full bg-secondary-500"></span>
                        O Primeiro Centro de Soluções da Região
                    </span>
                    <span class="flex items-center gap-3 text-sm font-black text-gray-400 uppercase tracking-widest">
                        <span class="h-2 w-2 rounded-full bg-primary-800"></span>
                        Spartan • Kunber • M7 Pack
                    </span>
                    <span class="flex items-center gap-3 text-sm font-black text-gray-400 uppercase tracking-widest">
                        <span class="h-2 w-2 rounded-full bg-secondary-500"></span>
                        Consultoria Técnica Especializada
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>
