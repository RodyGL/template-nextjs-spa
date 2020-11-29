function SafeHydrate(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <div suppressHydrationWarning>
      {typeof document === 'undefined' ? null : children}
    </div>
  );
}

export default function Index() {
  return (
    <SafeHydrate>
      <div>Hello Next!</div>
    </SafeHydrate>
  );
}
