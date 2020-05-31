<template>
  <b-card :title=" isLogin ? 'Login' : 'Sign up'" sub-title="Enter your credentials" class="login-card" >
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        label="Email:"
        label-for="email"
      >
        <b-form-input
          id="email"
          v-model="form.email"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Password:"
        label-for="password"
      >
        <b-form-input
          id="password"
          v-model="form.password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">{{ isLogin ? 'Login' : 'Sign up'}}</b-button>
      <b-button type="button" @click="isLogin = !isLogin" variant="danger">Switch to {{ isLogin ? 'Sign up' : 'Login'}}</b-button>
    </b-form>
  </b-card>

</template>

<script>
    export default {
      name: "index",
      data(){
        return {
         form: {
           email: '',
           password: '',
         },
          isLogin: false
        }
      },
      methods: {
        onSubmit(evt) {
          evt.preventDefault()
          alert(JSON.stringify(this.form))
        },
        onReset(evt) {
          evt.preventDefault()
          // Reset our form values
          this.form.email = ''
          this.form.password = ''
        }
      }
    }
</script>

<style scoped>
  .login-card{
    max-width:40rem;
    margin-left: auto;
    margin-right: auto
  }
</style>
