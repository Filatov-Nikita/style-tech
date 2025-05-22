import { useGrid } from 'vue-screen';

export default function() {
  const grid = useGrid({
    xl: 1360.1,
    lg: 1024,
    md: 768,
    sm: 541,
    xs: 0,
    mobile: (grid) => !grid.md,
  });

  return grid;
}
