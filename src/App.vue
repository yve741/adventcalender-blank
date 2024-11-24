<template>
  <v-app >
    <vue-particles
            id="tsparticles"
            @particles-loaded="particlesLoaded"
            :options="{
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse'
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 50,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#ffffff'
                        },
                        move: {
                            direction: 'bottom',
                            enable: true,
                            outModes: 'out',
                            speed: 2,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 700
                        },
                        opacity: {
                            value: 0.7
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: 6
                        },
                        wobble: {
                          enable: true,
                          distance: 10,
                          speed: 10
                        },
                        zIndex:{
                          value: {
                            min: 0,
                            max: 100
                          }
                        }
                    },
                }"
        />
    <v-main class="bg-gradient">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  const particlesLoaded = async (container: any) => {
    console.log("Particles container loaded", container);
};
</script>
<style>
.bg-gradient{
  background: rgb(5,69,123);
  background: linear-gradient(180deg, rgba(5,69,123,1) 0%, rgba(0,215,197,1) 100%);
}
</style>
