export function DoubleContainer({ children, className = "" }) {
    return (
      <>
        <section className={`bg-[#DAF7A6]  display: none; ${className}`}>
          {children}
        </section>
      </>
    );
  }
  