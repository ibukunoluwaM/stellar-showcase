const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
      <p>Built with care by Ibukunoluwa Olateju</p>
      <p className="font-mono">© {new Date().getFullYear()}</p>
    </div>
  </footer>
);

export default Footer;
