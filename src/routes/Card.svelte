<script lang="ts">
  import { lockStore } from '../stores/lockStore';
  import LockIcon from '../components/LockIcon.svelte';
  import InputField from '../components/InputField.svelte';
  import Button from '../components/Button.svelte';
  
  $: digits = $lockStore.digits;
  $: lockState = $lockStore.lockState;
  $: digitsLeft = $lockStore.digitsLeft;

  function handleInput(index: number): void {
    lockStore.updateDigit(index, digits[index]);
  }
</script>
  
  <div class="max-w-xl mx-auto mt-20 p-12 bg-white rounded-2xl shadow-xl">
    <!-- Row 1: Lock Icon -->
    <div class="flex justify-center mb-8">
      <div class="scale-150">
        <LockIcon {lockState} />
      </div>
    </div>
  
    <!-- Row 2: Title -->
    <h2 class="text-center text-4xl font-bold text-gray-800 mb-4">Easy Peasy</h2>
  
    <!-- Row 3: Description -->
    <p class="text-center text-xl text-gray-600 mb-12 px-8">
      Enter 6-digit code from your two-factor authenticator app.
    </p>
  
    <!-- Row 4: Input Fields -->
    <div class="flex justify-center mb-12">
      <div class="flex gap-4">
        {#each digits.slice(0, 3) as digit, index}
          <InputField
            bind:value={digits[index]}
            {index}
            onInput={handleInput}
            {lockState}
          />
        {/each}
      </div>
      <div class="w-8"></div> <!-- Spacer -->
      <div class="flex gap-4">
        {#each digits.slice(3) as digit, index}
          <InputField
            bind:value={digits[index + 3]}
            index={index + 3}
            onInput={handleInput}
            {lockState}
          />
        {/each}
      </div>
    </div>
  
    <!-- Row 5: Button -->
    <div class="px-4">
      <Button {digitsLeft} {lockState} />
    </div>
  </div>
  