/**
 * Returns color classes for technology badges based on technology name
 * @param {string} technology - The name of the technology
 * @returns {string} Tailwind CSS classes for the badge
 */
export function getBadgeColorClasses(technology) {
    const tech = technology.toLowerCase();

    // Frontend technologies
    if (tech.includes('react')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    if (tech.includes('vue')) return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300';
    if (tech.includes('angular')) return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    if (tech.includes('next') || tech.includes('nuxt')) return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    if (tech.includes('tailwind')) return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300';
    if (tech.includes('bootstrap')) return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
    if (tech.includes('javascript') || tech.includes('js')) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    if (tech.includes('typescript') || tech.includes('ts')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';

    // Backend technologies
    if (tech.includes('node')) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    if (tech.includes('express')) return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    if (tech.includes('django')) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    if (tech.includes('flask')) return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    if (tech.includes('php')) return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300';
    if (tech.includes('laravel')) return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';

    // Databases
    if (tech.includes('sql') || tech.includes('postgres') || tech.includes('mysql')) {
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    }
    if (tech.includes('mongo')) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    if (tech.includes('firebase')) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';

    // Cloud and DevOps
    if (tech.includes('aws')) return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
    if (tech.includes('azure')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    if (tech.includes('google cloud') || tech.includes('gcp')) {
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    }
    if (tech.includes('docker')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    if (tech.includes('kubernetes') || tech.includes('k8s')) {
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    }

    // Design tools
    if (tech.includes('figma')) return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
    if (tech.includes('sketch')) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    if (tech.includes('adobe')) return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';

    // Testing
    if (tech.includes('jest')) return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    if (tech.includes('cypress')) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';

    // State management
    if (tech.includes('redux')) return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
    if (tech.includes('zustand')) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';

    // Default color for unrecognized technologies
    return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
}