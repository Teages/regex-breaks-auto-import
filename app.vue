<script setup lang="ts">
const email = ref('Teages@test-domain.noth')

const isEmailValid = computed(() => {
  const emailRegex = /^[\w.!#$%&’*+/=?^`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/i
  if (email.value === '') {
    return 'signup.email_field_error_required'
  }

  return emailRegex.test(email.value) ? 'success' : 'signup.email_field_error_invalid'
})

useSomething()
</script>

<template>
  <div>
    {{ isEmailValid }}
  </div>
</template>
