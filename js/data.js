/**
 * Data Management for SCW2 Mods Showcase
 */

class ModsDataManager {
    constructor() {
        this.data = null;
        this.mods = [];
        this.categories = [];
        this.filteredMods = [];
        this.activeFilters = {
            category: null,
            search: '',
            sort: 'name-asc'
        };
    }

    /**
     * Load mods data from JSON file
     * @returns {Promise<Object>} Loaded data
     */
    async loadData() {
        try {
            const response = await fetch('/scw2mods/data/mods.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.data = await response.json();
            this.mods = this.data.mods || [];
            this.categories = this.data.categories || [];
            this.filteredMods = [...this.mods];
            return this.data;
        } catch (error) {
            console.error('Error loading mods data:', error);
            showToast('Erreur lors du chargement des données', 'error');
            return null;
        }
    }

    /**
     * Get all mods
     * @returns {Array} All mods
     */
    getAllMods() {
        return this.mods;
    }

    /**
     * Get all categories
     * @returns {Array} All categories
     */
    getCategories() {
        return this.categories;
    }

    /**
     * Get mod by ID
     * @param {string} modId - Mod ID
     * @returns {Object|null} Mod object or null
     */
    getModById(modId) {
        return this.mods.find(mod => mod.id === modId) || null;
    }

    /**
     * Get mods by category
     * @param {string} categoryId - Category ID
     * @returns {Array} Filtered mods
     */
    getModsByCategory(categoryId) {
        if (!categoryId) return this.mods;
        return this.mods.filter(mod => mod.category === categoryId);
    }

    /**
     * Search mods by query
     * @param {string} query - Search query
     * @returns {Array} Matching mods
     */
    searchMods(query) {
        if (!query || query.trim() === '') {
            return this.mods;
        }

        const searchTerm = query.toLowerCase().trim();
        return this.mods.filter(mod => {
            return (
                mod.name.toLowerCase().includes(searchTerm) ||
                mod.description.toLowerCase().includes(searchTerm) ||
                mod.longDescription.toLowerCase().includes(searchTerm) ||
                mod.author.toLowerCase().includes(searchTerm) ||
                mod.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        });
    }

    /**
     * Sort mods by criteria
     * @param {Array} mods - Mods array to sort
     * @param {string} sortBy - Sort criteria
     * @returns {Array} Sorted mods
     */
    sortMods(mods, sortBy) {
        const sorted = [...mods];

        switch (sortBy) {
            case 'name-asc':
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                sorted.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'date-desc':
                sorted.sort((a, b) =>
                    new Date(b.stats.lastUpdate) - new Date(a.stats.lastUpdate)
                );
                break;
            case 'date-asc':
                sorted.sort((a, b) =>
                    new Date(a.stats.lastUpdate) - new Date(b.stats.lastUpdate)
                );
                break;
            case 'downloads-desc':
                sorted.sort((a, b) => b.stats.downloads - a.stats.downloads);
                break;
            case 'downloads-asc':
                sorted.sort((a, b) => a.stats.downloads - b.stats.downloads);
                break;
            default:
                break;
        }

        return sorted;
    }

    /**
     * Apply all filters and return filtered mods
     * @returns {Array} Filtered and sorted mods
     */
    getFilteredMods() {
        let filtered = [...this.mods];

        // Apply category filter
        if (this.activeFilters.category) {
            filtered = filtered.filter(mod => mod.category === this.activeFilters.category);
        }

        // Apply search filter
        if (this.activeFilters.search) {
            const searchTerm = this.activeFilters.search.toLowerCase().trim();
            filtered = filtered.filter(mod => {
                return (
                    mod.name.toLowerCase().includes(searchTerm) ||
                    mod.description.toLowerCase().includes(searchTerm) ||
                    mod.longDescription.toLowerCase().includes(searchTerm) ||
                    mod.author.toLowerCase().includes(searchTerm) ||
                    mod.tags.some(tag => tag.toLowerCase().includes(searchTerm))
                );
            });
        }

        // Apply sorting
        filtered = this.sortMods(filtered, this.activeFilters.sort);

        this.filteredMods = filtered;
        return filtered;
    }

    /**
     * Set category filter
     * @param {string|null} categoryId - Category ID or null to clear
     */
    setFilter(categoryId) {
        this.activeFilters.category = categoryId;
    }

    /**
     * Set search query
     * @param {string} query - Search query
     */
    setSearch(query) {
        this.activeFilters.search = query;
    }

    /**
     * Set sort criteria
     * @param {string} sortBy - Sort criteria
     */
    setSort(sortBy) {
        this.activeFilters.sort = sortBy;
    }

    /**
     * Clear all filters
     */
    clearFilters() {
        this.activeFilters = {
            category: null,
            search: '',
            sort: 'name-asc'
        };
    }

    /**
     * Get site metadata
     * @returns {Object} Site metadata
     */
    getSiteInfo() {
        return this.data?.site || {};
    }

    /**
     * Get statistics
     * @returns {Object} Stats object
     */
    getStats() {
        return {
            totalMods: this.mods.length,
            categoriesCount: this.categories.length,
            lastUpdate: this.data?.site?.lastUpdated || '-',
            totalDownloads: this.mods.reduce((sum, mod) => sum + mod.stats.downloads, 0)
        };
    }

    /**
     * Get unique tags from all mods
     * @returns {Array} Unique tags
     */
    getAllTags() {
        const tagsSet = new Set();
        this.mods.forEach(mod => {
            mod.tags.forEach(tag => tagsSet.add(tag));
        });
        return Array.from(tagsSet).sort();
    }

    /**
     * Export filtered mods as JSON
     * @returns {string} JSON string
     */
    exportToJSON() {
        return JSON.stringify(this.filteredMods, null, 2);
    }

    /**
     * Get category name by ID
     * @param {string} categoryId - Category ID
     * @returns {string} Category name
     */
    getCategoryName(categoryId) {
        const category = this.categories.find(cat => cat.id === categoryId);
        return category ? category.name : categoryId;
    }
}

// Create global instance
const modsManager = new ModsDataManager();
