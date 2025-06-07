import useInternalizations from "../utils/hooks/useInternalizations";

export default function Footer() {
    const { i18n } = useInternalizations();


    return (
        <footer className="bg-black text-gray-400 text-center py-6 text-sm">
            <p>
                © {new Date().getFullYear()} Ece Havancı. {i18n('footer.copyright')}
            </p>
        </footer>
    );
}