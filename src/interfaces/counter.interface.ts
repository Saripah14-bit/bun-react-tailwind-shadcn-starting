export interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  reset: () => void;
}