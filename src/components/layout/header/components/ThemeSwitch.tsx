import { LV_APP_THEME_OBJ } from '@/lib/constants';
import { useEffect, useState } from 'preact/hooks';

type APP_THEME_TYPE = 'light' | 'dark';

function ThemeSwitch() {
	const [theme, setTheme] = useState<APP_THEME_TYPE>(LV_APP_THEME_OBJ.LIGHT);

	const checkStoredTheme = () => {
		const storedTheme = localStorage.getItem('theme');
		const preferColorScheme = window.matchMedia(
			'(prefers-color-scheme: dark)',
		).matches;

		if (
			storedTheme === LV_APP_THEME_OBJ.DARK ||
			(storedTheme === null && preferColorScheme)
		) {
			document.documentElement.classList.add(LV_APP_THEME_OBJ.DARK);
			localStorage.setItem('theme', LV_APP_THEME_OBJ.DARK);
			setTheme(LV_APP_THEME_OBJ.DARK);
			return;
		}

		document.documentElement.classList.add(LV_APP_THEME_OBJ.LIGHT);
		localStorage.setItem('theme', LV_APP_THEME_OBJ.LIGHT);
		setTheme(LV_APP_THEME_OBJ.LIGHT);
	};

	const toggleTheme = (theme: APP_THEME_TYPE) => {
		document.documentElement.classList.remove(
			LV_APP_THEME_OBJ.LIGHT,
			LV_APP_THEME_OBJ.DARK,
		);
		document.documentElement.classList.add(theme);
		localStorage.setItem('theme', theme);
		setTheme(theme);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies:
	useEffect(() => {
		checkStoredTheme();
	}, []);

	return (
		// TODO: Extract the svg icons to a separate component
		<button
			type="button"
			class="p-2"
			onClick={() =>
				toggleTheme(
					theme === LV_APP_THEME_OBJ.DARK
						? LV_APP_THEME_OBJ.LIGHT
						: LV_APP_THEME_OBJ.DARK,
				)
			}
		>
			{theme === LV_APP_THEME_OBJ.DARK ? (
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
					class="icon icon-tabler icons-tabler-outline icon-tabler-sun"
				>
					<title id="sun-icon-title">SunIcon</title>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
					<path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
				</svg>
			) : (
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
					class="icon icon-tabler icons-tabler-outline icon-tabler-moon"
				>
					<title id="moon-icon-title">MoonIcon</title>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
				</svg>
			)}
		</button>
	);
}

export default ThemeSwitch;
