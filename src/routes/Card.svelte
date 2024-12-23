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
  
  <div class="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
    <!-- Row 1: Lock Icon -->
    <LockIcon {lockState} />
  
    <!-- Row 2: Title -->
    <h2 class="text-center text-lg font-bold text-gray-700 mb-2">Easy Peasy</h2>
  
    <!-- Row 3: Description -->
    <p class="text-center text-gray-500 mb-4">Enter 6-digit code from your two-factor authenticator app.</p>
  
    <!-- Row 4: Input Fields -->
    <div class="flex justify-center space-x-2 mb-4">
      {#each digits as digit, index}
        <InputField
          bind:value={digits[index]}
          {index}
          onInput={handleInput}
        />
      {/each}
    </div>
  
    <!-- Row 5: Button -->
    <Button {digitsLeft} {lockState} />
  </div>
  