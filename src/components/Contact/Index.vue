<template>
  <layout>
    <!-- CONTACT US -->
    <div class="row contactUs">
      <div class="col-md-6 col-sm-12">
        <h1>Contact us</h1>
        <div class="csNumber d-md-none">
          <h1 class="font-weight-bold text-center"><img src="../../assets/img/customerService.png" />1-500-445</h1>
        </div>
        <p class="d-md-none text-center">Or kindly fill out this form, we’ll get back to you as quickly as possible</p>
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="nameFormInput" />
          </div>
          <div class="form-group">
            <label for="email">E-mail</label>
            <input type="email" class="form-control" id="emailFormInput" />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="messageFormTextArea" rows="4"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">SEND</button>
        </form>
      </div>

      <div class="col-md-6 d-none d-md-block">
        <h1>Customer Support</h1>
        <div class="csNumber">
          <h1 class="font-weight-bold"><img src="../../assets/img/customerService.png" />1-500-445</h1>
        </div>
        <p>Contact our customer support or email us at <span class="blue font-weight-bold">help@dana.id</span> if you need help</p>

        <h1>Social Media</h1>
        <p>Feel free to contact us at one of our social media outlets below</p>
        <div class="socialMedia">
          <a href="#"><i class="fab fa-facebook-square"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
    <!-- /END OF CONTACT US -->
  </layout>
</template>

<script>
export default {}
</script>

<style src="../../assets/css/contactUs.css" lang="css"></style>
