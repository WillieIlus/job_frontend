<template>
  <!-- Main content -->
  <main class="flex-grow">
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">Welcome to our website!</h1>
        <p class="mt-1 text-xl text-gray-600">We're glad you're here.</p>
      </div>
    </div>
  </main>

  <!-- Sidebar -->
  <aside>
    <Form @submit="onSubmit" :validation-schema="schema">
      <label for="email">Your Email</label>
      <Field id="email_addr" name="email_addr" type="email" />
      <ErrorMessage name="email_addr" />

      <label for="password">Your Password</label>
      <Field id="password" name="acc_pazzword" type="password" />
      <ErrorMessage name="acc_pazzword" />

      <label>Gender</label>
      <div>
        <label for="male">
          <Field id="male" type="radio" name="gender" value="male" />
          Male
        </label>
        <label for="female">
          <Field id="female" type="radio" name="gender" value="female" />
          Female
        </label>
      </div>
      <ErrorMessage name="gender" />

      <label for="location">Location</label>
      <Field id="location" name="location" as="select">
        <option value="" disabled>Select location</option>
        <option value="city">City</option>
        <option value="suburb">Suburb</option>
        <option value="rural">Rural</option>
      </Field>
      <ErrorMessage name="location" />

      <label>Interests</label>
      <div>
        <label for="coding">
          <Field id="coding" type="checkbox" name="interests" value="coding" />
          Coding
        </label>
        <label for="gaming">
          <Field id="gaming" type="checkbox" name="interests" value="gaming" />
          Gaming
        </label>
      </div>
      <ErrorMessage name="interests" />

      <button type="submit">Submit</button>
    </Form>
  </aside>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email_addr: Yup.string().email().required().label('Email Address'),
  acc_pazzword: Yup.string().min(5).required().label('Your Password'),
  gender: Yup.string().required().label('Gender'),
  location: Yup.string().required().label('Location'),
  interests: Yup.array().min(1, 'Select at least one interest').label('Interests'),
});

function onSubmit(values) {
  alert(JSON.stringify(values, null, 2));
}
</script>
