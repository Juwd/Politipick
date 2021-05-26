<template>
  <div class="home">
     <section id="start">
     <v-row>
       <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            src="https://res.cloudinary.com/polipick/image/upload/v1621609807/FrontEnd/pexels-krisia-vinzon-902288_fqyqjz.jpg"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                  <v-col
                    class="white--text text-center"
                    cols="12"
                    tag="h1"
                  >
                    <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                      WELCOME TO
                    </span>

                    <br>

                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                      class="font-weight-black"
                    >
                      POLIPICK
                    </span>

                  </v-col>

                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#about-me')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
        </section>
        <section id="about-me">
          <div class="py-12"></div> 
          <div class="container text-center">
          <h2 class="display-2 font-weight-bold mb-3">ABOUT POLIPICK</h2> 
          <div class="v-responsive mx-auto mb-8" style="width: 56px;">
          <div class="v-responsive__content"><hr role="separator" aria-orientation="horizontal" class="mb-1 v-divider theme--light"> <hr role="separator" aria-orientation="horizontal" class="v-divider theme--light"></div></div> <div class="v-responsive mx-auto title font-weight-light mb-8" style="max-width: 720px;">
            <div class="v-responsive__content">
            A non-partisan and non-profit website that aims to congregate factual information regarding politicians in an easy to digest format.
          </div>
          </div> 
          <div class="v-avatar elevation-12 mb-12" style="height: 128px; min-width: 128px; width: 128px;">
            <div class="v-image v-responsive theme--light">
            <div class="v-responsive__sizer" style="padding-bottom: 100%;"></div>
            <div class="v-image__image v-image__image--cover" style="background-image: url(&quot;https://res.cloudinary.com/polipick/image/upload/v1621681092/FrontEnd/logo_siznbs.png&quot;); background-position: center center;">
            </div>
            <div class="v-responsive__content" style="width: 268px;"></div>
            </div>
            </div> 
            <div></div> 
            <!-- <a href="https://twitter.com/HatJod" class="v-btn v-btn--outlined theme--light v-size--large grey--text"><span class="v-btn__content"><span class="grey--text text--darken-1 font-weight-bold">
              Author of the website
            </span></span></a> -->
            </div> 
            <div class="py-12"></div>
        </section>
        <section id="features" class="grey lighten-3">
          <div class="py-12"></div>
          <div class="container text-center">
            <h2 class="display-2 font-weight-bold mb-3">POLIPICK FEATURES</h2> 
            <div class="v-responsive mx-auto mb-12" style="width: 56px;">
              <div class="v-responsive__content">
                <hr role="separator" aria-orientation="horizontal" class="mb-1 v-divider theme--light"> 
                <hr role="separator" aria-orientation="horizontal" class="v-divider theme--light">
              </div>
            </div> 
            <div class="row">
              <div class="col-md-4 col-12">
                <div class="py-12 px-4 v-card v-card--flat v-sheet theme--light grey lighten-5">
                  <div>
                    <div class="v-avatar primary" style="height: 88px; min-width: 88px; width: 88px;">
                      <i aria-hidden="true" class="v-icon notranslate mdi mdi-account-group-outline theme--dark" style="font-size: 36px;"></i>
                    </div>
                  </div> 
                  <div class="v-card__title justify-center font-weight-black text-uppercase">Crowd-sourced</div> 
                  <div class="v-card__text subtitle-1">Information on Polipick would be gathered by you the Pilipino people, but would be curated by individuals who are devoted
                      in upholding the truth and is non-partisan in any other way. These individuals would make sure that all the data are cited and are not simply heresay, rumors or propaganda.
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-12">
                <div class="py-12 px-4 v-card v-card--flat v-sheet theme--light grey lighten-5">
                  <div>
                    <div class="v-avatar primary" style="height: 88px; min-width: 88px; width: 88px;">
                      <i aria-hidden="true" class="v-icon notranslate mdi mdi-update theme--dark" style="font-size: 36px;"></i>
                    </div>
                  </div> 
                  <div class="v-card__title justify-center font-weight-black text-uppercase">Timely updates</div> 
                  <div class="v-card__text subtitle-1">Get up to date with latest news regarding the politicians that you want to see! Our community would make sure that the news are always up to date!
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-12">
              <div class="py-12 px-4 v-card v-card--flat v-sheet theme--light grey lighten-5">
                <div>
                  <div class="v-avatar primary" style="height: 88px; min-width: 88px; width: 88px;">
                    <i aria-hidden="true" class="v-icon notranslate mdi mdi-gavel theme--dark" style="font-size: 36px;"></i>
                  </div>
                </div>
                <div class="v-card__title justify-center font-weight-black text-uppercase"> Non-partisan site</div> 
                <div class="v-card__text subtitle-1">This website is not sponsored or affiliated by any politicians or 3rd party organizations. 
                  all money used to run the website would be shown
                </div>
              </div>
              </div>
            </div>
          </div>
          <div class="py-12"></div>
        </section>
        <section class="v-sheet theme--dark rounded-0" style="background-color: rgb(51, 51, 51); border-color: rgb(51, 51, 51);" id="contact">
          <div class="py-12"></div> 
            <div class="container">
              <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contact Me</h2> <div class="v-responsive mx-auto mb-12" style="width: 56px;"><div class="v-responsive__content"><hr role="separator" aria-orientation="horizontal" class="mb-1 v-divider theme--dark"> <hr role="separator" aria-orientation="horizontal" class="v-divider theme--dark"></div></div>
            <v-row>
              <v-col>
                <div class="v-responsive__content">
                  <h3 class="display-2 font-weight-bold sb-3 text-uppercase text-center"><v-icon color="blue" large>mdi-twitter</v-icon> @hatJod</h3>
                </div>
                
              </v-col>
            </v-row>
            </div> 
            <div class="py-12">
            </div>
        </section> 
</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  }
}
</script>
