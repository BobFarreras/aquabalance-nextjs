'use client';

import { useState, useEffect } from 'react';

export interface ToastProps {
  title?: string;
  description?: string;
  duration?: number; // pots passar Number.POSITIVE_INFINITY si vols "infinite"
  [key: string]: any;
}

export interface Toast extends ToastProps {
  id: string;
  dismiss: () => void;
  update: (props: Partial<ToastProps>) => void;
}

const TOAST_LIMIT = 1;

let count = 0;
function generateId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

interface ToastState {
  toasts: Toast[];
}

type Listener = (state: ToastState) => void;

const toastStore = {
  state: {
    toasts: [] as Toast[],
  },
  listeners: [] as Listener[],

  getState: () => toastStore.state,

  setState: (nextState: ToastState | ((state: ToastState) => ToastState)) => {
    if (typeof nextState === 'function') {
      toastStore.state = nextState(toastStore.state);
    } else {
      toastStore.state = { ...toastStore.state, ...nextState };
    }

    toastStore.listeners.forEach((listener) => listener(toastStore.state));
  },

  subscribe: (listener: Listener) => {
    toastStore.listeners.push(listener);
    return () => {
      toastStore.listeners = toastStore.listeners.filter((l) => l !== listener);
    };
  },
};

// Funció principal per crear un toast
export const toast = (props: ToastProps) => {
  const id = generateId();

  const dismiss = () => {
    toastStore.setState((state) => ({
      ...state,
      toasts: state.toasts.filter((t) => t.id !== id),
    }));
  };

  const update = (propsUpdate: Partial<ToastProps>) => {
    toastStore.setState((state) => ({
      ...state,
      toasts: state.toasts.map((t) => (t.id === id ? { ...t, ...propsUpdate } : t)),
    }));
  };

  toastStore.setState((state) => ({
    ...state,
    toasts: [{ ...props, id, dismiss, update }, ...state.toasts].slice(0, TOAST_LIMIT),
  }));

  return { id, dismiss, update };
};

// Hook React per Next.js
export function useToast() {
  const [state, setState] = useState<ToastState>(toastStore.getState());

  useEffect(() => {
    const unsubscribe = toastStore.subscribe(setState);
    return unsubscribe;
  }, []);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    state.toasts.forEach((t) => {
      if (t.duration === Infinity) return;

      const timeout = setTimeout(() => {
        t.dismiss();
      }, t.duration || 5000);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [state.toasts]);

  return {
    toast,
    toasts: state.toasts,
  };
}
