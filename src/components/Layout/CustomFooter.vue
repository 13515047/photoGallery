<template>
  <!-- FOOTER -->
   <div class="container-fluid">
    <div class="row footer">
      <div class="col-md-6 followUs text-center text-md-left">
        <p>Follow Us:</p>
        <a href="#"><i class="fab fa-facebook-square"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
      </div>

      <div class="col-md-6">
        <div class="menu text-center text-md-right">
          <router-link :to="{ name: 'about' }" class="">ABOUT</router-link>
          <router-link :to="{ name: 'contact' }" class="">CONTACT US</router-link>
        </div>
        <p class="text-center text-md-right">&copy; 2017 DANA - PT. Espay Debit Indonesia Koe. All Rights Reserved.</p>
      </div>
    </div>
  </div>
  <!-- /END OF FOOTER -->
</template>

<style src="@/assets/css/footer.css" lang="css"></style>
