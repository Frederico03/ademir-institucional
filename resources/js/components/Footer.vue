<template>
    <footer class="bg-gray-900 pt-20 pb-10">
        <!-- CTA / Contact Form Section -->
        <!--
        <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-20 relative z-10 -mt-32">
            <div class="relative isolate overflow-hidden bg-blue-600 rounded-3xl px-6 py-12 shadow-2xl sm:px-12 xl:py-16 md:flex md:gap-16 items-center">
               <div class="md:w-1/2">
                   <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Um passo para a limpeza<br>ideal da sua empresa</h2>
                   <p class="mt-4 text-lg text-blue-100">Preencha o formulário e receba uma consultoria grátis e personalizada. Entre em contato em até 24 horas.</p>

                   <div class="mt-8 flex flex-col gap-4">
                       <div class="flex items-center gap-3 text-white bg-blue-500/30 p-4 rounded-xl backdrop-blur-sm">
                           <PhoneIcon class="h-6 w-6" />
                           <a :href="WHATSAPP_URL" target="_blank" class="font-semibold hover:underline">{{ WHATSAPP_DISPLAY }}</a>
                       </div>
                       <div class="flex items-center gap-3 text-white bg-blue-500/30 p-4 rounded-xl backdrop-blur-sm">
                           <EnvelopeIcon class="h-6 w-6" />
                           <a :href="`mailto:${CONTACT_EMAIL}`" class="font-semibold hover:underline">{{ CONTACT_EMAIL }}</a>
                       </div>
                   </div>
               </div>

               <div class="mt-10 md:mt-0 md:w-1/2 bg-white rounded-2xl p-6 lg:p-8">
                   <h3 class="text-xl font-bold text-gray-900 mb-6">Envie sua mensagem</h3>
                   <form action="#" method="POST" class="space-y-4">
                       <div class="grid grid-cols-2 gap-4">
                           <div>
                               <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
                               <input type="text" name="name" id="name" class="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Seu nome">
                           </div>
                            <div>
                               <label for="phone" class="block text-sm font-medium text-gray-700">Telefone</label>
                               <input type="text" name="phone" id="phone" class="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="(11) 99999-9999">
                           </div>
                       </div>

                       <div>
                           <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                           <input type="email" name="email" id="email" class="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="seu.email@empresa.com">
                       </div>

                       <div>
                           <label for="message" class="block text-sm font-medium text-gray-700">Mensagem</label>
                           <textarea id="message" name="message" rows="3" class="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Como podemos ajudar?"></textarea>
                       </div>

                       <button type="submit" class="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Enviar Solicitação</button>
                   </form>
               </div>
            </div>
        </div>
        -->

        <!-- Links -->
        <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div class="flex items-center gap-2 mb-4 md:mb-0">
                <img src="/images/logo.webp" alt="Ademir Logo" class="h-10 w-auto bg-white/10 rounded-md p-1" />
                <span>Ademir Representações</span>
            </div>

            <div class="flex gap-6">
                 <a href="#" class="hover:text-white transition-colors">Início</a>
                 <a href="#" class="hover:text-white transition-colors">Serviços</a>
                 <a href="#" class="hover:text-white transition-colors">Política de Privacidade</a>
            </div>

            <div class="mt-4 md:mt-0">
                <p>&copy; 2026 Ademir Representações. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
</template>
