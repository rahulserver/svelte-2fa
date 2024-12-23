<script lang="ts">
    import LockIcon from '../components/LockIcon.svelte';
    import InputField from '../components/InputField.svelte';
    import Button from '../components/Button.svelte';
  
    let digits: string[] = Array(6).fill("");
    let lockState: "default" | "correct" | "wrong" = "default";
    let digitsLeft: number = 6;
  
    function handleInput(index: number): void {
      if (!/^\d?$/.test(digits[index])) {
        digits[index] = "";
      }
      digitsLeft = digits.filter((digit) => digit === "").length;
  
      if (digitsLeft === 0) {
        lockState = validateCode(digits.join("")) ? "correct" : "wrong";
      } else {
        lockState = "default";
      }
    }
  
    function validateCode(code: string): boolean {
      return code === "123456"; // Replace with real validation
    }
  </script>
  
  <div class="max-w-md mx-auto mt-20 p-8 bg-white rounded-xl shadow-lg">
    <!-- Row 1: Lock Icon -->
    <div class="flex justify-center mb-6">
      <LockIcon {lockState} />
    </div>
  
    <!-- Row 2: Title -->
    <h2 class="text-center text-2xl font-bold text-gray-800 mb-3">Easy Peasy</h2>
  
    <!-- Row 3: Description -->
    <p class="text-center text-gray-600 mb-8 px-4">
      Enter 6-digit code from your two-factor authenticator app.
    </p>
  
    <!-- Row 4: Input Fields -->
    <div class="flex justify-center gap-3 mb-8">
      {#each digits as digit, index}
        <InputField
          bind:value={digits[index]}
          {index}
          onInput={handleInput}
        />
      {/each}
    </div>
  
    <!-- Row 5: Button -->
    <div class="px-2">
      <Button {digitsLeft} {lockState} />
    </div>
  </div>
  