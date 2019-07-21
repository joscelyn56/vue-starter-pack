<template>
  <div class="authentication">
    <div class="auth">
      <div class="form-header">
        <p>Sign in with</p>
        <div class="social-login">
          <button class="white-blue-btn">
            <img
              src="assets/svg/google.svg"
              alt="google logo">Google</button>
        </div>
      </div>
      <div class="form">
        <p>Or sign in with credentials</p>
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
            <input type="checkbox"> Remember Me
          </label>
        </div>
        <div class="submit-logo-form">
          <button class="primary-btn">Sign In</button>
        </div>
      </div>
    </div>
    <div class="auth-links">
      <p>
        <router-link to="/forgot-password">
          Forgot password?
        </router-link>
      </p>
      <p>
        <router-link to="/register">
          Create new account
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
