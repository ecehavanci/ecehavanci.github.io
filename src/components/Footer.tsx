import useInternalizations from "../utils/hooks/useInternalizations";

export default function Footer() {
    const { i18n } = useInternalizations();


    return (
        <footer className="bg-black text-gray-400 py-6 text-sm ">
            <div className="flex justify-between gap-2 pr-2 pl-2">
                <p>
                    © {new Date().getFullYear()} Ece Havancı. {i18n('footer.copyright')}
                </p>
                <div className="flex gap-4">
                    <a
                        href="mailto:havanciece@gmail.com"
                        className="text-cyber-orange hover:underline hover:text-orange-400 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ecehavanci/"
                        className="text-cyber-orange hover:underline hover:text-orange-400 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>

                    </a>
                </div>

            </div>

        </footer>
    );
}