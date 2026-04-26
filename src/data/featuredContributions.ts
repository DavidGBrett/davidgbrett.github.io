import type { Project } from '../types/project';

export const featuredContributions: Project[] = [
	{
		name: '[FEATURE] Plugin settings window & context menu option',
		subtitle: 'Flow-Launcher/Flow.Launcher',
		description: 'Add a context menu option for all plugins, which calls a new api method, which opens a new plugin settings window for that plugin.',
		links: [
			{ label: 'GitHub Pull Request', href: 'https://github.com/Flow-Launcher/Flow.Launcher/pull/4381' },
		]
	},
	{
		name: '[FEATURE] Add sorting modes to the plugin store',
		subtitle: 'Flow-Launcher/Flow.Launcher',
		description: 'Add dropdown with sorting modes to the plugin store panel of the settings window.',
		links: [
			{ label: 'GitHub Pull Request', href: 'https://github.com/Flow-Launcher/Flow.Launcher/pull/4398' },
		]
	},
	{
		name: 'Add "Below Minimum" Tag',
		subtitle: 'Lacro59/playnite-systemchecker-plugin',
		description: 'Add "Below Minimum" tag to games if they your specs don\'t meet their minimum requirements',
		links: [
			{ label: 'GitHub Pull Request', href: 'https://github.com/Lacro59/playnite-systemchecker-plugin/pull/64' },
		]
	},
];
