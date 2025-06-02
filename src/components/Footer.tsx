export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 text-center py-6 text-sm">
            <p>
                © {new Date().getFullYear()} Ece Havancı. Tüm hakları saklıdır.
            </p>
        </footer>
    );
}