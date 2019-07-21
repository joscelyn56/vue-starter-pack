<template>
  <div class="authentication">
    <div class="auth">
      <div class="form-header">
        <p>Sign up with</p>
        <div class="social-login">
          <button class="white-blue-btn">
            <img
              src="assets/svg/google.svg"
              alt="google logo">Google</button>
        </div>
      </div>
      <div class="form">
        <p>Or sign up with credentials</p>
        <div class="fields">
          <img src="assets/svg/user.svg">
          <input
            type="text"
            placeholder="Full name">
        </div>
        <div class="fields">
          <img src="assets/svg/ic_email.svg">
          <input
            type="text"
            placeholder="Email">
        </div>
        <div class="fields">
          <img src="assets/svg/ic_password.svg">
          <input
            type="text"
            placeholder="Password">
        </div>
        <div class="check">
          <label>
            <input type="checkbox">I agree with the
            <router-link to="/"> Terms </router-link>and
            <router-link to="/"> Privacy Policy</router-link>
          </label>
        </div>
        <div class="submit-logo-form">
          <button class="primary-btn">Create Account</button>
        </div>
      </div>
    </div>
    <div class="auth-links">
      <p class="text-center">
        <router-link to="/login">
          I have an account
        </router-link>
      </p>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data: () => ({})
}
</script>
