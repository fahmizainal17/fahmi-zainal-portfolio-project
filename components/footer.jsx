// components/footer.jsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-muted/30">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fahmi Zainal. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <Link href="https://github.com/fahmizainal17" className="text-sm text-muted-foreground hover:text-foreground" target="_blank">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/fahmizainal17" className="text-sm text-muted-foreground hover:text-foreground" target="_blank">
            LinkedIn
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}