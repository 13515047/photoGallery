<template>
  <div>
    <!-- HEADER + MENU -->
    <div class="row header">
      <div class="col-md-12">
        <nav class="navbar navbar-expand-md">
          <router-link :to="{ name: 'home' }" class="navbar-brand">
            <img src="../../assets/img/logo-dana-with-typography@3x.png" width="30" height="30" alt="DANA" />
          </router-link>
          <button onclick="openNav()" id="menuClick" class="d-md-none menuBars" type="button">
            <span id="menuIcon">&#9776;</span>
          </button>
          <div class="menu d-none d-md-block ml-auto">
            <router-link :to="{ name: 'about' }" class="">About</router-link>
            <router-link :to="{ name: 'contact' }" class="">Contact us</router-link>
          </div>
        </nav>
      </div>
    </div>
    <!-- /END OF HEADER + MENU -->

    <div class="row d-md-none">
      <div class="col-sm-12">
        <div id="expandNav" class="overlay">
          <div class="overlay-content">
            <router-link :to="{ name: 'about' }" class="">About</router-link>
            <router-link :to="{ name: 'contact' }" class="">Contact us</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="../../assets/css/navigator.css" lang="css"></style>
