<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <form @submit.prevent="handleSubmit()">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" v-model="form.name" name="name" type="text" placeholder="Text input">
              </div>
            </div>

            <div class="field">
              <label class="label">Username</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input is-success" v-model="form.username" name="username" type="text" placeholder="Text input">
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="user"/>
                </span>
                <span v-if="form.username" class="icon is-small is-right">
                  <font-awesome-icon icon="check"/>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input v-validate="'required|email'"
                       name="email"
                       class="input"
                       :class="{'is-danger': errors.has('email')}"
                       v-model="form.email"
                       type="email"
                       placeholder="Email input">
                <span class="icon is-small is-left">
                  <font-awesome-icon icon="envelope"/>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
                <span v-if="form.email && !errors.has('email')" class="icon is-small is-right">
                  <font-awesome-icon icon="check"/>
                </span>
              </div>
              <p v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</p>
            </div>

            <div class="field">
              <label class="label">Subject</label>
              <div class="control">
                <div class="select">
                  <select name="subject" v-model="form.subject">
                    <option>Option 1</option>
                    <option>Options 2</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea v-model="form.message" name="message" class="textarea" placeholder="Textarea"></textarea>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" name="tos-agree" v-model="form.tosAgree">
                  I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
              <div class="control">
                <button class="button is-text">Cancel</button>
              </div>
            </div>
          </form>
        </div>
        <div class="column">
          <nav class="panel">
            <p class="panel-heading">
              Form Data
            </p>
            <p class="panel-block" data-cy="name">
              Name: {{ form.name }}
            </p>
            <p class="panel-block" data-cy="username">
              Username: {{ form.username }}
            </p>
            <p class="panel-block" data-cy="email">
              Email: {{ form.email }}
            </p>
            <p class="panel-block" data-cy="subject">
              Subject: {{ form.subject }}
            </p>
            <p class="panel-block" data-cy="message">
              Message: {{ form.message }}
            </p>
            <p class="panel-block" data-cy="tos-agree">
              TOS Agreed: {{ form.tosAgree }}
            </p>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'sign-up',
    data () {
      return {
        form: {
          name: null,
          username: null,
          email: null,
          subject: null,
          message: null,
          tosAgree: false,
        }
      }
    },
    watch: {

    },
    methods: {
      handleSubmit () {
        alert('🤩')
      }
    }
  }
</script>

<style scoped>

</style>
