/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				socials: {
					twitter: '#1DA1F2',
					github: '#fff',
					osu: '#FF66AA',
					discord: '#7289DA',
					mail: '#fff',
				},
				trans: {
					'blue': '#5bcefa',
					'pink': '#f5a9b8',
				}
			},
			filter: {
				"twitter-shadow": "drop-shadow(0 0 2px #1DA1F2)",
				"github-shadow": "drop-shadow(0 0 2px #fff)",
				"osu-shadow": "drop-shadow(0 0 2px #FF66AA)",
				"discord-shadow": "drop-shadow(0 0 2px #7289DA)",
				"mail-shadow": "drop-shadow(0 0 2px #fff)",
			},
			backgroundImage: {
				"bubblez": "url('/assets/bubblez.jpg')",
				"bubblez-gif": "url('https://via.placeholder.com/1920x1080')",
				"placeholder": "url('https://via.placeholder.com/1920x1080')",
				"placeholder-gif": "url('https://via.placeholder.com/1920x1080')",
			},
			gridTemplateColumns: {
				"4": "repeat(4, 1fr)",
			},
			boxShadow: {
				"black-overlay": "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
			}
		},
	},
	plugins: [],
};
