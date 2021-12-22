<template>
      <main class="w-10/12 mx-auto mt-40 mb-10 laptop:mt-28 desktop:w-8/12">
        <h1>Menu de la semaine</h1>
        <div class="flex justify-between flex-col-reverse relative laptop:flex-row">
            <div id="menu" class="w-full">
                <section id="monday" class="mb-6">
                    <div class="relative" :class="{'h-[290vw] tablet:h-[60vw] laptop:h-[65vh] desktop:h-80': open_monday, 'h-full': !open_monday}" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95">
                        <button @click="open_monday = !open_monday" class="flex flex-row items-center border-b-2 border-dark w-40">
                          <h2 class="my-1">Lundi</h2>
                          <svg fill="dark" viewBox="0 0 20 20" :class="{'rotate-180': open_monday, 'rotate-0': !open_monday}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="non" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                            <div :class="{'hidden': !open_monday, 'absolute': open_monday}" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="right-0 w-full mt-2 origin-top-right">
                                <div class="grid grid-cols-1 gap-4 tablet:grid-cols-5">
                                    <div class="tablet:text-center font-fira font-bold">
                                        <h3 class="mb-4">Petit-déjeuner</h3>
                                        <div class="w-1/3 tablet:w-full">
                                            <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                <img src="" alt="" class="h-full w-full object-cover">
                                            </a>    
                                        </div>
                                    </div>
                                    <div class="tablet:text-center font-fira font-bold">
                                        <h3 class="mb-4">Collation</h3>
                                        <div class="w-1/3 tablet:w-full">
                                            <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                <img src="" alt="" class="h-full w-full object-cover">
                                            </a>    
                                        </div>
                                    </div>
                                    <div class="tablet:text-center font-fira font-bold">
                                        <h3 class="mb-4">Déjeuner</h3>
                                        <div class="flex justify-between tablet:flex-col">
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>
                                                <p class="my-2">Entrée</p>
                                            </div>
                                            <div class="w-1/3 mx-2 tablet:w-full tablet:mx-0">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>
                                                <p class="my-2">Plat</p>
                                            </div>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>
                                                <p class="my-2">Dessert</p>
                                            </div>    
                                        </div>
                                    </div>
                                    <div class="tablet:text-center font-fira font-bold">
                                        <h3 class="mb-4">Goûter</h3>
                                        <div class="w-1/3 tablet:w-full">
                                            <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                <img src="" alt="" class="h-full w-full object-cover">
                                            </a>    
                                        </div>
                                    </div>
                                    <div class="tablet:text-center font-fira font-bold">
                                        <h3 class="mb-4">Dîner</h3>
                                        <div class="flex justify-between tablet:flex-col">
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>
                                                <p class="my-2">Entrée</p>
                                            </div>
                                            <div class="w-1/3 mx-2 tablet:w-full tablet:mx-0">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>
                                                <p class="my-2">Plat</p>
                                            </div>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>
                                                <p class="my-2">Dessert</p>
                                            </div>    
                                        </div>
                                    </div>    
                                </div>    
                            </div>
                          </div>    
                    </section>
                    <section id="tuesday" class="mb-6">
                        <div class="relative" :class="{'h-[290vw] tablet:h-[60vw] laptop:h-[65vh] desktop:h-80': open_tuesday, 'h-full': !open_tuesday}" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95">
                            <button @click="open_tuesday = !open_tuesday" class="flex flex-row items-center border-b-2 border-dark w-40">
                              <h2 class="my-1">Mardi</h2>
                              <svg fill="dark" viewBox="0 0 20 20" :class="{'rotate-180': open_tuesday, 'rotate-0': !open_tuesday}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="non" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                                <div :class="{'hidden': !open_tuesday, 'absolute': open_tuesday}" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="right-0 w-full mt-2 origin-top-right">
                                    <div class="grid grid-cols-1 gap-4 tablet:grid-cols-5">
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Petit-déjeuner</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Collation</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Déjeuner</h3>
                                            <div class="flex justify-between tablet:flex-col">
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Entrée</p>
                                                </div>
                                                <div class="w-1/3 mx-2 tablet:w-full tablet:mx-0">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Plat</p>
                                                </div>
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Dessert</p>
                                                </div>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Goûter</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Dîner</h3>
                                            <div class="flex justify-between tablet:flex-col">
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Entrée</p>
                                                </div>
                                                <div class="w-1/3 mx-2 tablet:w-full tablet:mx-0">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Plat</p>
                                                </div>
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Dessert</p>
                                                </div>    
                                            </div>
                                        </div>    
                                    </div>    
                                </div>
                              </div>    
                    </section>
                    <section id="wednesday" class="mb-6">
                        <div class="relative" :class="{'h-[290vw] tablet:h-[60vw] laptop:h-[65vh] desktop:h-80': open_wednesday, 'h-full': !open_wednesday}" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95">
                            <button @click="open_wednesday = !open_wednesday" class="flex flex-row items-center border-b-2 border-dark w-40">
                              <h2 class="my-1">Mercredi</h2>
                              <svg fill="dark" viewBox="0 0 20 20" :class="{'rotate-180': open_wednesday, 'rotate-0': !open_wednesday}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="non" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                                <div :class="{'hidden': !open_wednesday, 'absolute': open_wednesday}" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="right-0 w-full mt-2 origin-top-right">
                                    <div class="grid grid-cols-1 gap-4 tablet:grid-cols-5">
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Petit-déjeuner</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Collation</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Déjeuner</h3>
                                            <div class="flex justify-between tablet:flex-col">
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Entrée</p>
                                                </div>
                                                <div class="w-1/3 mx-2 tablet:w-full tablet:mx-0">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Plat</p>
                                                </div>
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Dessert</p>
                                                </div>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Goûter</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Dîner</h3>
                                            <div class="flex justify-between tablet:flex-col">
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Entrée</p>
                                                </div>
                                                <div class="w-1/3 mx-2 tablet:w-full tablet:mx-0">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Plat</p>
                                                </div>
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Dessert</p>
                                                </div>    
                                            </div>
                                        </div>    
                                    </div>    
                                </div>
                              </div>    
                    </section>
                    <section id="thursday" class="mb-6">
                        <div class="relative" :class="{'h-[290vw] tablet:h-[60vw] laptop:h-[65vh] desktop:h-80': open_thursday, 'h-full': !open_thursday}" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95">
                            <button @click="open_thursday = !open_thursday" class="flex flex-row items-center border-b-2 border-dark w-40">
                              <h2 class="my-1">Jeudi</h2>
                              <svg fill="dark" viewBox="0 0 20 20" :class="{'rotate-180': open_thursday, 'rotate-0': !open_thursday}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="non" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                                <div :class="{'hidden': !open_thursday, 'absolute': open_thursday}" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="right-0 w-full mt-2 origin-top-right">
                                    <div class="grid grid-cols-1 gap-4 tablet:grid-cols-5">
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Petit-déjeuner</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Collation</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Déjeuner</h3>
                                            <div class="flex justify-between tablet:flex-col">
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Entrée</p>
                                                </div>
                                                <div class="w-1/3 mx-2 tablet:w-full tablet:mx-0">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Plat</p>
                                                </div>
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Dessert</p>
                                                </div>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Goûter</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Dîner</h3>
                                            <div class="flex justify-between tablet:flex-col">
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Entrée</p>
                                                </div>
                                                <div class="w-1/3 mx-2 tablet:w-full tablet:mx-0">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Plat</p>
                                                </div>
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Dessert</p>
                                                </div>    
                                            </div>
                                        </div>    
                                    </div>    
                                </div>
                              </div>    
                    </section>
                    <section id="friday" class="mb-6">
                        <div class="relative" :class="{'h-[290vw] tablet:h-[60vw] laptop:h-[65vh] desktop:h-80': open_friday, 'h-full': !open_friday}" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95">
                            <button @click="open_friday = !open_friday" class="flex flex-row items-center border-b-2 border-dark w-40">
                              <h2 class="my-1">Vendredi</h2>
                              <svg fill="dark" viewBox="0 0 20 20" :class="{'rotate-180': open_friday, 'rotate-0': !open_friday}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="non" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                                <div :class="{'hidden': !open_friday, 'absolute': open_friday}" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="right-0 w-full mt-2 origin-top-right">
                                    <div class="grid grid-cols-1 gap-4 tablet:grid-cols-5">
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Petit-déjeuner</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Collation</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Déjeuner</h3>
                                            <div class="flex justify-between tablet:flex-col">
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Entrée</p>
                                                </div>
                                                <div class="w-1/3 mx-2 tablet:w-full tablet:mx-0">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Plat</p>
                                                </div>
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Dessert</p>
                                                </div>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Goûter</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Dîner</h3>
                                            <div class="flex justify-between tablet:flex-col">
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Entrée</p>
                                                </div>
                                                <div class="w-1/3 mx-2 tablet:w-full tablet:mx-0">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Plat</p>
                                                </div>
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Dessert</p>
                                                </div>    
                                            </div>
                                        </div>    
                                    </div>    
                                </div>
                              </div>    
                    </section>
                    <section id="sarturday" class="mb-6">
                        <div class="relative" :class="{'h-[290vw] tablet:h-[60vw] laptop:h-[65vh] desktop:h-80': open_saturday, 'h-full': !open_saturday}" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95">
                            <button @click="open_saturday = !open_saturday" class="flex flex-row items-center border-b-2 border-dark w-40">
                              <h2 class="my-1">Samedi</h2>
                              <svg fill="dark" viewBox="0 0 20 20" :class="{'rotate-180': open_saturday, 'rotate-0': !open_saturday}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="non" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                                <div :class="{'hidden': !open_saturday, 'absolute': open_saturday}" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="right-0 w-full mt-2 origin-top-right">
                                    <div class="grid grid-cols-1 gap-4 tablet:grid-cols-5">
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Petit-déjeuner</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Collation</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Déjeuner</h3>
                                            <div class="flex justify-between tablet:flex-col">
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Entrée</p>
                                                </div>
                                                <div class="w-1/3 mx-2 tablet:w-full tablet:mx-0">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Plat</p>
                                                </div>
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Dessert</p>
                                                </div>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Goûter</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Dîner</h3>
                                            <div class="flex justify-between tablet:flex-col">
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Entrée</p>
                                                </div>
                                                <div class="w-1/3 mx-2 tablet:w-full tablet:mx-0">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Plat</p>
                                                </div>
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Dessert</p>
                                                </div>    
                                            </div>
                                        </div>    
                                    </div>    
                                </div>
                              </div>    
                    </section>
                    <section id="sunday" class="mb-6">
                        <div class="relative" :class="{'h-[290vw] tablet:h-[60vw] laptop:h-[65vh] desktop:h-80': open_sunday, 'h-full': !open_sunday}" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95">
                            <button @click="open_sunday = !open_sunday" class="flex flex-row items-center border-b-2 border-dark w-40">
                              <h2 class="my-1">Dimanche</h2>
                              <svg fill="dark" viewBox="0 0 20 20" :class="{'rotate-180': open_sunday, 'rotate-0': !open_sunday}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="non" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                                <div :class="{'hidden': !open_sunday, 'absolute': open_sunday}" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="right-0 w-full mt-2 origin-top-right">
                                    <div class="grid grid-cols-1 gap-4 tablet:grid-cols-5">
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Petit-déjeuner</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Collation</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Déjeuner</h3>
                                            <div class="flex justify-between tablet:flex-col">
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Entrée</p>
                                                </div>
                                                <div class="w-1/3 mx-2 tablet:w-full tablet:mx-0">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Plat</p>
                                                </div>
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Dessert</p>
                                                </div>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Goûter</h3>
                                            <div class="w-1/3 tablet:w-full">
                                                <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden">
                                                    <img src="" alt="" class="h-full w-full object-cover">
                                                </a>    
                                            </div>
                                        </div>
                                        <div class="tablet:text-center font-fira font-bold">
                                            <h3 class="mb-4">Dîner</h3>
                                            <div class="flex justify-between tablet:flex-col">
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Entrée</p>
                                                </div>
                                                <div class="w-1/3 mx-2 tablet:w-full tablet:mx-0">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Plat</p>
                                                </div>
                                                <div class="w-1/3 tablet:w-full">
                                                    <a href="recepe.html" class="wrapper relative h-32 w-full border-2 border-primary flex items-center justify-center overflow-hidden mb-0">
                                                        <img src="" alt="" class="h-full w-full object-cover">
                                                    </a>
                                                    <p class="my-2">Dessert</p>
                                                </div>    
                                            </div>
                                        </div>    
                                    </div>    
                                </div>
                              </div>    
                    </section>
            
            </div>
            <div id="sidebar" class="w-full mb-4 laptop:ml-4 laptop:w-40">
                <h3>Suggestions de recettes</h3>
                <div class="border-2 border-dark p-4 grid grid-cols-3 gap-4 tablet:grid-cols-4 laptop:grid-cols-1">
                    <div v-for="recette in listeRecettes" :key="recette.id">
                        <img :src="recette.urlImage" alt="" class="">
                        <p class="mb-0">{{recette.nom}}</p>
                    </div>
                </div>
            </div>
        </div>

    </main>

</template>

<script>
import param from '@/param/param'

export default {
  name: 'Menu',
  data () {
    return {
      listeRecettes:[],
      open_monday: false,
      open_tuesday: false,
      open_wednesday: false,
      open_thursday: false,
      open_friday: false,
      open_saturday: false,
      open_sunday: false,

    }
  },
  created() {
      axios.get(param.hostSpecific+"listeRecettesAll")
      .then(response => {
          this.listeRecettes = response.data;
      })
      .catch(error => console.log(error));
  },
}
        
</script>

<style scoped>

</style>
