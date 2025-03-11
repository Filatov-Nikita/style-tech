import { useGrid } from 'vue-screen';

export default function() {
  const grid = useGrid({
    lg: 1024,
    md: 720.9,
    sm: 576.9,
    xs: 0,
  });

  return grid;
}
