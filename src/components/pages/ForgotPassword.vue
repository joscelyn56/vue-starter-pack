<template>
  <div class="authentication">
    <div class="auth">
      <div class="form-header">
        <p>Forgot Password</p>
      </div>
      <div class="form">
        <p>Enter email associated with account</p>
        <div class="fields">
          <img src="assets/svg/ic_email.svg">
          <input
            type="text"
            placeholder="Email">
        </div>
        <div class="submit-logo-form">
          <button class="primary-btn">Reset Password</button>
        </div>
      </div>
    </div>
    <div class="auth-links">
      <p class="text-center">
        <router-link to="/login">
          Sign in
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
