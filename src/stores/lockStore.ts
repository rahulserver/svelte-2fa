import { writable, type Writable } from 'svelte/store';

type LockState = "default" | "correct" | "wrong";

interface LockStore {
  digits: string[];
  lockState: LockState;
  digitsLeft: number;
}

function createLockStore(): {
  subscribe: Writable<LockStore>['subscribe'];
  updateDigit: (index: number, value: string) => void;
  reset: () => void;
} {
  const { subscribe, set, update } = writable<LockStore>({
    digits: Array(6).fill(""),
    lockState: "default",
    digitsLeft: 6
  });

  return {
    subscribe,
    updateDigit: (index: number, value: string): void => {
      update(store => {
        // Validate digit
        const newValue = /^\d?$/.test(value) ? value : "";
        
        // Update digits array
        const newDigits = [...store.digits];
        newDigits[index] = newValue;
        
        // Calculate remaining digits
        const remainingDigits = newDigits.filter(d => d === "").length;
        
        // Validate complete code
        const newLockState = remainingDigits === 0
          ? validateCode(newDigits.join("")) ? "correct" : "wrong"
          : "default";

        return {
          digits: newDigits,
          digitsLeft: remainingDigits,
          lockState: newLockState
        };
      });
    },
    reset: (): void => {
      set({
        digits: Array(6).fill(""),
        lockState: "default",
        digitsLeft: 6
      });
    }
  };
}

function validateCode(code: string): boolean {
  return code === "123456"; // Replace with real validation
}

export const lockStore = createLockStore(); 