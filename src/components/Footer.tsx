export default function Footer() {
  return (
    <footer
      className="px-[6%] py-12 flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ borderTop: '2px solid #2e2e2e' }}
    >
      <p className="font-cormorant font-light italic text-[var(--text-dim)] text-sm">
        &ldquo;Untuk pria yang tidak berhenti tumbuh.&rdquo;
      </p>
      <p className="text-[0.55rem] tracking-[0.35em] uppercase text-[var(--text-dim)]">
        © 2024 Man to Man — by Ourdays
      </p>
    </footer>
  )
}
