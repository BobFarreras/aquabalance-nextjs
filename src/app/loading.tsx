// src/app/loading.tsx

import LoadingSpinner from "@/components/LoadingSpinner"; // Assegura't que la ruta és correcta

export default function Loading() {
  // Aquest component es mostrarà automàticament mentre una pàgina navega
  return <LoadingSpinner />;
}