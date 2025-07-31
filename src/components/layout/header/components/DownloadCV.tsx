function DownloadCV() {
	const handleDownloadCV = () => {
		window.open('/Cristopher Romero.pdf', '_blank');
	};

	return (
		<button
			onClick={handleDownloadCV}
			aria-label="Download CV"
			className="group relative p-2"
			title="Descargar CV"
			type="button"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="icon icon-tabler icons-tabler-outline icon-tabler-download"
			>
				<title>Download Icon</title>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
				<path d="M7 11l5 5l5 -5" />
				<path d="M12 4l0 12" />
			</svg>
			<div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 transform whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-white dark:text-gray-900">
				Descargar CV
			</div>
		</button>
	);
}

export default DownloadCV;
