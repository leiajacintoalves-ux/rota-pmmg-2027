export const firebaseConfig = {
  apiKey: "AIzaSyAdNoPeMVRPZKZ-RK7Kx89x8CgLdnGrCMk",
  authDomain: "rota-pmmg-2027.firebaseapp.com",
  projectId: "rota-pmmg-2027",
  storageBucket: "rota-pmmg-2027.firebasestorage.app",
  messagingSenderId: "457530921446",
  appId: "1:457530921446:web:67b1f1015304772edb8627"
};

export function isFirebaseConfigured() {
  return Object.values(firebaseConfig).every(
    value => typeof value === "string" && value.trim().length > 0
  );
}
