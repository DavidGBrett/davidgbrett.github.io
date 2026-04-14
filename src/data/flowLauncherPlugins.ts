import type { Project } from '../types/project';

export const flowLauncherPlugins: Project[] = [
	{
		name: 'App Audio Manager',
		subtitle: 'Flow Launcher Plugin',
		description: 'Control the volume and mute state of individual applications directly from Flow Launcher',
		icon: 'https://cdn.jsdelivr.net/gh/DavidGBrett/Flow.Launcher.Plugin.AppAudioManager@main/Flow.Launcher.Plugin.AppAudioManager/Assets/PluginIcon.png',
		links: [
			{ label: 'GitHub repo', href: 'https://github.com/DavidGBrett/Flow.Launcher.Plugin.AppAudioManager/tree/main' },
			{ label: 'Store page', href: 'https://www.flowlauncher.com/plugins/app-audio-manager/' }
		]
	},
	{
		name: 'Virtual Desktops',
		subtitle: 'Flow Launcher Plugin',
		description: 'Switch between Virtual Desktops using Flow Launcher',
		icon: 'https://cdn.jsdelivr.net/gh/DavidGBrett/Flow.Launcher.Plugin.VirtualDesktops@master/assets/main_icon.png',
		links: [
			{ label: 'GitHub repo', href: 'https://github.com/DavidGBrett/Flow.Launcher.Plugin.VirtualDesktops/tree/master' },
			{ label: 'Store page', href: 'https://www.flowlauncher.com/plugins/virtual-desktops/' }
		]
	},
	{
		name: 'Query Groups',
		subtitle: 'Flow Launcher Plugin',
		description: 'A plugin for creating custom groups of queries',
		icon: 'https://cdn.jsdelivr.net/gh/DavidGBrett/Flow.Launcher.Plugin.QueryGroups@main/Flow.Launcher.Plugin.QueryGroups/Assets/icon.png',
		links: [
			{ label: 'GitHub repo', href: 'https://github.com/DavidGBrett/Flow.Launcher.Plugin.QueryGroups/tree/main' },
			{ label: 'Store page', href: 'https://www.flowlauncher.com/plugins/query-groups/' }
		]
	},
	{
		name: 'Time In',
		subtitle: 'Flow Launcher Plugin',
		description: 'Get the current time in different timezones around the world',
		icon: 'https://cdn.jsdelivr.net/gh/DavidGBrett/Flow.Launcher.Plugin.TimeIn@main/Flow.Launcher.Plugin.TimeIn/Assets/PluginIcon.png',
		links: [
			{ label: 'GitHub repo', href: 'https://github.com/DavidGBrett/Flow.Launcher.Plugin.TimeIn/tree/main' },
			{ label: 'Store page', href: 'https://www.flowlauncher.com/plugins/time-in/' }
		]
	},
];
